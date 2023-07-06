const calculateSurfaceArea = (dimension) => {
  const [l, w, h] = dimension.split("x");
  return 2 * l * w + 2 * w * h + 2 * h * l;
};

module.exports = { calculateSurfaceArea };