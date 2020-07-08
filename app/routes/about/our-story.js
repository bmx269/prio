import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'a4396795-37e4-4503-8c05-5eb7728125ad'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }

});
