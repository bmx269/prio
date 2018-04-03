import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  created: DS.attr(''),
  body: DS.attr(''),
  accordion: DS.belongsTo('accordion'),
});
