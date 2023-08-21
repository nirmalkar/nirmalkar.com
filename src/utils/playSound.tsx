import linkSound from "../assets/sounds/cool-interface-click-tone.wav";
import toggleSound from "../assets/sounds/light-on-off.wav";
const soundObject = {
  linkSound,
  toggleSound,
};
export function playSound(ClickSound: string) {
  const audio = new Audio(soundObject[ClickSound]);
  audio.play();
}
