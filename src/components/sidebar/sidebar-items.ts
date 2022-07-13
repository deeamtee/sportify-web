import CirclesFour from './resources/CirclesFour.svg';
import Barbell from './resources/Barbell.svg';
import Brain from './resources/Brain.svg';
import Leaf from './resources/Leaf.svg';
import Crosshair from './resources/Crosshair.svg';
import Gear from './resources/Gear.svg';

export const sidebarItems = [
    {
        name: 'Новости',
        route: '/feed',
        id: 'feed',
        icon: CirclesFour,
    },
    {
        name: 'Тренировки',
        route: '/trainings',
        id: 'trainings',
        icon: Barbell,
    },
    {
        name: 'Питание',
        route: '/nutrition',
        id: 'nutrition',
        icon: Leaf,
    },
    {
        name: 'Цели',
        route: '/targets',
        id: 'targets',
        icon: Crosshair,
    },
    {
        name: 'Разум',
        route: '/mind',
        id: 'mind',
        icon: Brain,
    },
    {
        name: 'Настройки',
        route: '/settings',
        id: 'settings',
        icon: Gear,
    },
];
export default sidebarItems;
