import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '08793282-fe52-4915-ad5a-29a1cb45203d'),
      team: this.store.findAll('team'),
      // page: this.store.query('page', {
      //   filter:
      //     {
      //       'slug':{
      //         'value': '/about/your-team'
      //       },
      //     },
      // })
      //   .then(pages => {
      //     return pages.get('firstObject');
      //   }),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('team', models.team);
  }
});
