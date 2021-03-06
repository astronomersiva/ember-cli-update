import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  test: Ember.computed.alias('rootURL')
});

Router.map(function() {
});

export default Router;
