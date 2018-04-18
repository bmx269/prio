import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model(params) {
    return RSVP.hash({
      profile: this.store.findRecord('team', params.team_id),
      team: this.store.findAll('team'),
    });
  },

  setupController(controller, models) {
    controller.set('profile', models.profile);
    controller.set('team', models.team);
  }
});
