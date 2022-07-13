import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sidebarItems } from './sidebar-items';
import SidebarItem from './item';
import { Root } from './sidebar.styles';

const Sidebar: React.FC = () => {
    const [items, setItems] = useState(sidebarItems);
    const navigate = useNavigate();
    console.log('red');

    const handleClick = useCallback(
        (route) => () => {
            console.log(route);
            navigate(route);
        },
        []
    );

    return (
        <Root>
            {items.map((item) => {
                return <SidebarItem key={item.id} {...item} onClick={handleClick(item.route)} />;
            })}
        </Root>
    );
};
export default Sidebar;
