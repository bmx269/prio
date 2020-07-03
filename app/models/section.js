import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
  created: attr('string'),
  divider: attr('boolean'),
  parallax: attr('boolean'),
  reverse: attr('boolean'),
  show: attr('boolean'),
  isHero: attr('boolean'),
  background: attr('string'),
  colHorizontalAlignment: attr('string'),
  colVerticalAlignment: attr('string'),
  heroSize: attr('string'),
  overlay: attr('string'),
  backgroundImage: belongsTo('file', { async: true }),
  column: hasMany('column', { async: true }),
  page: belongsTo('page', { async: true }),
});
