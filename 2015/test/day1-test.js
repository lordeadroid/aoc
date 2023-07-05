const {describe, it} = require("node:test");
const {deepStrictEqual} = require("assert");

const {finalFloor} = require("../day1.js");

describe("day1", () => {
  it("should bring the Santa to the same floor", () => {
    const actual = finalFloor("(())");
    const expected = 0;

    deepStrictEqual(actual, expected);
  });

  it("should move Santa 3 floors up", () => {
    const actual = finalFloor("(((");
    const expected = 3;

    deepStrictEqual(actual, expected);
  });

  it("should move Santa to the basement floor", () => {
    const actual = finalFloor("))(");
    const expected = -1;

    deepStrictEqual(actual, expected);
  });
});