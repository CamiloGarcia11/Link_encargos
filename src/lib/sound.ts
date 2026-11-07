// Lightweight Web Audio API synthesizer for silky luxury micro-feedback chimes
let audioCtx: AudioContext | null = null;
let soundEnabled = true;

export function toggleSound(): boolean {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    playTapSound();
  }
  return soundEnabled;
}

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

export function playTapSound() {
  if (typeof window === "undefined" || !soundEnabled) return;

  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    // Warm harmonic golden chime (G5 783.99Hz to C6 1046.50Hz sweep)
    const now = audioCtx.currentTime;
    osc.frequency.setValueAtTime(783.99, now); // G5
    osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.09); // C6

    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  } catch {
    // Graceful fallback if audio is not permitted by browser policy
  }
}

export function playCelebrationSound() {
  if (typeof window === "undefined" || !soundEnabled) return;

  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    // Play a gentle two-note arpeggio chord
    const notes = [659.25, 783.99, 1046.5]; // E5, G5, C6
    notes.forEach((freq, i) => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const noteTime = audioCtx.currentTime + i * 0.06;

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.06, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.18);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.19);
    });
  } catch {
    // Fallback
  }
}
