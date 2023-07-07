const { describe, it } = require("node:test");
const { deepStrictEqual } = require("assert");

const { moveSanta } = require("../src/directions.js");

describe("moveSanta", () => {
  it("should be move Santa one house to the North direction from starting position of (0,0)", () => {
    deepStrictEqual(moveSanta("^"), { x: 0, y: 1 });
  });

  it("should be move Santa one house to the East direction from starting position of (0,0)", () => {
    deepStrictEqual(moveSanta(">"), { x: 1, y: 0 });
  });

  it("should be move Santa one house to the West direction from starting position of (0,0)", () => {
    deepStrictEqual(moveSanta("<"), { x: -1, y: 0 });
  });

  it("should be move Santa one house to the South direction from starting position of (0,0)", () => {
    deepStrictEqual(moveSanta("v"), { x: 0, y: -1 });
  });

  it("should be move Santa one house to the North direction from starting position of (0,0)", () => {
    deepStrictEqual(moveSanta("^^"), { x: 0, y: 2 });
  });
});