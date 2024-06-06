import React from 'react';
import PropTypes from 'prop-types';

const SvgViewer = ({ width, height, children }) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            {children}
        </svg>
    );
};

SvgViewer.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
};

export default SvgViewer;
