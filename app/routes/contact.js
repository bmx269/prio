import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '51a8a48b-250a-454e-b04d-53be8158bfbf'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
