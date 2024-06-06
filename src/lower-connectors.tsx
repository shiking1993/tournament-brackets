import React from 'react';
import { Connector } from '@g-loot/react-tournament-brackets';

const LowerConnectors = ({ matches }) => {
    return matches.map((match, index) => {
        if (match.nextMatchId) {
            const nextMatch = matches.find(m => m.id === match.nextMatchId);
            return (
                <Connector
                    key={index}
                    from={{
                        id: match.id,
                        side: 'bottom'
                    }}
                    to={{
                        id: nextMatch.id,
                        side: 'top'
                    }}
                    type="step"
                />
            );
        }
        return null;
    });
};

export default LowerConnectors;
