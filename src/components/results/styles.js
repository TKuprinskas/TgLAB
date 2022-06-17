import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
`;

export const MatchBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    width: 80%;
`;

export const TeamName = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    flex: 1;
`;

export const ScoreInput = styled.input`
    padding: 0.5rem;
    width: 35px;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    text-align: center;
    margin: 0 0.5rem;
    &:focus {
        outline: none;
    }
`;

export const ResultBox = styled.div`
    display: flex;
    margin: 0.25rem;
`;

export const Button = styled.button`
    background-color: #00bcd4;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-left: 0.5rem;
    &:hover {
        background-color: #00acc1;
    }
`;
