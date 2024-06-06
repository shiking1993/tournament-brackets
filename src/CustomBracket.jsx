import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { DoubleEliminationBracket, Match } from '@g-loot/react-tournament-brackets';
import customMatches from './matches';
import Connector from './connector';

// Функция для добавления атрибутов к тегам <g>
const addAttributesToGElements = () => {
  d3.selectAll('svg g')
    .attr('class', (d, i) => `match-group-${i}`)
    .attr('id', (d, i) => `match-id-${i}`);
};

const DoubleElimination = () => {
  useEffect(() => {
    addAttributesToGElements();
  }, []);

  const renderConnector = (match) => {
    const nextMatchId = match.parties.find(party => party.isWinner)?.nextMatchId;
    if (!nextMatchId) return null;

    const fromPosition = matchPositions[match.id];
    const toPosition = matchPositions[nextMatchId];

    if (!fromPosition || !toPosition) return null;

    return (
      <Connector
        from={fromPosition}
        to={toPosition}
        roundIndex={0}
        roundMargin={50}
        lineInfo={null}
        lineColor="black"
      />
    );
  };

  return (
    <div className="double-elimination">
      <DoubleEliminationBracket
        matches={customMatches}
        matchComponent={Match}
        connectorComponent={renderConnector}
        svgWrapper={({ children, ...props }) => (
          <div width={1200} height={800} {...props}>
            {children}
          </div>
        )}
      />
    </div>
  );
};

export default DoubleElimination;
