import {Page} from 'ionic-angular';

import {WelcomePage} from '../welcome/welcome.page';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';

const template: string = require('./tabs.page.html');

@Page({
  template: template
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public welcomePageRoot: any = WelcomePage;
  public tab2Root: any = Page2;
  public tab3Root: any = Page3;
}
