import { Lightning, Colors } from "@lightningjs/sdk";

class Highscore extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      color: Colors("black").get(),
      rect: true,
    };
  }
}

export default Highscore;
