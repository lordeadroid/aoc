const { strictEqual } = require("assert");
const { describe, it } = require("node:test");

const { calculateSurfaceArea } = require("../src/surface-area.js");

describe("surfaceArea", () => {
  it("should return 0 for dimension of 0x0x0", () => {
    strictEqual(calculateSurfaceArea("0x0x0"), 0);
  });

  it("should give a dimension for a box of valid dimensions", () => {
    strictEqual(calculateSurfaceArea("2x3x4"), 52);
    strictEqual(calculateSurfaceArea("1x1x10"), 42);
  });
});