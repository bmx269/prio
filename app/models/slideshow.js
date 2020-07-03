import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default Model.extend({
  created: attr('string'),
  style: attr('string'),
  count: attr('number'),
  slide: hasMany('slide', { async: true }),
  element: belongsTo('element', { async: true })
});
