import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  created: DS.attr(''),
  status: DS.attr('boolean'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleInitial: DS.attr('string'),
  professionalTitle: DS.attr('string'),
  email: DS.attr('string'),
  linkedin: DS.attr('string'),
  body: DS.attr(''),
  image: DS.belongsTo('file', { async: true }),
  thumbnail: DS.belongsTo('file', { async: true }),
});
