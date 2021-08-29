import anime from "animejs";
import { wait } from "helpers/dev.helpers";

import { Scene } from "../scene";
import * as THREE from "three";

class EminentIconScene extends Scene {
  static _name = "eminent_icon";

  // perlinEnabled = true
  //
  // constructor(data, engine) {
  //   super(data, engine)
  // }

  setScale(dir, noAnim = false) {
    const scale =
      dir === 1 ? this.data.particlesMinSize : this.data.particlesMaxSize;

    if (noAnim) {
      this.noise.particlesSize = scale;
    }

    anime({
      targets: this.noise,
      particlesSize: scale,
      duration: 500,
      easing: "linear",
    });
  }

  async transition(from, to, currentSectionTitle) {
    switch (currentSectionTitle) {
      case "home": {
        switch (to) {
          case 1: {
            await wait(this.fade_config.scale_duration);

            this.active = true;
            this.updateCamera();

            // this.enabled = true
            // this.positionWatch = true
            // this.startAnimation(1, true)
            // this.setScale(1, true)

            // await wait(100)

            // this.saveObjectsProperties()

            this.startAnimation();
            await this.fadeOut(true);
            await this.fadeIn();

            break;
          }

          default: {
            if (this.active) {
              await this.fadeOut();
              this.active = false;
            }
            break;
          }
        }
        return;
      }
      default: {
        if (this.active) {
          await this.fadeOut();
          this.active = false;
        }
        break;
      }
    }
  }

  onLoad() {
    this.initNoise();

    this.clips.forEach((clip) => {
      clip.loop = THREE.LoopRepeat;

      clip.clampWhenFinished = false;
    });
  }

  update(_, time) {
    this.noise.update(_, time);
  }
}

export { EminentIconScene };
