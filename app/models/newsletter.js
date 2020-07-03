import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  created: attr(''),
  date: attr('date'),
  status: attr('boolean'),
  file: belongsTo('file', { async: true })
});
