import { Lightning, Colors } from "@lightningjs/sdk";

class Game extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      color: Colors("black").get(),
      rect: true,
    };
  }

  enableGameLoop() {
    requestAnimationFrame(this.gameLoop);
  }

  gameLoop(currentTimestamp) {
    const deltaTime = Math.ceil(currentTimestamp - this.previousTimeStamp);
    this.deltaTime = deltaTime;
    this.previousTimeStamp = currentTimestamp;
    requestAnimationFrame(this.gameLoop);
  }

  disableGameLoop() {
    cancelAnimationFrame(this.gameLoop);
  }

  _active() {
    this.enableGameLoop();
  }

  _inactive() {
    this.disableGameLoop();
  }

  _construct() {
    this.gameLoop = this.gameLoop.bind(this);
    this.previousTimeStamp = 0;
  }
}

export default Game;
