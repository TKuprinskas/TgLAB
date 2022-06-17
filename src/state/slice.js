import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teams: [],
    matches: [],
    results: [],
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        addTeam: (state, action) => {
            const newTeam = {
                id: action.payload.id,
                team: action.payload.team,
                played: action.payload.played,
                win: action.payload.win,
                draw: action.payload.draw,
                lost: action.payload.lost,
                points: action.payload.points,
            };

            const newMatch = {
                team1: action.payload.team,
                team2: action.payload.team,
            };

            state.matches = [
                ...state.matches,
                state.teams.map((team) => {
                    return {
                        ...newMatch,
                        id: team.team + newTeam.team,
                        team1: team.team,
                        team2: newTeam.team,
                    };
                }),
            ];

            state.teams = [...state.teams, newTeam];
        },
        addResult: (state, action) => {
            const newResult = {
                id: action.payload.id,
                team1: action.payload.team1,
                team1Score: action.payload.team1Score,
                team2: action.payload.team2,
                team2Score: action.payload.team2Score,
            };

            state.results = [...state.results, newResult];
        },
        updateTeam1: (state, action) => {
            const team = state.teams.find((t) => t.team === action.payload.team1);
            team.played = team.played + 1;
            team.win = action.payload.win ? team.win + 1 : team.win;
            team.draw = action.payload.draw ? team.draw + 1 : team.draw;
            team.lost = action.payload.lost ? team.lost + 1 : team.lost;
            team.points = action.payload.win ? team.points + 3 : action.payload.draw ? team.points + 1 : team.points;
        },
        updateTeam2: (state, action) => {
            const team = state.teams.find((t) => t.team === action.payload.team2);
            team.played = team.played + 1;
            team.win = action.payload.win ? team.win + 1 : team.win;
            team.draw = action.payload.draw ? team.draw + 1 : team.draw;
            team.lost = action.payload.lost ? team.lost + 1 : team.lost;
            team.points = action.payload.win ? team.points + 3 : action.payload.draw ? team.points + 1 : team.points;
        },
    },
});

export const { addTeam, addResult, updateTeam1, updateTeam2 } = tableSlice.actions;
export default tableSlice;
