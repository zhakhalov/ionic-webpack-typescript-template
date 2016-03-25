import { Module, Requires } from 'decorators';

@Module('app.pages')
@Requires('dependencies', 'app.services', 'app.components')
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

