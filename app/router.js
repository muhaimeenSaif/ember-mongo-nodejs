import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts',{path:'/posts'});
  this.route('home');
  this.route('about');
  this.route('contact');
  this.route('email');
  this.route('phone');
});

export default Router;
