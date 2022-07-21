import { Lightning, Colors, Router } from "@lightningjs/sdk";
import Button from "../components/Button";
import fontStyles from "../lib/fontStyles";
import styles from "../lib/styles";
import { clearHighscores, getHighscores } from "../utils";

class Highscore extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      color: Colors("black").get(),
      rect: true,

      Highscores: {
        w: 1920,
        h: 540,
        y: 0,

        Title: {
          y: styles.spacing.large + styles.spacing.medium,
          x: 960,
          mountX: 0.5,

          text: {
            text: "| Highscores |",
            ...fontStyles.title,
            textColor: Colors("white").get(),
          },
        },

        HighscoreItems: {
          y: styles.spacing.large * 3 + styles.spacing.medium,
          x: 960,
          mountX: 0.5,
          flex: {
            direction: "column",
            alignItems: "center",
          },
        },
      },

      Buttons: {
        w: 1920,
        h: 540,
        y: 1080 - 540 - styles.spacing.medium,
        x: 0,

        flex: {
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        },

        PlayAgain: {
          type: Button,
          signals: {
            buttonPressed: "_playAgainHandler",
          },
          title: "Play Again",
        },

        GoBackHome: {
          type: Button,
          signals: {
            buttonPressed: "_goHomeHandler",
          },
          flexItem: {
            marginTop: styles.spacing.medium,
          },
          title: "Home",
        },

        ClearHighscores: {
          type: Button,
          signals: {
            buttonPressed: "_clearHighscoresHandler",
          },
          flexItem: {
            marginTop: styles.spacing.medium,
          },
          title: "Clear Highscores",
        },
      },
    };
  }

  index = 0;

  _handleDown() {
    this.index++;

    if (this.index >= this.tag("Buttons").children.length) {
      this.index = this.tag("Buttons").children.length - 1;
    }
  }

  _handleUp() {
    this.index--;

    if (this.index <= 0) {
      this.index = 0;
    }
  }

  _getFocused() {
    return this.tag("Buttons").children[this.index];
  }

  _active() {
    this._renderHighscores();
  }

  _renderHighscores() {
    const highscores = getHighscores();

    this.tag("HighscoreItems").children = highscores.map((highscore, index) => {
      return {
        text: {
          text: `${index + 1}. ${highscore.date} - ${highscore.score}`,
          ...fontStyles.menuItem,
          textColor: Colors("white").get(),
        },
      };
    });
  }

  _playAgainHandler() {
    Router.navigate("game");
  }

  _goHomeHandler() {
    Router.navigate("mainMenu");
  }

  _clearHighscoresHandler() {
    clearHighscores();
    this._renderHighscores();
  }
}

export default Highscore;
