class Santa {
  #position;
  #instructionOffset;

  constructor() {
    this.#position = { x: 0, y: 0 };
    this.#instructionOffset = {
      ">": { x: 1, y: 0 },
      "^": { x: 0, y: 1 },
      "<": { x: -1, y: 0 },
      "v": { x: 0, y: -1 }
    };
  };

  move(direction) {
    const { x: delX, y: delY } = this.#instructionOffset[direction];

    this.#position.x += delX;
    this.#position.y += delY;
  };

  get position() {
    return this.#position;
  };
};

module.exports = { Santa };