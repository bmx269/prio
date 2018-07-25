import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      pages: this.store.findAll('page'),
      sections: this.store.findAll('section'),
      texts: this.store.findAll('text'),
    });
  },

  setupController(controller, models) {
    controller.set('pages', models.pages);
    controller.set('sections', models.sections);
    controller.set('texts', models.texts);
  }
});
