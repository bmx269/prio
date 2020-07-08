import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '12cc05a3-61e6-4f40-9ba8-73453a846791'),
      articles: this.store.findAll('article'),
      // articles: this.store.query('article', {
      //   sort: "-date",
      // }),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('articles', models.articles);
  }
});
