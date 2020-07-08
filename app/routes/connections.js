import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '8d2e16f8-446e-429d-8411-7fde6c5ba404'),
      // page: this.store.query('page', {
      //   filter:
      //     {
      //       'slug':{
      //         'value': '/news'
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
  }
});
