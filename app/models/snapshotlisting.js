import DS from 'ember-data';

export default DS.Model.extend({
  snapshot: DS.hasMany('snapshot', { async: true }),
  element: DS.belongsTo('element', { async: true })
});
