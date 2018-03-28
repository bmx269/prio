import DS from 'ember-data';

export default DS.Model.extend({
  accordionTitle: DS.attr('string'),
  created: DS.attr(''),
  body: DS.attr('string'),
  accordion: DS.belongsTo('accordion', { async: true }),
});
