import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'd00e6ac1-44e2-4a6e-a86b-b4326d1fbcdd'),
      snapshots: this.store.findAll('snapshot')
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
