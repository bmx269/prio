import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  created: DS.attr(''),
  status: DS.attr('boolean'),
  image: DS.belongsTo('file', { async: true }),
  thumbnail: DS.belongsTo('file', { async: true }),
  section: DS.hasMany('section', { async: true })
});
