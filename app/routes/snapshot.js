import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model(params) {
    return RSVP.hash({
      snapshot: this.store.findRecord('snapshot', params.snap_id),
    });
  },

  setupController(controller, models) {
    controller.set('snapshot', models.snapshot);
  }
});
