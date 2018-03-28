import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  created: DS.attr(''),
  status: DS.attr('boolean'),
  intro: DS.attr(''),
  body: DS.attr('string'),
  slug: DS.attr('string'),
});
