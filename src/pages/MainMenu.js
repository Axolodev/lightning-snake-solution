import { Lightning } from "@lightningjs/sdk";

class MainMenu extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      color: 0xff333333,
      rect: true,
    };
  }
}

export default MainMenu;