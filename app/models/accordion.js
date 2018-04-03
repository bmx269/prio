import DS from 'ember-data';

export default DS.Model.extend({
  created: DS.attr(''),
  accitem: DS.hasMany('accitem'),
  element: DS.belongsTo('element')
});
