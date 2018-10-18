import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  serialize(team) {
    return {
      team_dashedTitle: team.get('dashedTitle')
    }
  },
  model(params) {
    return RSVP.hash({
      profile: this.store.query('team', {
        filter: {
          dashedTitle: params.team_dashedTitle
        }
      })
      .then(posts => {
        return posts.get('firstObject');
      }),
      // this.store.findRecord('team', params.team_dashedTitle),
      team: this.store.findAll('team'),
    });
  },

  setupController(controller, models) {
    controller.set('profile', models.profile);
    controller.set('team', models.team);
  }
});
