const { describe, it } = require("node:test");
const { deepStrictEqual } = require("assert");

const { getFinalFloor, positionAfterEach, getBasementIndex } = require("../day1.js");

describe("getFinalFloor", () => {
  it("should bring the Santa to the same floor", () => {
    const instructions = "(())";
    const positions = positionAfterEach(instructions);
    const actual = getFinalFloor(positions);
    const expected = 0;

    deepStrictEqual(actual, expected);
  });

  it("should move Santa 3 floors up", () => {
    const instructions = "(((";
    const positions = positionAfterEach(instructions);
    const actual = getFinalFloor(positions);
    const expected = 3;

    deepStrictEqual(actual, expected);
  });

  it("should move Santa to the basement floor", () => {
    const instructions = "))(";
    const positions = positionAfterEach(instructions);
    const actual = getFinalFloor(positions);
    const expected = -1;

    deepStrictEqual(actual, expected);
  });
});

describe("getBasementIndex", () => {
  it("should give the position of the first character that causes him to enter the basement", () => {
    const instructions = ")";
    const positions = positionAfterEach(instructions);
    const actual = getBasementIndex(positions);
    const expected = 1;

    deepStrictEqual(actual, expected);
  });

  it("should give the position of the first character that causes him to enter the basement", () => {
    const instructions = "()())";
    const positions = positionAfterEach(instructions);
    const actual = getBasementIndex(positions);
    const expected = 5;

    deepStrictEqual(actual, expected);
  });
});