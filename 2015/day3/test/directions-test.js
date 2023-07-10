const { describe, it } = require("node:test");
const { deepStrictEqual, strictEqual } = require("assert");

const { Santa } = require("../src/directions.js");

describe("Santa", () => {
  it("should be at starting position when no instruction is given", () => {
    const santa = new Santa();
    deepStrictEqual(santa.position, { x: 0, y: 0 });
  });

  it("should move one house to the North from starting position of (0,0)", () => {
    const santa = new Santa();
    santa.moveNorth();
    deepStrictEqual(santa.position, { x: 0, y: 1 });
  });

  it("should move one house to the East from starting position of (0,0)", () => {
    const santa = new Santa();
    santa.moveEast();
    deepStrictEqual(santa.position, { x: 1, y: 0 });
  });

  it("should move one house to the West from starting position of (0,0)", () => {
    const santa = new Santa();
    santa.moveWest();
    deepStrictEqual(santa.position, { x: -1, y: 0 });
  });
 
  it("should move one house to the South from starting position of (0,0)", () => {
    const santa = new Santa();
    santa.moveSouth();
    deepStrictEqual(santa.position, { x: 0, y: -1 });
  });
});