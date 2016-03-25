/// <reference path="../_references.d.ts" />

import { App, Requires } from 'decorators';
import { servicesModule } from './services/services';
import { componentsModule } from './components/components';
import { pagesModule } from './pages/pages';

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