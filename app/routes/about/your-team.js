import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '16953090-9b1a-4f4e-b080-bcb8316bc544'),
      team: this.store.findAll('team'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('team', models.team);
  }
});
