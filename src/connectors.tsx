import React from 'react';
import { getCoordinates } from './connectorUtils';

const CustomConnector = ({ from, to, roundIndex, roundMargin, lineInfo, lineColor }) => {
    console.log(`CustomConnector from (${from.x}, ${from.y}) to (${to.x}, ${to.y})`);
    const path = getCoordinates(from, to, roundIndex, roundMargin);
    return (
        <path
            d={path}
            stroke={lineColor}
            strokeWidth={2}
            fill="transparent"
        />
    );
};

export default CustomConnector;
