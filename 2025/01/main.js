import { readFileSync } from "node:fs";

const parseInstructions = (data) => {
  const instructions = data.trim().split("\n");
  return instructions.map((instruction) => {
    const [rotation, ...rest] = instruction;
    const distance = parseInt(rest.join(""));
    const rotationValue = rotation === "R" ? distance : -distance;
    return rotationValue;
  });
};

class Safe {
  #position;
  #size;
  #hitsZero = 0;

  constructor(initialPosition, size) {
    this.#position = initialPosition;
    this.#size = size;
  }

  #checkHitsZero(rotationValue) {
    this.#position =
      (((this.#position + rotationValue) % this.#size) + this.#size) %
      this.#size;
    if (this.#position === 0) this.#hitsZero++;
  }

  #checkCrossesZero() {}

  solve(instructions) {
    instructions.forEach((rotationValue) => {
      this.#checkHitsZero(rotationValue);
      this.#checkCrossesZero();
    });
  }

  get code() {
    return this.#hitsZero;
  }
}

(() => {
  const data = readFileSync("./instructions.txt", "utf-8");
  const instructions = parseInstructions(data);
  const initialPosition = 50;
  const size = 100;

  const safe = new Safe(initialPosition, size);
  safe.solve(instructions);
  console.log(safe.code);
})();
