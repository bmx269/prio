import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '636005a6-d72f-4490-b6ea-799b27ba3d2c'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
