import { Lightning, Colors } from "@lightningjs/sdk";
import fontStyles from "../lib/fontStyles";
import GameEngine, { Directions } from "../lib/game";
import styles from "../lib/styles";

class Game extends Lightning.Component {
  static _template() {
    return {
      w: 1920,
      h: 1080,
      color: Colors("black").get(),
      rect: true,

      GameItems: {
        w: 1920,
        h: 1080,
      },

      Score: {
        x: (w) => w - styles.spacing.large,
        y: styles.spacing.medium,

        mountX: 1,
        text: {
          ...fontStyles.title,
          text: "Score: 0",
          textAlign: "right",
        },
      },
    };
  }

  _construct() {
    this.renderGame = this.renderGame.bind(this);
  }

  cellSize = 100;
  tailItemPadding = 10;
  itemSize = 80;

  renderGame() {
    console.log("Render");
    const { snake, food } = this.game.gameObjects;
    const children = [];

    snake.tail.forEach((tail) => {
      console.log(tail.x, tail.y);
      children.push({
        x: tail.x * this.cellSize + this.tailItemPadding,
        y: tail.y * this.cellSize + this.tailItemPadding,
        w: this.itemSize,
        h: this.itemSize,

        rect: true,
        color: Colors("white").get(),
      });
    });

    children.push({
      x: food.x * this.cellSize + this.tailItemPadding,
      y: food.y * this.cellSize + this.tailItemPadding,
      w: this.itemSize,
      h: this.itemSize,

      rect: true,
      color: Colors("red").get(),
    });

    this.tag("GameItems").children = children;
  }

  _active() {
    console.log("Active");
    this.game = new GameEngine();
    this.game.setup();
    this.game.onUpdate(this.renderGame);
    this.game.enableGameLoop();
  }

  _disable() {
    this.game.disableGameLoop();
  }

  _handleUp() {
    this.game.handle(Directions.UP);
  }

  _handleDown() {
    this.game.handle(Directions.DOWN);
  }

  _handleLeft() {
    this.game.handle(Directions.LEFT);
  }

  _handleRight() {
    this.game.handle(Directions.RIGHT);
  }
}

export default Game;
