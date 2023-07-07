class Santa {
  #position;
  #locationsVisited;
  #instructionOffset;

  constructor() {
    this.#position = { x: 0, y: 0 };
    this.#locationsVisited = new Set();
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

    this.#locationsVisited.add(this.#position);
  };

  get position() {
    return this.#position;
  };

  get noOfHouseVisited() {
    return this.#locationsVisited.size;
  };
};

module.exports = { Santa };