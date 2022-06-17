import React from 'react';
import { useSelector } from 'react-redux';
import { teams } from './state/selectors';
import Table from './components/table';
import AddTeam from './components/addTeam';
import Results from './components/results';
import * as S from './styles/styles';

const App = () => {
    const result = useSelector(teams);

    return (
        <S.Container>
            <AddTeam />
            <S.TableWrapper>
                <Table data={result} />
                <Results />
            </S.TableWrapper>
        </S.Container>
    );
};

export default App;
