import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'ebf6c117-b50a-4640-a4c9-dc60ec83927a'),
      newsletters: this.store.findAll('newsletter'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('newsletters', models.newsletters);
  }
});
