import { Module, Requires } from 'decorators';

@Module('app.services')
@Requires('dependencies')
export class ServicesModule {
  private static __module: ng.IModule;

  public static get module(): ng.IModule {
    return ServicesModule.__module;
  }

  constructor(
    module: angular.IModule
  ) {
    ServicesModule.__module = module;
  }
}

