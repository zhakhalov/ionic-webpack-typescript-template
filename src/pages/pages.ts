import { Config, Inject } from 'decorators';
import { PagesModule } from './pages.module'

import { homeState, homeName } from './home/home';

@Config(PagesModule.module)
class PagesRouteConfig {
  constructor(
    @Inject('$stateProvider')private $stateProvider: angular.ui.IStateProvider,
    @Inject('$urlRouterProvider')private $urlRouterProvider: angular.ui.IUrlRouterProvider
  ) {
    this.configStates();
    this.$urlRouterProvider.otherwise(homeState.url as string);
  }

  private configStates() {
    this.$stateProvider
      .state(homeName, homeState)
  }
}

export const pagesModule = PagesModule.module;
