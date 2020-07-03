import Model, { belongsTo } from '@ember-data/model';

export default Model.extend({
  image: belongsTo('file', { async: true }),
  element: belongsTo('element', { async: true }),
});
