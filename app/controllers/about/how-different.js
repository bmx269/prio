import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.selectedSnapshot = null; 
  },

  snapshotsAsArray: Ember.computed('snapshots.[]', function(){
    return this.get('snapshots').toArray();
  }),

  actions: {
    selectSnapshot(snap) {
      this.set('selectedSnapshot', snap);
      // console.log(this.get('selectedSnapshot'));
    },
  }
});
