import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.selectedSnapshot = null;

    
  },

  // snapshotsAsArray: Ember.computed('page.section.elements.snapshot.[]', function(){
  //   return this.get('page.section.elements.snapshot').toArray();
  // }),

  actions: {
    selectSnapshot(snap) {
      this.set('selectedSnapshot', snap);
      // console.log(this.get('selectedSnapshot'));
    },
  }
});
