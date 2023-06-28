import Sidebar from '../shared/ui/sidebar/sidebar';
import Header from '../shared/ui/header/header';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

const main = (Component) => () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Sidebar />
                <Component />
            </Wrapper>
        </>
    );
};

export default main;
