import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  created: DS.attr(''),
  date: DS.attr('date'),
  status: DS.attr('boolean'),
  file: DS.belongsTo('file', { async: true })
});
