import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Feed from '../../pages/feed';
import Mind from '../../pages/mind';
import Nutrition from '../../pages/nutrition';
import Settings from '../../pages/settings';
import Targets from '../../pages/targets';
import Trainings from '../../pages/trainings';
import main from '../../layouts/main';
import Progress from "../../pages/progress";

const AppContainer = main(() => <div>App</div>);
const FeedContainer = main(Feed);
const NutritionContainer = main(Nutrition);
const TrainingsContainer = main(Trainings);
const TargetsContainer = main(Targets);
const MindContainer = main(Mind);
const SettingsContainer = main(Settings);
const ProgressContainer = main(Progress);

const RouterProvider = () => {
    return (
        <ReactRoutes>
            <Route path='/' element={<AppContainer />} />
            <Route path='/feed' element={<FeedContainer />} />
            <Route path='/trainings' element={<TrainingsContainer />} />
            <Route path='/nutrition' element={<NutritionContainer />} />
            <Route path='/targets' element={<TargetsContainer />} />
            <Route path='/mind' element={<MindContainer />} />
            <Route path='/settings' element={<SettingsContainer />} />
            <Route path='/progress' element={<ProgressContainer />} />
        </ReactRoutes>
    );
};

export default RouterProvider;
