//import Layout
import { HeaderOnly } from '~/layouts';

//Import config routes
import config from '~/config';

//import Pages
import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';
import LivePage from '~/pages/Live';

//Routes for no login required
const publicRoutes = [
    {
        path: config.routesConfig.home,
        component: HomePage,
    },
    {
        path: config.routesConfig.following,
        component: FollowingPage,
    },
    {
        path: config.routesConfig.profile,
        component: ProfilePage,
    },
    {
        path: config.routesConfig.upload,
        component: UploadPage,
        layout: HeaderOnly,
    },
    {
        path: config.routesConfig.search,
        component: SearchPage,
        layout: null,
    },
    {
        path: config.routesConfig.live,
        component: LivePage,
    },
];

//Routes require login, otherwise return to login page
const privateRoutes = [];

export { publicRoutes, privateRoutes };
