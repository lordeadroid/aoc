const { strictEqual } = require("assert");
const { describe, it } = require("node:test");

const { calBoxSurfaceArea, calWrappingPaperArea, calTotalWrappingPaper ,calRibbonLength} = require("../src/material-required.js");

describe("wrapping paper", () => {
  describe("surfaceArea", () => {
    it("should give a dimension for a box of valid dimensions", () => {
      strictEqual(calBoxSurfaceArea(2, 3, 4), 52);
      strictEqual(calBoxSurfaceArea(1, 1, 10), 42);
    });
  });

  describe("calWrappingPaperArea", () => {
    it("should return total paper required", () => {
      strictEqual(calWrappingPaperArea(2, 3, 4), 58);
      strictEqual(calWrappingPaperArea(1, 1, 10), 43);
    });
  });

  describe("calTotalWrappingPaper", () => {
    it("should give the summation of all the paper required", () => {
      strictEqual(calTotalWrappingPaper("2x3x4\n1x1x10"), 101);
    });
  });
});

describe("ribbon", () => {
  describe("calRibbonLength", () => {
    it("should give the amount of ribbon required to wrap a gift", () => {
      strictEqual(calRibbonLength(2, 3, 4), 34);
      strictEqual(calRibbonLength(1, 1, 10), 14);
    });
  });
});