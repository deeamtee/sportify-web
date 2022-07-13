import styled from 'styled-components';
import tokens from '../../constants/tokens';

export const Root = styled.div`
  background: #fff;
  width: 234px;
  padding: 16px;
`;

export const Item = styled.div<{active: boolean}>`
    width: 100%;
    height: 48px;
    background: ${({ active }) => active ? tokens.main.darkBlue : tokens.main.white };
`;
