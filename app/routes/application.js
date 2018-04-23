import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  model() {
    return RSVP.hash({
      articles: this.store.findAll('article'),
      pages: this.store.findAll('page'),
      sections: this.store.findAll('section'),
      columns: this.store.findAll('column'),
      team: this.store.findAll('team'),
      texts: this.store.findAll('text'),
      listings: this.store.findAll('listing'),
      files: this.store.findAll('file'),
      snapshots: this.store.findAll('snapshot'),
      accordions: this.store.findAll('accordion')
    });
  },

  setupController(controller, models) {
    controller.set('articles', models.articles);
    controller.set('pages', models.pages);
    controller.set('sections', models.sections);
    controller.set('columns', models.columns);
    controller.set('team', models.team);
    controller.set('texts', models.texts);
    controller.set('listings', models.listings);
    controller.set('files', models.files);
    controller.set('snapshots', models.snapshots);
    controller.set('accordions', models.accordions);
  }
});
