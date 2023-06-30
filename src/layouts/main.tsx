import { Sidebar } from '../shared/ui/sidebar';
import { Header } from '../widgets/header';


const main = (Component) => () => {
    return (
        <>
            <Header />
            <div className='flex'>
                <Sidebar />
                <Component />
            </div>
        </>
    );
};

export default main;
