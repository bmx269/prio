import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  created: attr(''),
  status: attr('boolean'),
  displayOn: attr('string'),
  image: belongsTo('file', { async: true }),
  thumbnail: belongsTo('file', { async: true }),
  section: hasMany('section', { async: true }),
  snapshotlisting: belongsTo('snapshotlisting', { async: true })
});
