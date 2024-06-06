// import React from 'react';
import UpperBracket from './UpperBracket';
import LowerBracket from './LowerBracket';
import Finals from './Finals';

const DoubleEliminationBracket = () => {
    return (
        <div>
            <h2>Upper Bracket</h2>
            <UpperBracket />

            <h2>Lower Bracket</h2>
            <LowerBracket />

            <h2>Finals</h2>
            <Finals />
        </div>
    );
};

export default DoubleEliminationBracket;
