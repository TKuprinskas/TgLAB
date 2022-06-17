import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border: 2px solid #0000ff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: hidden;
`;

export const TableHeader = styled.thead`
    text-align: center;
    background-color: #f5f5f5;
    font-weight: bold;
`;

export const TableRow = styled.tr``;

export const TableBody = styled.tbody`
    text-align: center;
`;

export const TableCell = styled.td`
    padding: 0.5rem;
    border: 1px solid #ccc;
`;
