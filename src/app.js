import { pages } from './pages/pages';
import { components } from './components/components';
import { services } from './services/services';

require('./scss/main.scss');

angular.module('app', [
  'dependencies',
  pages.name,
  components.name,
  services.name
]);

angular.bootstrap(document, 'app');