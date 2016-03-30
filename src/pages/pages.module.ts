import { Module, Requires } from 'decorators';

import { services } from 'services/services';
import { components } from 'components/components';

@Module('app.pages')
@Requires(
  'dependencies',
  services.name,
  components.name
)
export class PagesModule {
  private static __module: ng.IModule;

  public static get module(): ng.IModule {
    return PagesModule.__module;
  }

  constructor(
    module: angular.IModule
  ) {
    PagesModule.__module = module;
  }
}

