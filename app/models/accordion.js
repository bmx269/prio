import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default Model.extend({
  created: attr(''),
  accitem: hasMany('accitem'),
  element: belongsTo('element')
});
