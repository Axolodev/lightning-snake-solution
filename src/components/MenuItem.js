import { Lightning, Colors } from "@lightningjs/sdk";
import fontStyles from "../lib/fontStyles";

class MenuItem extends Lightning.Component {
  static _template() {
    return {
      text: {
        ...fontStyles.menuItem,
      },
    };
  }

  set content(content) {
    this._content = content;
    this.patch({
      text: {
        text: content,
      },
    });
  }

  _handleEnter() {
    this.signal("menuItemSignal", this._content);
  }

  _focus() {
    this.patch({
      text: {
        textColor: Colors("olive").get(),
      },
    });
  }

  _unfocus() {
    this.patch({
      text: {
        textColor: Colors("white").get(),
      },
    });
  }
}

export default MenuItem;
