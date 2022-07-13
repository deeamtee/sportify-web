import Sidebar from '../components/sidebar/sidebar';
import Header from '../components/header/header';
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
