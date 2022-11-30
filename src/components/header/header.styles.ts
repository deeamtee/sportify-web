import styled from 'styled-components'


export const Root = styled.div`
    background: #FFFFFF;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 32px;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    margin-right: 24px;
`

export const Name = styled.p`
    font-size: 14px;
    margin-right: 12px;
    font-weight: bold;
    color: black;
    white-space:nowrap;
`

export const Avatar = styled.img`
    object-fit: cover;
    border-radius: 25%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
