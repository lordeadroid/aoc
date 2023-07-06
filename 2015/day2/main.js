const fs = require("fs");

const { calculateTotalWrappingPaper } = require("./src/surface-area");

const readInstructions = () => {
  const instructionFilePath = "./resources/instructions.txt";
  return fs.readFileSync(instructionFilePath, "utf-8");
};

const main = () => {
  const instructions = readInstructions();

  console.log(calculateTotalWrappingPaper(instructions));
};

main();