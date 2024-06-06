const matches = [
    {
        id: 1,
        name: "Match 1",
        nextMatchId: 3,
        tournamentRoundText: "Round 1",
        startTime: "2023-06-01T10:00:00Z",
        state: "SCHEDULED",
        participants: [
            { id: "1", resultText: "0", isWinner: true, status: "PLAYED", name: "Big Stan" },
            { id: "2", resultText: "0", isWinner: false, status: "PLAYED", name: "Brave Spirit" }
        ]
    },
    {
        id: 2,
        name: "Match 2",
        nextMatchId: 3,
        tournamentRoundText: "Round 1",
        startTime: "2023-06-01T10:00:00Z",
        state: "SCHEDULED",
        participants: [
            { id: "3", resultText: "0", isWinner: true, status: "PLAYED", name: "Tommy Vercetti" },
            { id: "4", resultText: "0", isWinner: false, status: "PLAYED", name: "Marco Reus" }
        ]
    },
    {
        id: 3,
        name: "Match 3",
        nextMatchId: 5,
        tournamentRoundText: "Round 2",
        startTime: "2023-06-01T10:00:00Z",
        state: "SCHEDULED",
        participants: [
            { id: "1", resultText: "0", isWinner: true, status: "PLAYED", name: "Big Stan" },
            { id: "3", resultText: "0", isWinner: true, status: "PLAYED", name: "Tommy Vercetti" }
        ]
    },
    {
        id: 4,
        name: "Match 4",
        nextMatchId: 6,
        tournamentRoundText: "Round 1",
        startTime: "2023-06-01T10:00:00Z",
        state: "SCHEDULED",
        participants: [
            { id: "5", resultText: "0", isWinner: true, status: "PLAYED", name: "Not Valid" },
            { id: "6", resultText: "0", isWinner: false, status: "PLAYED", name: "Trinity" }
        ]
    }
];

export default matches