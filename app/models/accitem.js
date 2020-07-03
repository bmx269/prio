import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  created: attr(''),
  body: attr(''),
  accordion: belongsTo('accordion'),
});
