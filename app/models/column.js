import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default Model.extend({
  columnWidthXs: attr('string'),
  columnWidthSm: attr('string'),
  columnWidthMd: attr('string'),
  columnWidthLg: attr('string'),
  columnWidthXl: attr('string'),
  css: attr('string'),
  element: hasMany('element', { async: true }),
  section: belongsTo('section', { async: true }),
});
