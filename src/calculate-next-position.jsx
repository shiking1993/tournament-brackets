export const calculatePositionOfMatchLowerBracket = (index, round, options) => {
    const { canvasPadding, rowHeight, columnWidth, offsetX, offsetY } = options;
    const x = canvasPadding + columnWidth * round + offsetX;
    const y = canvasPadding + rowHeight * index + offsetY;

    return { x, y };
};