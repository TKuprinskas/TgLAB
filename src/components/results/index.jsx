import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matches, results } from '../../state/selectors';
import { addResult, updateTeam1, updateTeam2 } from '../../state/slice';
import * as S from './styles';

const Results = () => {
    const match = useSelector(matches);
    const result = useSelector(results);
    const dispatch = useDispatch();

    const [team1Score, setTeam1Score] = useState(null);
    const [team2Score, setTeam2Score] = useState(null);

    const handleSubmit = (e, id, team1, team2) => {
        e.preventDefault();
        dispatch(
            addResult({
                id: id,
                team1: team1,
                team1Score: team1Score,
                team2: team2,
                team2Score: team2Score,
            })
        );

        dispatch(
            updateTeam1({
                team1: team1,
                win: team1Score > team2Score,
                draw: team1Score === team2Score,
                lost: team1Score < team2Score,
            })
        );

        dispatch(
            updateTeam2({
                team2: team2,
                win: team2Score > team1Score,
                draw: team2Score === team1Score,
                lost: team2Score < team1Score,
            })
        );
    };

    const filterResults = (id) => {
        return result.filter((item) => item.id === id);
    };

    return (
        <S.Wrapper>
            {match.map((row, index) => (
                <S.MatchBox key={index}>
                    {row.map(({ id, team1, team2 }) => {
                        return (
                            <S.ResultBox key={id}>
                                <S.TeamName>{team1}</S.TeamName>
                                <S.ScoreInput
                                    type="text"
                                    onChange={(e) => setTeam1Score(e.target.value)}
                                    value={filterResults(id)[0] ? filterResults(id)[0].team1Score : null}
                                    disabled={filterResults(id)[0] ? true : false}
                                />
                                :
                                <S.ScoreInput
                                    type="text"
                                    onChange={(e) => setTeam2Score(e.target.value)}
                                    value={filterResults(id)[0] ? filterResults(id)[0].team2Score : null}
                                    disabled={filterResults(id)[0] ? true : false}
                                />
                                <S.TeamName>{team2}</S.TeamName>
                                {result.filter((item) => item.id === id).length > 0 ? null : (
                                    <S.Button onClick={(e) => handleSubmit(e, id, team1, team2)}>Submit</S.Button>
                                )}
                            </S.ResultBox>
                        );
                    })}
                </S.MatchBox>
            ))}
        </S.Wrapper>
    );
};

export default Results;
