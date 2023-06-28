import React from 'react';
import { Root, Logo, Profile, Name, Avatar } from './header.styles';

const Header: React.FC = () => {
    const person = {
        name: 'Крош',
        avatar: 'https://img2.freepng.ru/20180614/pgx/kisspng-krosh-losyash-barash-njusha-kopatych-5b22abf74c0335.9588153615289989033114.jpg',
    };
    return (
        <Root>
            <Logo src='https://upload.wikimedia.org/wikipedia/commons/4/41/Akron_Z_logo_2015.png' />
            <Profile>
                <Name>{person.name}</Name>
                <Avatar src={person.avatar}></Avatar>
            </Profile>
        </Root>
    );
};
export default Header;
