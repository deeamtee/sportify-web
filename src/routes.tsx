import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Feed from './containers/feed';
import Mind from './containers/mind';
import Nutrition from './containers/nutrition';
import Settings from './containers/settings';
import Targets from './containers/targets';
import Trainings from './containers/trainings';
import main from './layouts/main';

const AppContainer = main(() => <div>App</div>);
const FeedContainer = main(Feed);
const NutritionContainer = main(Nutrition);
const TrainingsContainer = main(Trainings);
const TargetsContainer = main(Targets);
const MindContainer = main(Mind);
const SettingsContainer = main(Settings);

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path='/' element={<AppContainer />} />
            <Route path='/feed' element={<FeedContainer />} />
            <Route path='/trainings' element={<TrainingsContainer />} />
            <Route path='/nutrition' element={<NutritionContainer />} />
            <Route path='/targets' element={<TargetsContainer />} />
            <Route path='/mind' element={<MindContainer />} />
            <Route path='/settings' element={<SettingsContainer />} />
        </ReactRoutes>
    );
};

export default Routes;
