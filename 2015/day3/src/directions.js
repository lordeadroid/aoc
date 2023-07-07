class Santa {
  #position;

  constructor() {
    this.#position = { x: 0, y: 0 };
  };

  move(direction) {
    switch (direction) {
      case ">": this.#position.x++;
        break;
      case "^": this.#position.y++;
        break;
      case "<": this.#position.x--;
        break;
      case "v": this.#position.y--;
    };
  };

  get position() {
    return this.#position;
  };
};

module.exports = { Santa };