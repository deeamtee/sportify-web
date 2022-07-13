import styled from 'styled-components'


export const Root = styled.div`
    background: #FFFFFF;
    max-width: 1440px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`

export const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 32px;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    width: 130px;
    height: 48px;
    margin-right: 0.5em;
`

export const Name = styled.p`
    font-size: 0.8em;
    margin-right: 0.5em;
    font-weight: bold;
    color: black;
    white-space:nowrap;
`

export const Avatar = styled.img`
    object-fit: cover;
    border-radius: 25%;
    width: 40px;
    height: 40px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;;
`


// @media screen only (max-width: 100px) {
//     width: 240px;
//   }
