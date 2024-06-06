import React from 'react';

const CustomConnector = ({ fromMatch, toMatchId, lineColor }) => {
    const fromPosition = { x: fromMatch.position.x, y: fromMatch.position.y };
    const toPosition = { x: fromMatch.nextPosition[toMatchId].x, y: fromMatch.nextPosition[toMatchId].y };

    const pathData = `M${fromPosition.x},${fromPosition.y} L${toPosition.x},${toPosition.y}`;

    return (
        <path
            d={pathData}
            fill="transparent"
            stroke={lineColor || "black"}
        />
    );
};

export default CustomConnector;
