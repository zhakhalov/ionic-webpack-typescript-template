/// <reference path="./typings/typings.d.ts" />

import { App, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs.page';
import { Inject } from 'angular2/core'

require('./theme/app.scss');

/**
 * Entry point for your application.
 */

@App({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  config: {
  },
  providers: [

  ]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    @Inject(Platform) private platform: Platform
  ) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
