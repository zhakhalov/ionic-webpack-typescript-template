import { Module, Requires } from 'decorators';

@Module('app.components')
@Requires('dependencies')
export class ComponentsModule {
  private static __module: ng.IModule;

  public static get module(): ng.IModule {
    return ComponentsModule.__module;
  }

  constructor(
    module: angular.IModule
  ) {
    ComponentsModule.__module = module;
  }
}

