import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'fdf4a2c9-5a7f-4ead-92dc-a92cfcc2cf8a'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});



