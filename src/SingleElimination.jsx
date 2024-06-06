import React from 'react';
import { SingleEliminationBracket, SVGViewer, Match } from '@g-loot/react-tournament-brackets';
import matches from './test';

const SingleElimination = () => {
    const width = 1000;
    const height = 800;

    const renderMatch = ({ match }) => {
        return <Match match={match} />;
    };

    return (
        <div className="single-elimination">
            <SVGViewer width={width} height={height}>
                <SingleEliminationBracket
                    matches={matches.upper}
                    matchComponent={renderMatch}
                    svgWrapper={({ children, ...props }) => (
                        <svg width={width} height={height} {...props}>
                            {children}
                        </svg>
                    )}
                />
            </SVGViewer>
        </div>
    );
};

export default SingleElimination;
