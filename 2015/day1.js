const fs = require("fs");

const positionAfterEach = (instructions) => {
  const instructionRecord = {
    "(": 0,
    ")": 0
  };

  return instructions.split("").map(instruction => {
    instructionRecord[instruction] += 1;
    return instructionRecord["("] - instructionRecord[")"];
  });
};

const getFinalFloor = (positions) => positions[positions.length - 1];

const getBasementIndex = (positions) => positions.findIndex((position) => position === -1) + 1;

const main = () => {
  const instructions = fs.readFileSync("day1-instructions.txt", "utf-8");
  const positionsOfSanta = positionAfterEach(instructions);

  const finalFloor = getFinalFloor(positionsOfSanta);
  const basementIndex = getBasementIndex(positionsOfSanta);

  console.log("final floor", finalFloor);
  console.log("basement index", basementIndex);
};

main();

exports.positionAfterEach = positionAfterEach;
exports.getFinalFloor = getFinalFloor;
exports.getBasementIndex = getBasementIndex