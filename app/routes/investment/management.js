import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'd00e6ac1-44e2-4a6e-a86b-b4326d1fbcdd'),
    //   page: this.store.query('page', {
    //     filter:
    //       {
    //         'slug':{
    //           'value': '/financial-life/management'
    //         },
    //       },
    //   })
    //     .then(pages => {
    //       return pages.get('firstObject');
    //     }),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
