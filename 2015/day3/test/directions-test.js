const { describe, it } = require("node:test");
const { deepStrictEqual } = require("assert");

const { Santa } = require("../src/directions.js");

describe("Santa", () => {
  describe("move santa", () => {
    it("should give starting position when no instruction is given", () => {
      const santa = new Santa();
      deepStrictEqual(santa.position, { x: 0, y: 0 });
    });

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
      const santa = new Santa();
      santa.move("^");
      santa.move("^");

      const actual = santa.position;
      const expected = { x: 0, y: 2 };
      deepStrictEqual(actual, expected);
    });

    it("should move Santa, when multiple directions is given", () => {
      const santa = new Santa();
      santa.move("^");
      santa.move(">");

      const actual = santa.position;
      const expected = { x: 1, y: 1 };
      deepStrictEqual(actual, expected);
    });
  });

  describe("noOfHouseVisited", () => {
    it("should give 0 house when no further instructions is given to Santa", () => {
      const santa = new Santa();

      const actual = santa.noOfHouseVisited;
      const expected = 0;
      deepStrictEqual(actual, expected);
    });

    it("should give 1 when one instructions is given to Santa", () => {
      const santa = new Santa();
      santa.move(">");

      const actual = santa.noOfHouseVisited;
      const expected = 1;
      deepStrictEqual(actual, expected);
    });
  });
});