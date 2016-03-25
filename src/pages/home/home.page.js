import { pagesModule } from '../pages.module';

require('./home.scss');
const template = require('./home.html');

// @ngInject
function homePageStateConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: template,
      controller: HomeController,
      controllerAs: '$ctrl'
    });
}

class HomeController {
  // @ngInject
  constructor($state) {

  }
}

pagesModule.config(homePageStateConfig);
