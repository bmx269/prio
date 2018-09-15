import EmberRouter from '@ember/routing/router';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';
import { inject } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  headData: inject(),
  rootURL: config.rootURL,
  metrics: inject(),

  // setTitle(title) {
  //   this.get('headData').set('title', title);
  // },

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.url;
      const title = this.getWithDefault('currentRouteName', 'unknown');

      this.metrics.trackPage({ page, title });
    });
  }
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('about', function() {
    this.route('our-story');
    this.route('your-priority');
    this.route('how-different');
    this.route('your-team');
    this.route('member',{ path: '/your-team/:team_id' });
  });
  this.route('priority', function() {
    this.route('video');
  });
  this.route('financial-life', function() {
    this.route('clarity');
  });
  this.route('investment', function() {
    this.route('management');
  });
  this.route('connections', function() {
    this.route('in-the-news');
    this.route('archive', { path: '/in-the-new/archive' });
    this.route('post', { path: '/in-the-new/:article_id' });
    this.route('blog');
    this.route('blogpost', { path: '/blog/:blog_id' });
    this.route('investment-updates');
  });
  this.route('contact', function() {
    this.route('form');
  });
  this.route('disclosure');

  this.route('loading');
  // this.route('page', { path: ':slug'});
  this.route('notfound', { path: '/*path' });

});

export default Router;
