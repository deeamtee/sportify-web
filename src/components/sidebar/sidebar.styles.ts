import styled from 'styled-components';
import tokens from '../../constants/tokens';

export const Root = styled.div`
  background: #fff;
  width: 234px;
  padding: 16px;
`;

export const Item = styled.div<{active: boolean}>`
    display: flex;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    cursor: pointer;
    border-radius: 12px;
    color: ${({ active }) => !active ? tokens.main.darkBlue : tokens.main.white };
    background: ${({ active }) => active ? tokens.main.darkBlue : tokens.main.white };
`;

export const Icon = styled.img`
margin-right: 20px;
`;
