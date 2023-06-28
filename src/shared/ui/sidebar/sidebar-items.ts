import {Barbell, Brain, CirclesFour, CircleWavyCheck, Crosshair, Gear, Leaf} from './resources';

export const sidebarItems = [
    {
        name: 'Прогресс',
        route: '/progress',
        id: 'progress',
        icon: CircleWavyCheck,
    },
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
