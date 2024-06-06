const upperMatches = [
    {
        id: 101,
        name: "UB 1.1 --101",
        nextMatchId: 301,
        loserNextMatchId: 303,
        tournamentRoundText: "UB 1",
        startTime: "Match1",
        state: "SCORE_DONE",
        participants: [
            { id: "1", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 01" },
            { id: "2", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 02" }
        ],
        parties: [
            { id: "1", resultText: "2", isWinner: true, previousMatchId: null, nextMatchId: 301 },
            { id: "2", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: 303 }
        ]
    },
    {
        id: 102,
        name: "UB 1.2 --102",
        nextMatchId: 301,
        loserNextMatchId: 304,
        tournamentRoundText: "UB 1",
        startTime: "Match 2",
        state: "SCORE_DONE",
        participants: [
            { id: "3", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 03" },
            { id: "4", resultText: "1", isWinner: false, status: "PLAYED", name: "TEAM - 04" }
        ],
        parties: [
            { id: "3", resultText: "2", isWinner: true, previousMatchId: null, nextMatchId: 301 },
            { id: "4", resultText: "1", isWinner: false, previousMatchId: null, nextMatchId: 304 }
        ]
    },
    {
        id: 103,
        name: "UB 1.3 --103",
        nextMatchId: 302,
        loserNextMatchId: 305,
        tournamentRoundText: "UB 1",
        startTime: "Match 4",
        state: "SCORE_DONE",
        participants: [
            { id: "5", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 05" },
            { id: "6", resultText: "1", isWinner: false, status: "PLAYED", name: "TEAM - 06" }
        ],
        parties: [
            { id: "5", resultText: "2", isWinner: true, previousMatchId: null, nextMatchId: 302 },
            { id: "6", resultText: "1", isWinner: false, previousMatchId: null, nextMatchId: 305 }
        ]
    },
    {
        id: 104,
        name: "Match 3 --104",
        nextMatchId: 302,
        loserNextMatchId: 306,
        tournamentRoundText: "UB 1",
        startTime: "Match 3",
        state: "SCORE_DONE",
        participants: [
            { id: "7", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 07" },
            { id: "8", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 08" }
        ],
        parties: [
            { id: "7", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: 306 },
            { id: "8", resultText: "2", isWinner: true, previousMatchId: null, nextMatchId: 302 }
        ]
    },
    {
        id: 301,
        name: "UB 2.1 ",
        nextMatchId: 501,
        loserNextMatchId: 502,
        tournamentRoundText: "UB 2",
        startTime: "Match 9 --301",
        state: "SCORE_DONE",
        participants: [
            { id: "1", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 01" },
            { id: "3", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 03" }
        ],
        parties: [
            { id: "1", resultText: "0", isWinner: false, previousMatchId: 101, nextMatchId: 303 },
            { id: "3", resultText: "2", isWinner: true, previousMatchId: 102, nextMatchId: 501 }
        ]
    },
    {
        id: 302,
        name: "UB 2.2 --302",
        nextMatchId: 501,
        loserNextMatchId: 503,
        tournamentRoundText: "UB 2",
        startTime: "Match 10",
        state: "SCORE_DONE",
        participants: [
            { id: "8", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 08" },
            { id: "5", resultText: "1", isWinner: false, status: "PLAYED", name: "TEAM - 05" }
        ],
        parties: [
            { id: "8", resultText: "2", isWinner: true, previousMatchId: 104, nextMatchId: 501 },
            { id: "5", resultText: "1", isWinner: false, previousMatchId: 103, nextMatchId: 202 }
        ]
    },
    {
        id: 501,
        name: "UB 3.1 --501",
        nextMatchId: 801,
        tournamentRoundText: "UB 3",
        startTime: "August 05, 2021",
        state: "SCORE_DONE",
        participants: [
            { id: "8", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 08" },
            { id: "3", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 03" }
        ],
        parties: [
            { id: "8", resultText: "0", isWinner: false, previousMatchId: 302, nextMatchId: 503 },
            { id: "3", resultText: "2", isWinner: true, previousMatchId: 301, nextMatchId: 801 }
        ]
    },
    // {
    //     id: 801,
    //     name: "Final --801",
    //     nextMatchId: null,
    //     tournamentRoundText: "UB 4",
    //     startTime: "August 05, 2021",
    //     state: "SCORE_DONE",
    //     participants: [
    //         { id: "5", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 01" },
    //         { id: "3", resultText: "1", isWinner: false, status: "PLAYED", name: "TEAM - 03" }
    //     ],
    //     parties: [
    //         { id: "5", resultText: "2", isWinner: true, previousMatchId: 501, nextMatchId: null },
    //         { id: "3", resultText: "1", isWinner: false, previousMatchId: 703, nextMatchId: null }
    //     ]
    // },
];

export default upperMatches;