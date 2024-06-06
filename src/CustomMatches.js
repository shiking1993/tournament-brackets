// CustomMatches.js
import matches from './matches';

const customMatches = {
    ...matches,
    lower: matches.lower.map(match => {
        let nextMatchId;
        switch (match.id) {
            case 105:
                nextMatchId = 201; // Match 5
                break;
            case 106:
                nextMatchId = 201; // Match 6
                break;
            case 107:
                nextMatchId = 202; // Match 7
                break;
            case 108:
                nextMatchId = 202; // Match 8
                break;
            case 109:
                nextMatchId = 203; // Match 9
                break;
            case 110:
                nextMatchId = 203; // Match 10
                break;
            case 111:
                nextMatchId = 204; // Match 11
                break;
            case 112:
                nextMatchId = 204; // Match 12
                break;
            case 201:
                nextMatchId = 303; // Match 13
                break;
            case 202:
                nextMatchId = 304; // Match 14
                break;
            case 203:
                nextMatchId = 305; // Match 15
                break;
            case 204:
                nextMatchId = 306; // Match 16
                break;
            case 303:
                nextMatchId = 402; // Match 17
                break;
            case 304:
                nextMatchId = 402; // Match 18
                break;
            case 305:
                nextMatchId = 403; // Match 19
                break;
            case 306:
                nextMatchId = 403; // Match 20
                break;
            case 402:
                nextMatchId = 502; // Match 21
                break;
            case 403:
                nextMatchId = 503; // Match 22
                break;
            case 502:
                nextMatchId = 603; // Match 23
                break;
            case 503:
                nextMatchId = 603; // Match 24
                break;
            case 603:
                nextMatchId = 703; // Match 25
                break;
            case 703:
                nextMatchId = 801; // Match 26
                break;
            default:
                nextMatchId = null;
                break;
        }
        console.log(`Match ID ${match.id} nextMatchId set to ${nextMatchId}`);
        return {
            ...match,
            nextMatchId
        };
    })
};

console.log('Custom matches lower bracket:', customMatches.lower);

export default customMatches;
