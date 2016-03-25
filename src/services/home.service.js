import { servicesModule } from './services.module';

class HomeService {

  // @ngInject
  constructor($q) {
    this.$q = $q;
  }

  getHomeGreetings() {
    return this.$q.resolve('Home, Sweet Home');
  }
}

servicesModule.service('homeService', HomeService);
