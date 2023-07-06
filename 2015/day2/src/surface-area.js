const calculateBoxSurfaceArea = (l, w, h) => {
  return 2 * l * w + 2 * w * h + 2 * h * l;
};

const minimumSideArea = (l, w, h) => {
  const maxSide = Math.max(l, w, h);

  return l * w * h / maxSide;
}

const calculateWrappingPaperArea = (l, w, h) => {
  return calculateBoxSurfaceArea(l, w, h) + minimumSideArea(l, w, h);
}

module.exports = { calculateBoxSurfaceArea, calculateWrappingPaperArea };