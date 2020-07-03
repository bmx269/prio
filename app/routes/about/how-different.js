import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '971061f7-e18c-46f2-8ce0-b9a247ff63f6'),
      snapshots: this.store.findAll('snapshot'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('snapshots', models.snapshots);
  }
});
