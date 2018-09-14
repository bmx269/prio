import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'c9a20e5a-6492-496c-943b-6120a52b0eda'),
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
