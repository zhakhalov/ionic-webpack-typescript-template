import { pages } from './pages/pages';
import { components } from './components/components';
import { services } from './services/services';

require('./scss/main.scss');

angular.module('app', [
  'dependencies',
  services.name,
  components.name,
  pages.name,
]);

angular.element(document).ready(() => angular.bootstrap(document, 'app'));