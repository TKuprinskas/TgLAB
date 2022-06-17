import React from 'react';
import * as S from './styles';

const Table = ({ data }) => {
    const sortedData = data.slice().sort((a, b) => b.points - a.points);

    return (
        <S.Table>
            <S.TableHeader>
                <S.TableRow>
                    <S.TableCell>Place</S.TableCell>
                    <S.TableCell>Team</S.TableCell>
                    <S.TableCell>Played</S.TableCell>
                    <S.TableCell>Win</S.TableCell>
                    <S.TableCell>Draw</S.TableCell>
                    <S.TableCell>Lost</S.TableCell>
                    <S.TableCell>Points</S.TableCell>
                </S.TableRow>
            </S.TableHeader>
            <S.TableBody>
                {sortedData.length > 0 ? (
                    sortedData.map(({ team, played, win, draw, lost, points }, index) => (
                        <S.TableRow key={index}>
                            <S.TableCell>{index + 1}</S.TableCell>
                            <S.TableCell>{team}</S.TableCell>
                            <S.TableCell>{played}</S.TableCell>
                            <S.TableCell>{win}</S.TableCell>
                            <S.TableCell>{draw}</S.TableCell>
                            <S.TableCell>{lost}</S.TableCell>
                            <S.TableCell>{points}</S.TableCell>
                        </S.TableRow>
                    ))
                ) : (
                    <S.TableRow>
                        <S.TableCell>No data</S.TableCell>
                        <S.TableCell>No data</S.TableCell>
                        <S.TableCell>No data</S.TableCell>
                        <S.TableCell>No data</S.TableCell>
                        <S.TableCell>No data</S.TableCell>
                        <S.TableCell>No data</S.TableCell>
                        <S.TableCell>No data</S.TableCell>
                    </S.TableRow>
                )}
            </S.TableBody>
        </S.Table>
    );
};

export default Table;
