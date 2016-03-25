import { pagesModule } from './pages.module'

// import all required pages here
import  './home/home.page';

// @ngInject
function routeConfig($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
}

pagesModule.config(homePageStateConfig);

export const pages = pagesModule;
