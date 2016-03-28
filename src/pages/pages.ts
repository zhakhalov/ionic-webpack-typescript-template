import { Config, Inject } from 'decorators';
import { PagesModule } from './pages.module'

// import all required pages here
import './home/home.page';

@Config(PagesModule.module)
class PagesRouteConfig {
  constructor(
    @Inject('$urlRouterProvider') private $urlRouterProvider: ng.ui.IUrlRouterProvider
  ) {
    this.$urlRouterProvider.otherwise('/home');
  }
}

export const pages = PagesModule.module;
