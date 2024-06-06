// import React from 'react';
import PropTypes from 'prop-types';

const Match = ({ match }) => {
    return (
        <div className="match">
            <div className="match-info">
                <div className="match-name">{match.name}</div>
                <div className="match-time">{match.startTime}</div>
            </div>
            <div className="match-participants">
                {match.participants.map((participant, index) => (
                    <div key={index} className={`participant ${participant.isWinner ? 'winner' : 'loser'}`}>
                        {participant.name} - {participant.resultText}
                    </div>
                ))}
            </div>
        </div>
    );
};

Match.propTypes = {
    match: PropTypes.shape({
        name: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        participants: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                resultText: PropTypes.string.isRequired,
                isWinner: PropTypes.bool.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Match;
