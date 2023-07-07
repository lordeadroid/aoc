const { describe, it } = require("node:test");
const { deepStrictEqual } = require("assert");

const { Santa } = require("../src/directions.js");

describe("move santa", () => {
  it("should move Santa one house to the North from starting position of (0,0)", () => {
    const santa = new Santa();
    santa.move("^");
    deepStrictEqual(santa.position, { x: 0, y: 1 });
  });

  it("should move Santa one house to the East from starting position of (0,0)", () => {
    const santa = new Santa();
    santa.move(">");
    deepStrictEqual(santa.position, { x: 1, y: 0 });
  });

  it("should move Santa one house to the West from starting position of (0,0)", () => {
    const santa = new Santa();
    santa.move("<");
    deepStrictEqual(santa.position, { x: -1, y: 0 });
  });

  it("should move Santa one house to the South from starting position of (0,0)", () => {
    const santa = new Santa();
    santa.move("v");
    deepStrictEqual(santa.position, { x: 0, y: -1 });
  });

  it("should move Santa two house to the North from starting position of (0,0)", () => {
    const directions = "^^";
    const santa = new Santa();
    santa.move(directions);

    const actual = santa.position;
    const expected = { x: 0, y: 2 };
    deepStrictEqual(actual, expected);
  });
});