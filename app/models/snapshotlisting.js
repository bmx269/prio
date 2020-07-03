import Model, { hasMany, belongsTo } from '@ember-data/model';

export default Model.extend({
  snapshot: hasMany('snapshot', { async: true }),
  element: belongsTo('element', { async: true })
});
