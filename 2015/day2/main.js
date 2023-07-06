const fs = require("fs");

const { calTotalWrappingPaper } = require("./src/material-required.js");

const readInstructions = () => {
  const instructionFilePath = "./resources/instructions.txt";
  return fs.readFileSync(instructionFilePath, "utf-8");
};

const main = () => {
  const instructions = readInstructions();

  console.log(calTotalWrappingPaper(instructions));
};

main();