const fs = require("fs");

const calMaterial = (dimensions) => {
  return dimensions.split("\n").reduce((material, dimension) => {
    const [l, b, h] = dimension.split("x").map(side => +side).sort((a, b) => a - b);

    const ribbon = 2 * (l + b) + l * b * h;
    const paper = 2 * (l * b + l * h + b * h) + l * b;

    return {
      totalRibbon: material.totalRibbon + ribbon,
      totalPaper: material.totalPaper + paper
    };
  }, { totalPaper: 0, totalRibbon: 0 });
}


const main = () => {
  const dimensions = fs.readFileSync("day2-instructions.txt", "utf-8");

  const totalMaterial = calMaterial(dimensions);
  console.log(totalMaterial.totalPaper, totalMaterial.totalRibbon);
};

main();