import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  created: DS.attr(''),
  status: DS.attr('boolean'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleInitial: DS.attr('string'),
  image: DS.belongsTo('file', { async: true }),
  thumbnail: DS.belongsTo('file', { async: true }),
});
