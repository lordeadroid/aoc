const area = (a, b) => a * b;
const volume = (l, w, h) => l * w * h;
const maxSide = (l, w, h) => Math.max(l, w, h);

const calBoxSurfaceArea = (l, w, h) => {
  return 2 * (area(l, w) + area(w, h) + area(h, l));
};

const minimumSideArea = (l, w, h) => {
  return volume(l, w, h) / maxSide(l, w, h);
};

const calWrappingPaperArea = (l, w, h) => {
  return calBoxSurfaceArea(l, w, h) + minimumSideArea(l, w, h);
};

const getDimension = (dimension) => {
  return dimension.split("x").map(side => +side);
};

const calTotalWrappingPaper = (instructions) => {
  return instructions.split("\n").reduce((totalPaper, instruction) => {
    const [l, w, h] = getDimension(instruction);
    return totalPaper + calWrappingPaperArea(l, w, h);
  }, 0);
};

const calSmallestFacePerimeter = (l, w, h) => {
  return 2 * (l + w + h - maxSide(l, w, h));
};

const calRibbonLength = (l, w, h) => {
  return calSmallestFacePerimeter(l, w, h) + volume(l, w, h);
};

const calTotalRibbonLength = (instructions) => {
  return instructions.split("\n").reduce((totalRibbon, instruction) => {
    const [l, w, h] = getDimension(instruction);
    return totalRibbon + calRibbonLength(l, w, h);
  }, 0);
}

module.exports = { calBoxSurfaceArea, calWrappingPaperArea, calTotalWrappingPaper, calRibbonLength, calTotalRibbonLength };