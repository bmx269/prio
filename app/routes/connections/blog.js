import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', 'f7c0a912-ac00-47b2-ae61-dc2c57e5fd1c'),
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
