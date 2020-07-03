import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  created: attr(''),
  date: attr('date'),
  status: attr('boolean'),
  intro: attr(''),
  body: attr(''),
  slug: attr('string'),
  articleUrl: attr('string'),
  useDownload: attr('boolean'),
  archived: attr('boolean'),
  file: belongsTo('file', { async: true }),
  thumbnail: belongsTo('file', { async: true })
});
