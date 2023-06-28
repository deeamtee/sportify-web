import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { sidebarItems } from './sidebar-items';
import SidebarItem from './item';
import { Root } from './sidebar.styles';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = useCallback(
        (route) => () => {
            navigate(route);
        },
        []
    );

    return (
        <Root>
            {sidebarItems.map((item) => {
                return <SidebarItem key={item.id} {...item} onClick={handleClick(item.route)} />;
            })}
        </Root>
    );
};
export default Sidebar;
