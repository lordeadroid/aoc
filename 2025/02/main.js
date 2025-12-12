import { readFileSync } from "node:fs";

const parseInstructions = (data) => {
  const idRanges = data.trim().split(",");

  return idRanges.map((id) => {
    const [start, end] = id.split("-");
    return [+start, +end];
  });
};

class Bouncer {
  #regex = /^(\d+)\1+$/;
  #total = 0;

  verify(instructions) {
    instructions.forEach(([start, end]) => {
      for (let index = start; index <= end; index++) {
        if (this.#regex.test(index)) this.#total += index;
      }
    });
  }

  get total() {
    return this.#total;
  }
}

(() => {
  const data = readFileSync("./instructions.txt", "utf-8");
  const instructions = parseInstructions(data);

  const bouncer = new Bouncer();
  bouncer.verify(instructions);

  console.log(bouncer.total);
})();
