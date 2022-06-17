import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTeam } from '../../state/slice';
import { teams } from '../../state/selectors';
import * as S from './styles';

const AddTeam = () => {
    const inputValue = useRef('');
    const dispatch = useDispatch();
    const teamsList = useSelector(teams);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addTeam({
                id: teamsList.length + 1,
                team: inputValue.current.value,
                played: 0,
                win: 0,
                draw: 0,
                lost: 0,
                points: 0,
            })
        );
        inputValue.current.value = '';
    };

    return (
        <S.AddTeam>
            <S.Input type="text" placeholder="New team" ref={inputValue} />
            <S.Button onClick={handleSubmit}>Add team</S.Button>
        </S.AddTeam>
    );
};

export default AddTeam;
