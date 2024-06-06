export const getCoordinates = (from, to, roundIndex, roundMargin) => {
    return `M${from.x},${from.y} L${to.x},${to.y}`;
};
