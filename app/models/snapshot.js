import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  created: DS.attr(''),
  status: DS.attr('boolean'),
  displayOn: DS.attr('string'),
  image: DS.belongsTo('file', { async: true }),
  thumbnail: DS.belongsTo('file', { async: true }),
  section: DS.hasMany('section', { async: true }),
  snapshotlisting: DS.belongsTo('snapshotlisting', { async: true })
});
