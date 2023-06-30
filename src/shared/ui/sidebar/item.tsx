import React from 'react';
import { useLocation } from 'react-router-dom';

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
    const classNames = `flex items-center p-3 w-full h-12 cursor-pointer rounded-xl box-border ${active ? 'text-white bg-slate-950 dark:text-slate-950 dark:bg-white' : 'text-slate-950 bg-while dark:text-white dark:bg-transparent'}`
    const svgColor = () => {
        if (!document.documentElement.classList.contains('dark')) {
            return active ? '#ffffff' : '#4E5D78'
        } else {
            return active ? '#172154' : '#ffffff'
        }
    }
    return (
        <div className={classNames} onClick={onClick}>
            <div className='mr-5'>
                <IconSVG color={svgColor()} />
            </div>
            {name}
        </div>
    );
};

export default SidebarItem;
