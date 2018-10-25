import DS from 'ember-data';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import ENV from '../config/environment';

export default DS.Model.extend({
  filename: DS.attr('string'),
  uri: DS.attr(''),
  url: DS.attr('string'),
  image: DS.hasMany('image', {inverse: 'image', async: true }),
  thumbnail: DS.hasMany('image', {inverse: 'thumbnail', async: false }),

  fullUrl: computed('url', function() {
    const host = ENV.host;
    let url = this.url;
    return `${host}`+`${url}`;
  }),
  inlineBackground: computed('fullUrl', function () {
    return new htmlSafe( "background-image: url('" + this.fullUrl + "')" );
  })
});
