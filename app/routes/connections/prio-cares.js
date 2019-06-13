import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '00d32c02-fcb9-4514-a543-51c37661da76'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});



