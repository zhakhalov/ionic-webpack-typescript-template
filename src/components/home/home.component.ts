import { Component, Inject } from 'decorators';
import { ComponentsModule } from '../components.module';

require('./home.scss');
const template: string = require('./home.html');

@Component(ComponentsModule.module, 'home', {
  template: template
})
export default class HomeController {
  constructor(

  ) {

  }
}

