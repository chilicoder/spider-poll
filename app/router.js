import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('poll');
  this.route('answers', function() {
    this.route('view', { path: 'answers/:answer_id' });
  });
});

export default Router;
