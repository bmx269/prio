import DS from 'ember-data';

export default DS.Model.extend({
  created: DS.attr(''),
  accordionItem: DS.hasMany('accordion-item', { async: true }),
  element: DS.belongsTo('element', { async: true })
});
