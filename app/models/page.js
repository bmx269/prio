import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  created: attr('string'),
  updated: attr('string'),
  status: attr('boolean'),
  slug: attr('string'),
  heroActive: attr('boolean'),
  section: hasMany('section', { async: true }),
});
