const { strictEqual } = require("assert");
const { describe, it } = require("node:test");

const { calculateBoxSurfaceArea, calculateWrappingPaperArea } = require("../src/surface-area.js");

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