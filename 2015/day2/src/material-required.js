const area = (a, b) => a * b;

const calculateBoxSurfaceArea = (l, w, h) => {
  return 2 * (area(l, w) + area(w, h) + area(h, l));
};

const minimumSideArea = (l, w, h) => {
  const volume = l * w * h;
  const maxSide = Math.max(l, w, h);

  return volume / maxSide;
};

const calculateWrappingPaperArea = (l, w, h) => {
  return calculateBoxSurfaceArea(l, w, h) + minimumSideArea(l, w, h);
};

const getDimension = (dimension) => {
  return dimension.split("x").map(side => +side);
};

const calculateTotalWrappingPaper = (instructions) => {
  return instructions.split("\n").reduce((totalPaper, instruction) => {
    const [l, w, h] = getDimension(instruction);
    return totalPaper + calculateWrappingPaperArea(l, w, h);
  }, 0);
};

module.exports = { calculateBoxSurfaceArea, calculateWrappingPaperArea, calculateTotalWrappingPaper };