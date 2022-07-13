import React from 'react';
import { useLocation } from 'react-router-dom';
import { Icon, Item } from './sidebar.styles';

type Route = string;

interface Props {
    id: string;
    name: string;
    route: Route;
    icon?: React.ReactNode | string;
    onClick: (event: React.MouseEvent) => void;
}

const SidebarItem: React.FC<Props> = ({ name, id, icon, onClick }) => {
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1];

    return (
        <Item active={currentPath === id} onClick={onClick}>
            <Icon src={icon} />
            {name}
        </Item>
    );
};

export default SidebarItem;
