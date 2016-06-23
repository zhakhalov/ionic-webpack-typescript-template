/// <reference path="typings/typings.d.ts" />
import { Inject, Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Nav, ionicProviders } from 'ionic-angular';

// pages
import { StartPage } from './pages/start/start.page';

require('./theme/app.scss');

@Component({
  template: require('./app.html'),
  providers: [
  ],
  directives: [
  ]
})
export class App {
  @ViewChild(Nav) private nav: Nav;
  rootPage: any = StartPage;

  constructor(
  ) {
  }

}

ionicBootstrap(App);
