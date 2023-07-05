const fs = require("fs");

const finalFloor = (instructions) => {
  const instructionRecord = {
    "(": 0,
    ")": 0
  };

  instructions.split("").forEach(instruction => {
    instructionRecord[instruction]++;
  });

  return instructionRecord["("] - instructionRecord[")"];
}

const main = () => {
  const instructions = fs.readFileSync("day1-instructions.txt", "utf-8");
  const position = finalFloor(instructions);

  console.log(position);
};

main();