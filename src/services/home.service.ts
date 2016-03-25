import { Service, Inject } from 'decorators';

import { ServicesModule } from './services.module';

export const homeService = 'HomeService';

export interface IHomeService {
  getHomeGreetings(): ng.IPromise<string>
}

@Service(ServicesModule.module, homeService)
class HomeService implements IHomeService {
  constructor(
    @Inject('$q') private $q: ng.IQService
  ) {
  }

  public getHomeGreetings(): ng.IPromise<string> {
    return this.$q.resolve('Home, Sweet Home');
  }
}

