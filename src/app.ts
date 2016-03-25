/// <reference path="../_references.d.ts" />

import { App, Requires } from 'decorators';
import { pagesModule } from './pages/pages'

require('./scss/main.scss');

@App(document, 'app')
@Requires(
  'dependencies',
  pagesModule.name
)
class Application {
  constructor(module: ng.IModule) {
  }
}