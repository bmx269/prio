import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'ca7440a7-22b8-47bd-a503-2053c7d381f7'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});



