import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  created: attr(''),
  status: attr('boolean'),
  firstName: attr('string'),
  lastName: attr('string'),
  middleInitial: attr('string'),
  professionalTitle: attr('string'),
  email: attr('string'),
  linkedin: attr('string'),
  dashedTitle: attr('string'),
  order: attr('number'),
  body: attr(''),
  image: belongsTo('file', { async: true }),
  thumbnail: belongsTo('file', { async: true }),
});
