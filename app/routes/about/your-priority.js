import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '9d2e0600-35d8-4b8f-8b8d-e2e52d08c547'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});



