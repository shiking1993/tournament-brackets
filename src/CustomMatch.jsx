import React from 'react';
import { Match as DefaultMatch } from '@g-loot/react-tournament-brackets';

// Кастомный компонент для отображения матча с возможностью задать позицию
const CustomMatch = (props) => {
    const { match, style, ...restProps } = props;
    const matchStyle = { 
        position: 'absolute',
        ...style 
    };

    return (
        <div style={matchStyle}>
            <DefaultMatch {...restProps} match={match} />
        </div>
    );
};

export default CustomMatch;
