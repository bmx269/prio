import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '67218008-3b14-4564-b32f-acc045f22d64'),
      snapshots: this.store.findAll('snapshot'),
      // snapshots: this.store.query('snapshot', {
      //   filter:
      //     {
      //       'displayOn':{
      //         'value': 'clarity'
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
