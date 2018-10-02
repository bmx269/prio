import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '5783e1f5-6582-4197-b524-15f088331381'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
