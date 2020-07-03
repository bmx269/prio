import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'f1b62e31-3290-45d8-9baa-e132723e191f'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
