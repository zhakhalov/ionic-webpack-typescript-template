import { Component, Inject } from '@angular/core';
import { Loading, NavController } from 'ionic-angular';

@Component({
  template: require('./start.page.html'),
})
export class StartPage {

  constructor(
    @Inject(NavController) private nav: NavController
  ) {
  }
}
