import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '1e8f8ccd-0e31-46ff-8989-31df22290901'),
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
