import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'ef6c3c8b-d169-4f66-9854-eb87b2fbe873'),
      // articles: this.store.findAll('article'),
      articles: this.store.query('article', {
        filter:
          {
            'archived':{
              'value': false
            },
          },
      }),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('articles', models.articles);
  }
});