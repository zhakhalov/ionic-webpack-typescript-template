/// <reference path="../_references.d.ts" />

import { App, Requires } from 'decorators';
import { services } from './services/services';
import { components } from './components/components';
import { pages } from './pages/pages';

require('./scss/main.scss');

@App(document, 'app')
@Requires(
  'dependencies',
  pages.name,
  components.name,
  services.name
)
class Application {
  constructor(module: ng.IModule) {

  }
}