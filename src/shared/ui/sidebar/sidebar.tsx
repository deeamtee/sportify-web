import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { sidebarItems } from './sidebar-items';
import SidebarItem from './item';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = useCallback(
        (route) => () => {
            navigate(route);
        },
        []
    );

    return (
        <div className='bg-white dark:bg-slate-900 w-60 p-4 flex-shrink-0'>
            {sidebarItems.map((item) => {
                return <SidebarItem key={item.id} {...item} onClick={handleClick(item.route)} />;
            })}
        </div>
    );
};
export default Sidebar;
