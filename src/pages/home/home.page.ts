import { Config, Controller, Inject } from 'decorators';
import { PagesModule } from '../pages.module';

require('./home.scss');
const template: string = require('./home.html');

@Config(PagesModule.module)
class PagesRouteConfig {
  constructor(
    @Inject('$stateProvider') private $stateProvider: angular.ui.IStateProvider
  ) {
    this.$stateProvider
      .state('home', {
        url: '/home',
        template: template,
        controller: HomeController,
        controllerAs: '$ctrl'
      })
  }
}

@Controller(PagesModule.module, 'HomeController')
export default class HomeController {
  constructor(
    @Inject('$state') private $state: ng.ui.IStateService
  ) {

  }
}

