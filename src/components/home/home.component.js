import { componentsModule } from '../components.module';

const template = require('./home.html');

class HomeComponent {

  // @ngInject
  constructor(homeService) {
    this.homeService.getHomeGreetings()
      .then(greetings => {
        this.greetings = greetings;
      })
  }
}

componentsModule
.component('home', {
  template: template,
  controller: HomeComponent
})
