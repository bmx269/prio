import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model(params) {
    return RSVP.hash({
      article: this.store.findRecord('article', params.article_id),
    });
  },

  setupController(controller, models) {
    controller.set('article', models.article);
  }
});
