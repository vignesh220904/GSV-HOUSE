// Web Audio API Audio Synthesizer for Temple Bell and Traditional Ambient Music

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isPlayingAmbient: boolean = false;
  private ambientTimer: number | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Temple Bell Sound Synthesis (கோவில் மணி ஒலி)
  playTempleBell() {
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Fundamental & Harmonics for resonant South Indian temple bell sound
    const bellFrequencies = [432, 864, 1296, 1728, 2592];

    bellFrequencies.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, now);

      // Decay calculation: lower harmonics linger longer like a bronze temple bell
      const duration = 3.5 - idx * 0.4;
      const initialGain = (0.25 / (idx + 1));

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(initialGain, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }

  // Soft Button Click Sound
  playClickSound() {
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, now); // D5 note
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08); // A5 note

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.13);
  }

  // Ambient Classical Veena Notes Synthesizer (Ambient Background Music)
  toggleAmbientMusic(enable: boolean, onStateChange?: (playing: boolean) => void) {
    this.initCtx();

    if (enable) {
      this.isPlayingAmbient = true;
      if (onStateChange) onStateChange(true);
      this.scheduleAmbientNotes();
    } else {
      this.isPlayingAmbient = false;
      if (this.ambientTimer) {
        window.clearTimeout(this.ambientTimer);
        this.ambientTimer = null;
      }
      if (onStateChange) onStateChange(false);
    }
  }

  getIsPlaying(): boolean {
    return this.isPlayingAmbient;
  }

  private scheduleAmbientNotes() {
    if (!this.isPlayingAmbient || !this.ctx) return;

    // Raga Mayamalavagowla inspired scale frequencies (Traditional Indian Raga for auspicious mornings)
    // C, Db, E, F, G, Ab, B, C
    const ragaNotes = [261.63, 277.18, 329.63, 349.23, 392.00, 415.30, 493.88, 523.25, 659.25, 783.99];
    const note = ragaNotes[Math.floor(Math.random() * ragaNotes.length)];
    const duration = 2.0 + Math.random() * 1.5;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(note, now);

    // Warm pluck attack & gentle decay like a Veena string
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.1);

    const nextInterval = 800 + Math.random() * 1200;
    this.ambientTimer = window.setTimeout(() => {
      this.scheduleAmbientNotes();
    }, nextInterval);
  }
}

export const soundEngine = new SoundEngine();
