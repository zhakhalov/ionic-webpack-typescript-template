import { Component, Inject } from 'decorators';
import { ComponentsModule } from '../components.module';

import { IHomeService, homeService } from '../../services/home.service';

const template: string = require('./home.html');

@Component(ComponentsModule.module, 'home', {
  template: template
})
export default class HomeComponent {

  private greetings: string;

  constructor(
    @Inject(homeService) private homeService: IHomeService
  ) {
    this.homeService.getHomeGreetings()
      .then(greetings => {
        this.greetings = greetings;
      })
  }
}

