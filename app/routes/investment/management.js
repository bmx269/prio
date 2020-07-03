import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '16fe9cfa-469d-4c3b-905b-1a750e471cdc'),
      snapshots: this.store.findAll('snapshot')
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
