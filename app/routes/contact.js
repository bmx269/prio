import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '21338e9a-1ddc-492a-a5ee-97f662905830'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
