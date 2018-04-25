import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'bbdcfcb2-1c6c-4c88-ab78-a5c3e93c1c29'),
      snapshots: this.store.findAll('snapshot'),
      // snapshots: this.store.query('snapshot', {
      //   filter:
      //     {
      //       'displayOn':{
      //         'value': 'how-different'
      //       },
      //     },
      // }),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('snapshots', models.snapshots);
  }
});
