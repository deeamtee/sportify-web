import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Feed from './containers/feed';
import Nutrition from './containers/nutrition';
import Trainings from './containers/trainings';
import main from './layouts/main';

const AppContainer = main(() => <div>App</div>);
const FeedContainer = main(Feed);
const NutritionContainer = main(Nutrition);
const TrainingsContainer = main(Trainings);

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path='/' element={<AppContainer />} />
            <Route path='/feed' element={<FeedContainer />} />
            <Route path='/trainings' element={<TrainingsContainer />} />
            <Route path='/nutrition' element={<NutritionContainer />} />
        </ReactRoutes>
    );
};

export default Routes;
