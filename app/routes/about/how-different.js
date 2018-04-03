import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'bbdcfcb2-1c6c-4c88-ab78-a5c3e93c1c29'),
      // page: this.store.query('page', {
      //   filter:
      //     {
      //       'slug':{
      //         'value': '/about/how-different'
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
