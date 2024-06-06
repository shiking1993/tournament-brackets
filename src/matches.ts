const matches = {
	upper: [
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
			loserNextMatchId: 703,
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
		{
			id: 801,
			name: "Final --801",
			nextMatchId: null,
			tournamentRoundText: "UB 4",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "5", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 01" },
				{ id: "3", resultText: "1", isWinner: false, status: "PLAYED", name: "TEAM - 03" }
			],
			parties: [
				{ id: "5", resultText: "2", isWinner: true, previousMatchId: 501, nextMatchId: null },
				{ id: "3", resultText: "1", isWinner: false, previousMatchId: 703, nextMatchId: null }
			]
		},
	],
	lower: [
		{
			id: 105,
			name: "LB 1.1 --105",
			nextMatchId: 201,
			tournamentRoundText: "LB 1",
			startTime: "Match 5",
			state: "SCORE_DONE",
			participants: [
				{ id: "9", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 09" },
				{ id: "10", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 10" }
			],
			parties: [
				{ id: "9", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: 201 },
				{ id: "10", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			],
			position: { x: 20, y: 220 },
            nextPosition: {
                201: { x: 200, y: 245 }
            }
		},
		{
			id: 106,
			name: "LB 1.2 --106",
			nextMatchId: 201,
			tournamentRoundText: "LB 1",
			startTime: "Match 6",
			state: "SCORE_DONE",
			participants: [
				{ id: "11", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 11" },
				{ id: "12", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 12" }
			],
			parties: [
				{ id: "11", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: 201 },
				{ id: "12", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			],
			position: { x: 20, y: 270 },
            nextPosition: {
                201: { x: 200, y: 245 }
            }
		},
		{
			id: 107,
			name: "LB 1.3 --107",
			nextMatchId: 202,
			tournamentRoundText: "LB 1",
			startTime: "Match 7",
			state: "SCORE_DONE",
			participants: [
				{ id: "13", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 13" },
				{ id: "14", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 14" }
			],
			parties: [
				{ id: "13", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null },
				{ id: "14", resultText: "2", isWinner: true, previousMatchId: null, nextMatchId: 202 }
			],

		},
		{
			id: 108,
			name: "LB 1.4 --108",
			nextMatchId: 202,
			tournamentRoundText: "LB 1",
			startTime: "Match 8",
			state: "SCORE_DONE",
			participants: [
				{ id: "15", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 15" },
				{ id: "16", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 16" }
			],
			parties: [
				{ id: "15", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null },
				{ id: "16", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: 202 }
			]
		},
		{
			id: 109,
			name: "LB 1.4 --109",
			nextMatchId: 202,
			tournamentRoundText: "LB 1",
			startTime: "Match 8",
			state: "SCORE_DONE",
			participants: [
				{ id: "17", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 17" },
				{ id: "18", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 18" }
			],
			parties: [
				{ id: "17", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null },
				{ id: "18", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: 202 }
			]
		},
		{
			id: 110,
			name: "LB 1.4 --110",
			nextMatchId: 202,
			tournamentRoundText: "LB 1",
			startTime: "Match 8",
			state: "SCORE_DONE",
			participants: [
				{ id: "19", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 19" },
				{ id: "20", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 20" }
			],
			parties: [
				{ id: "19", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null },
				{ id: "20", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: 202 }
			]
		},
		{
			id: 111,
			name: "LB 1.4 --111",
			nextMatchId: 202,
			tournamentRoundText: "LB 1",
			startTime: "Match 8",
			state: "SCORE_DONE",
			participants: [
				{ id: "21", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 21" },
				{ id: "22", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 22" }
			],
			parties: [
				{ id: "21", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null },
				{ id: "22", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: 202 }
			]
		},
		{
			id: 112,
			name: "LB 1.4 --112",
			nextMatchId: 202,
			tournamentRoundText: "LB 1",
			startTime: "Match 8",
			state: "SCORE_DONE",
			participants: [
				{ id: "23", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 23" },
				{ id: "24", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 24" }
			],
			parties: [
				{ id: "23", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null },
				{ id: "24", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: 202 }
			]
		},
		{
			id: 201,
			name: "LB 2.1 --201",
			nextMatchId: 303,
			tournamentRoundText: "LB 2",
			startTime: "Match 11",
			state: "SCORE_DONE",
			participants: [
				{ id: "9", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 09" },
				{ id: "11", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 11" }
			],
			parties: [
				{ id: "9", resultText: "0", isWinner: false, previousMatchId: 105, nextMatchId: null },
				{ id: "11", resultText: "0", isWinner: true, previousMatchId: 106, nextMatchId: null }
			],
			position: { x: 200, y: 245 },
            nextPosition: {
                301: { x: 400, y: 270 }
            }
		},
		{
			id: 202,
			name: "LB 2.2 --202",
			nextMatchId: 304,
			tournamentRoundText: "LB 2",
			startTime: "Match 12",
			state: "SCORE_DONE",
			participants: [
				{ id: "14", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 14" },
				{ id: "16", resultText: "1", isWinner: false, status: "PLAYED", name: "TEAM - 16" }
			],
			parties: [
				{ id: "14", resultText: "2", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "16", resultText: "1", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 203,
			name: "LB 2.3 --203",
			nextMatchId: 304,
			tournamentRoundText: "LB 2",
			startTime: "Match 12",
			state: "SCORE_DONE",
			participants: [
				{ id: "18", resultText: "1", isWinner: false, status: "PLAYED", name: "TEAM - 18" },
				{ id: "20", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 20" }
			],
			parties: [
				{ id: "18", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "20", resultText: "2", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 204,
			name: "LB 2.4 --204",
			nextMatchId: 304,
			tournamentRoundText: "LB 2",
			startTime: "Match 12",
			state: "SCORE_DONE",
			participants: [
				{ id: "22", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 22" },
				{ id: "24", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 24" }
			],
			parties: [
				{ id: "22", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null },
				{ id: "24", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 303,
			name: "LB 3.1 --303",
			nextMatchId: 402,
			tournamentRoundText: "LB 3",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "2", resultText: "1", isWinner: false, status: "PLAYED", name: "TEAM - 1" },
				{ id: "11", resultText: "2", isWinner: true, status: "PLAYED", name: "TEAM - 11" }
			],
			parties: [
				{ id: "1", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "11", resultText: "2", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 304,
			name: "LB 3.2 --304",
			nextMatchId: 402,
			tournamentRoundText: "LB 3",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "14", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 14" },
				{ id: "4", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 4" }
			],
			parties: [
				{ id: "14", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "4", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 305,
			name: "LB 3.3 --305",
			nextMatchId: 402,
			tournamentRoundText: "LB 3",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "20", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 20" },
				{ id: "7", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 7" }
			],
			parties: [
				{ id: "20", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "7", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 306,
			name: "LB 3.4 --306",
			nextMatchId: 402,
			tournamentRoundText: "LB 3",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "24", resultText: "", isWinner: false, status: "PLAYED", name: "TEAM - 24" },
				{ id: "6", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 6" }
			],
			parties: [
				{ id: "24", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "6", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 402,
			name: "LB 4.1 --402",
			nextMatchId: 502,
			tournamentRoundText: "LB 4",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "11", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 11" },
				{ id: "14", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 14" }
			],
			parties: [
				{ id: "11", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "14", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 403,
			name: "LB 4.1 --403",
			nextMatchId: 503,
			tournamentRoundText: "LB 4",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "7", resultText: "", isWinner: false, status: "PLAYED", name: "TEAM - 7" },
				{ id: "6", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 6" }
			],
			parties: [
				{ id: "7", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "6", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 502,
			name: "LB 4.1 --502",
			nextMatchId: 603,
			tournamentRoundText: "LB 4",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "14", resultText: "0", isWinner: false, status: "PLAYED", name: "TEAM - 14" },
				{ id: "1", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 1" }
			],
			parties: [
				{ id: "14", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "1", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 503,
			name: "LB 4.1 --503",
			nextMatchId: 603,
			tournamentRoundText: "LB 4",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "6", resultText: "", isWinner: false, status: "PLAYED", name: "TEAM - 6" },
				{ id: "5", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 5" }
			],
			parties: [
				{ id: "6", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "5", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 603,
			name: "LB 5.1 --603",
			nextMatchId: 703,
			tournamentRoundText: "LB 4",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "1", resultText: "", isWinner: false, status: "PLAYED", name: "TEAM - 1" },
				{ id: "5", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 5" }
			],
			parties: [
				{ id: "1", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "5", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
		{
			id: 703,
			name: "LB 6.1 --703",
			nextMatchId: 801,
			tournamentRoundText: "LB 4",
			startTime: "August 05, 2021",
			state: "SCORE_DONE",
			participants: [
				{ id: "8", resultText: "", isWinner: false, status: "PLAYED", name: "TEAM - 8" },
				{ id: "5", resultText: "1", isWinner: true, status: "PLAYED", name: "TEAM - 5" }
			],
			parties: [
				{ id: "8", resultText: "1", isWinner: true, previousMatchId: null, nextMatchId: null },
				{ id: "5", resultText: "0", isWinner: false, previousMatchId: null, nextMatchId: null }
			]
		},
	],
};

export default matches;
