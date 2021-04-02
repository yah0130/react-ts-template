import page_APP from '../pages/app/main';
import page_HOME from '../pages/home/main';
import stage_NOT_FOUND from '../pages/not-found/main';

const pageRoutes = new Map();

pageRoutes.set('/app', page_APP);
pageRoutes.set('/home', page_HOME);
pageRoutes.set('/not-found', stage_NOT_FOUND);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

export default pageRoutes;
