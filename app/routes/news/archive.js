import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'db66b63b-46f2-4497-9d2b-f2b5f2a3f09a'),
      articles: this.store.findAll('article'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('articles', models.articles);
  }
});
