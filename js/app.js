import { SonetoModel } from "./model.js";
import { SonetoView } from "./view.js";
import { SonetoController } from "./controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new SonetoModel();
  const view = new SonetoView();
  const controller = new SonetoController(model, view);

  controller.init();
});