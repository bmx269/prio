import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'e365a2a3b-17da-4d31-afeb-4e144b450bda'),
      newsletters: this.store.findAll('newsletter'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('newsletters', models.newsletters);
  }
});
