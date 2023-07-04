const fs = require("fs");

const finalFloor = (instructions) => {
  const ins = {
    "(": 0,
    ")": 0
  };

  instructions.split("").forEach(instruction => {
    ins[instruction]++;
  });

  return ins["("] - ins[")"];
}

const main = () => {
  const instructions = fs.readFileSync("day1-instructions.txt", "utf-8");
  const position = finalFloor(instructions);

  console.log(position);
};

main();