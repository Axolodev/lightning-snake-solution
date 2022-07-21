export const Directions = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
};

export default class GameEngine {
  constructor() {
    this.gameLoop = this.gameLoop.bind(this);
  }

  gameLoop(currentTimestamp) {
    this.currentTime = currentTimestamp;
    this.deltaTime = Math.ceil(currentTimestamp - this.previousTime);
    this.update();
    this.previousTime = currentTimestamp;

    requestAnimationFrame(this.gameLoop);
  }

  onUpdate(onUpdateHandler) {
    this.onUpdateHandler = onUpdateHandler;
  }

  enableGameLoop() {
    requestAnimationFrame(this.gameLoop);
  }

  disableGameLoop() {
    cancelAnimationFrame(this.gameLoop);
  }

  get gameObjects() {
    return {
      snake: this.snake,
      food: this.food,
    };
  }

  setup() {
    this.previousTime = 0;
    this.snake = new Snake();
    this.food = new Food();
    this.timeSinceLastUpdate = 0;
  }

  handle(direction) {
    this.snake.handle(direction);
  }

  updateTimeWindow = 300;
  timeSinceLastUpdate = 0;

  update() {
    this.timeSinceLastUpdate += this.deltaTime;
    if (this.timeSinceLastUpdate < this.updateTimeWindow) {
      return;
    }

    this.snake.update();

    this.timeSinceLastUpdate = 0;

    if (this.onUpdateHandler) {
      this.onUpdateHandler();
    }
  }
}

class Snake {
  color = "white";

  constructor() {
    this.xSpeed = 1;
    this.ySpeed = 0;
    this._tail = [];

    this.tail.push(new Tail(2, 0));
    this.tail.push(new Tail(1, 0));
    this.tail.push(new Tail(0, 0));
  }

  get tail() {
    return this._tail;
  }

  set tail(tail) {
    this._tail = tail;
  }

  draw() {
    this.tail.forEach((tail) => {
      tail.draw();
    });
  }

  handle(direction) {
    if (direction === Directions.UP && this.ySpeed !== 1) {
      this.xSpeed = 0;
      this.ySpeed = -1;
    }
    if (direction === Directions.DOWN && this.ySpeed !== -1) {
      this.xSpeed = 0;
      this.ySpeed = 1;
    }
    if (direction === Directions.LEFT && this.xSpeed !== 1) {
      this.xSpeed = -1;
      this.ySpeed = 0;
    }
    if (direction === Directions.RIGHT && this.xSpeed !== -1) {
      this.xSpeed = 1;
      this.ySpeed = 0;
    }
  }

  update() {
    for (let i = this.tail.length - 1; i > 0; i--) {
      this.tail[i].x = this.tail[i - 1].x;
      this.tail[i].y = this.tail[i - 1].y;
    }

    this.tail[0].x += this.xSpeed;
    this.tail[0].y += this.ySpeed;
  }
}

class Tail {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Food {
  color = "olive";

  constructor() {
    this.x = 8;
    this.y = 0;
  }

  set x(x) {
    this._x = x;
  }

  get x() {
    return this._x;
  }

  set y(y) {
    this._y = y;
  }

  get y() {
    return this._y;
  }
}
