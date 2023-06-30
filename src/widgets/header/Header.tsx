import React from 'react';
import { ThemeSwitcher } from '../../entities/ThemeSwitcher';

const Header: React.FC = () => {
    const person = {
        name: 'Крош',
        avatar: 'https://img2.freepng.ru/20180614/pgx/kisspng-krosh-losyash-barash-njusha-kopatych-5b22abf74c0335.9588153615289989033114.jpg',
    };
    return (
        <div className='bg-white dark:bg-slate-900 h-12 flex items-center justify-between drop-shadow'>
            <img className='w-10 h-10 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/4/41/Akron_Z_logo_2015.png' alt="Логотип" />
            <div className='flex items-center h-10 mr-6'>
                <div className='flex items-center'>
                    <p className='text-sm dark:text-white mr-2 font-bold text-black whitespace-nowrap'>{person.name}</p>
                    <img className='object-cover rounded-full w-8 h-8' src={person.avatar} alt="Аватар пользователя" />
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    );
};
export default Header;
