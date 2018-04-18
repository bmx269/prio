import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '870716c3-1d83-49c7-94cb-5e114342e6bb'),
      snapshots: this.store.findAll('snapshot')
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('snapshots', models.snapshots);
  }
});
