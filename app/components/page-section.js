import Component from '@ember/component';
// import { setProperties } from '@ember/object';
// import { on } from '@ember/object/evented';
// import InViewportMixin from 'ember-in-viewport';

export default Component.extend({
  // appCont: Ember.inject.controller('application'),

  init() {
    this._super(...arguments);
    this.tagName = 'section';
    this.classNames = ['page-section'];
    this.breakpoints = {
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 80
      }
    };
  },
});
