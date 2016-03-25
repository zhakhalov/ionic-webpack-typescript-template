/// <reference path="../_references.d.ts" />

import { App, Requires } from 'decorators';
import { pagesModule } from './pages/pages';
import { componentsModule } from './components/components';
import { servicesModule } from './services/services';

require('./scss/main.scss');

@App(document, 'app')
@Requires(
  'dependencies',
  pagesModule.name,
  componentsModule.name,
  servicesModule.name
)
class Application {
  constructor(module: ng.IModule) {
  }
}