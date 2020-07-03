import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '31f73aca-4153-4022-9074-c72d17dac953'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});



