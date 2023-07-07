const moveSanta = (direction) => {
  switch (direction) {
    case ">": return { x: 1, y: 0 };
    case "^": return { x: 0, y: 1 };
    case "<": return { x: -1, y: 0 };
    case "v": return { x: 0, y: -1 };
  }
};

module.exports = { moveSanta };