import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '01c32a04-d5a7-4c55-b6b0-e83484860fce'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
