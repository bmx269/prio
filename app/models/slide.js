import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  body: attr(''),
  image: belongsTo('file', { async: true }),
  slideshow: belongsTo('slideshow', { async: true }),
});
