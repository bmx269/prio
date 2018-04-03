import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '870716c3-1d83-49c7-94cb-5e114342e6bb'),
      // page: this.store.query('page', {
      //   filter:
      //     {
      //       'slug':{
      //         'value': '/about/our-story'
      //       },
      //     },
      // })
      // .then(pages => {
      //   return pages.get('firstObject');
      // }),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
