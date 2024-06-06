// import { DoubleEliminationBracket, Match, SVGViewer } from '@g-loot/react-tournament-brackets';
// import matches from './test.ts';

// function DoubleElimination() {
//     return (
//         <div className="double-single">
//             <DoubleEliminationBracket
//                 matches={matches}
//                 matchComponent={Match}
//                 svgWrapper={({ children, ...props }) => (
//                 <div width={500} height={500} {...props}>
//                     {children}
//                 </div>
//                 )}
//             />               
//         </div>
//     )
// }

// export default DoubleElimination
import React from 'react';
import { DoubleEliminationBracket, Match, SVGViewer } from '@g-loot/react-tournament-brackets';
import matches from './matches';

const CustomMatch = ({ match, ...props }) => (
  <Match {...props} match={match} />
);

const CustomSVGWrapper = ({ children, ...props }) => (
  <SVGViewer width={1000} height={1000} {...props}>
    {children}
  </SVGViewer>
);

function DoubleElimination() {
  return (
    <div className="double-single">
      <DoubleEliminationBracket
        matches={matches}
        matchComponent={CustomMatch}
        svgWrapper={CustomSVGWrapper}
        connectorComponent={({ match, matchSide, connectorType, roundIndex, ...props }) => {
          const isUpperBracket = match.tournamentRoundText.startsWith('UB');
          const connectorColor = isUpperBracket ? 'blue' : 'red';
          const connectorStyle = { stroke: connectorColor, strokeWidth: 2 };

          return (
            <path
              {...props}
              d={`M${matchSide === 'home' ? 0 : 100},${roundIndex * 100}
                  L${matchSide === 'home' ? 50 : 50},${roundIndex * 100 + 50}
                  L${matchSide === 'home' ? 100 : 0},${roundIndex * 100 + 100}`}
              style={connectorStyle}
            />
          );
        }}
      />
    </div>
  );
}

export default DoubleElimination;
