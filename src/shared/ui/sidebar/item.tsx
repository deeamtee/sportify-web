import React from 'react';
import { useLocation } from 'react-router-dom';
import { Icon, Item } from './sidebar.styles';

type Route = string;

interface Props {
    id: string;
    name: string;
    route: Route;
    icon: (props: React.SVGProps<SVGElement>) => React.ReactElement;
    onClick: (event: React.MouseEvent) => void;
}

const SidebarItem: React.FC<Props> = ({ name, id, icon, onClick }) => {
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1];
    const active = currentPath === id;
    const IconSVG = icon;

    return (
        <Item active={active} onClick={onClick}>
            <Icon>
                <IconSVG color={active ? '#ffffff' : '#4E5D78'} />
            </Icon>
            {name}
        </Item>
    );
};

export default SidebarItem;
