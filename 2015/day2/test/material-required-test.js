const { strictEqual } = require("assert");
const { describe, it } = require("node:test");

const { calculateBoxSurfaceArea, calculateWrappingPaperArea, calculateTotalWrappingPaper } = require("../src/material-required.js");

describe("surfaceArea", () => {
  it("should give a dimension for a box of valid dimensions", () => {
    strictEqual(calculateBoxSurfaceArea(2, 3, 4), 52);
    strictEqual(calculateBoxSurfaceArea(1, 1, 10), 42);
  });
});

describe("calculateWrappingPaperArea", () => {
  it("should return total paper required", () => {
    strictEqual(calculateWrappingPaperArea(2, 3, 4), 58);
    strictEqual(calculateWrappingPaperArea(1, 1, 10), 43);
  });
});

describe("calculateTotalWrappingPaper", () => {
  it("should give the summation of all the paper required", () => {
    strictEqual(calculateTotalWrappingPaper("2x3x4\n1x1x10"), 101);
  });
});