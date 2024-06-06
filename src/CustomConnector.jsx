import React from 'react';

// Кастомный компонент для отображения соединений между матчами
const CustomConnector = ({ fromMatch, toMatchId, lineColor }) => {
    // Получаем позиции начального и конечного матчей
    const fromPosition = { x: fromMatch.position.x, y: fromMatch.position.y };
    const toPosition = { x: fromMatch.nextPosition[toMatchId].x, y: fromMatch.nextPosition[toMatchId].y };

    // Создаем данные пути для соединения
    const pathData = `M${fromPosition.x},${fromPosition.y} L${toPosition.x},${toPosition.y}`;

    return (
        <path
            d={pathData}
            fill="transparent"
            stroke={lineColor || "black"}
        />
    );
};

export default CustomConnector;
