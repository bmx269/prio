import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      pages: this.store.findAll('page'),
      sections: this.store.findAll('section'),
      columns: this.store.findAll('column'),
      texts: this.store.findAll('text'),
      files: this.store.findAll('file'),
      snapshots: this.store.findAll('snapshot')
    });
  },

  setupController(controller, models) {
    controller.set('pages', models.pages);
    controller.set('sections', models.sections);
    controller.set('columns', models.columns);
    controller.set('texts', models.texts);
    controller.set('listings', models.listings);
    controller.set('files', models.files);
    controller.set('snapshots', models.snapshots);
  }
});
