class Santa {
  #position;

  constructor() {
    this.#position = { x: 0, y: 0 };
  };

  moveEast() {
    this.#position.x++;
  };

  moveWest() {
    this.#position.x--;
  };

  moveNorth() {
    this.#position.y++;
  };

  moveSouth() {
    this.#position.y--;
  };

  get position() {
    return this.#position;
  };
};

module.exports = { Santa };