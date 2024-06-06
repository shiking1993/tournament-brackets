import React from 'react';
import { getCoordinates } from './connectorUtils';

const Connector = ({ from, to, roundIndex, roundMargin, lineInfo, lineColor }) => {
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

export default Connector;
