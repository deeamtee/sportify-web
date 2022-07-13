import React from 'react';
import { Root, Logo, Profile, Name, Avatar } from './header.styles';

const Header: React.FC = () => {
    const person = {
        name: 'Booba Biba',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    };
    return (
        <Root>
            <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/EA_Sports_monochrome_logo.svg/600px-EA_Sports_monochrome_logo.svg.png?20190218023909' />
            <Profile>
                <Name>{person.name}</Name>
                <Avatar src={person.avatar}></Avatar>
            </Profile>
        </Root>
    );
};
export default Header;
