import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Item } from './sidebar.styles';

type Route = string;

interface Props {
    id: string;
    name: string;
    route: Route;
    icon?: React.ReactNode | any;
    onClick: (event: any) => void;
}

const SidebarItem: React.FC<Props> = ({ name, id, route, onClick }) => {
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1];

    return (
        <Item active={currentPath === id} onClick={onClick}>
            {name}
        </Item>
    );
};

export default SidebarItem;
