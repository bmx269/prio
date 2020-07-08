import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'af39d427-5094-48f8-b397-2b3c0f46f619'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }


});
