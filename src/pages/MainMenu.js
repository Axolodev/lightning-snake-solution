import { Lightning, Utils, Colors, Router } from "@lightningjs/sdk";
import MenuItem from "../components/MenuItem";
import fontStyles from "../lib/fontStyles";

class MainMenu extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      color: Colors("black").get(),
      rect: true,

      Logo: {
        w: (w) => w,
        h: (h) => h * 0.6,

        flex: {
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        },

        Icon: {
          w: 200,
          h: 130,

          texture: {
            type: Lightning.textures.ImageTexture,
            src: Utils.asset("images/snake.png"),
          },
        },

        Title: {
          text: {
            ...fontStyles.title,
            text: "Snake",
            textColor: Colors("green").get(),
            textAlign: "center",
          },
        },
      },

      Items: {
        w: (w) => w,
        h: (h) => h,
        y: (h) => h * 0.15,

        flex: {
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        },

        PlayItem: {
          type: MenuItem,
          content: "Play",
          signals: {
            menuItemSignal: "_handleMenuItemSignal",
          },
        },

        HighscoreItem: {
          type: MenuItem,
          content: "Highscore",
          signals: {
            menuItemSignal: "_handleMenuItemSignal",
          },
        },
      },
    };
  }

  _index = 0;

  _getFocused() {
    return this.tag("Items").children[this._index];
  }

  _handleDown() {
    this._index = 1;
  }

  _handleUp() {
    this._index = 0;
  }

  _handleMenuItemSignal(itemName) {
    if (itemName === "Play") {
      Router.navigate("game");
    } else {
      Router.navigate("highscore");
    }
  }
}

export default MainMenu;
