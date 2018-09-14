import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '4d3eb842-beb3-4d5c-802d-dcbe4ff009a0'),
      blogs: this.store.findAll('blog'),
      // articles: this.store.query('article', {
      //   sort: "-date",
      // }),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
    controller.set('blogs', models.blogs);
  }
});
