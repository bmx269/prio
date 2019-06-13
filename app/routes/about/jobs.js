import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'efc4d14b-4901-4d28-bf8a-974b3a2a10d6'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});



