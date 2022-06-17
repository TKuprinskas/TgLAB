import styled from 'styled-components';

export const AddTeam = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`;

export const Input = styled.input`
    width: 20%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
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
