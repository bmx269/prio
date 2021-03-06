import DS from 'ember-data';

export default DS.Model.extend({
  column: DS.belongsTo('column', { async: true }),
  text: DS.hasMany('text', { async: true }),
  image: DS.hasMany('image', { async: true }),
  listing: DS.hasMany('listing', { async: true }),
  accordion: DS.hasMany('accordion', { async: true }),
  snapshotlisting: DS.hasMany('snapshotlisting', { async: true })
  // video: DS.hasMany('video'),
  // slideshow: DS.hasMany('slideshow'),
});
