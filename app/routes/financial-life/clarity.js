import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '67218008-3b14-4564-b32f-acc045f22d64'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
