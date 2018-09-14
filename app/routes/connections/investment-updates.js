import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'f083f018-8ede-41c1-80d1-5310ce8e2505'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
