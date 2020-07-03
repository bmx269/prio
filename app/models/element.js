import Model, { belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
  column: belongsTo('column', { async: true }),
  text: hasMany('text', { async: true }),
  image: hasMany('image', { async: true }),
  listing: hasMany('listing', { async: true }),
  accordion: hasMany('accordion', { async: true }),
  snapshotlisting: hasMany('snapshotlisting', { async: true })
  // video: DS.hasMany('video'),
  // slideshow: DS.hasMany('slideshow'),
});
