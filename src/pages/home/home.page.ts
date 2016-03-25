import { Controller, Inject } from 'decorators';
import { PagesModule } from '../pages.module';

require('./home.scss');
const template: string = require('./home.html');

export const homeName = 'home';
export const homeState: ng.ui.IState = {
  url: '/home',
  template: template,
  controller: HomeController,
  controllerAs: '$ctrl'
};

@Controller(PagesModule.module, homeName)
class HomeController {
  constructor(
    @Inject('$state') private $state: ng.ui.IStateService
  ) {

  }
}

