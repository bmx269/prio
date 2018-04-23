import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      page: this.store.findRecord('page', '49f31165-9309-448c-b806-c73bc46ee517'),
    });
  },

  setupController(controller, models) {
    controller.set('page', models.page);
  }
});
