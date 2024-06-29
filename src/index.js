import "./styles.css";
import { clickEventDropdownButtons } from "./dropdown.js";
import { startSlider } from "./image-slider.js";
import "./backward.svg";
import "./forward.svg";

let start = async () => {
  await startSlider();
};

await start();

clickEventDropdownButtons();
