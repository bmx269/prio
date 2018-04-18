import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.selectedSnapshot = null; 
  },

  actions: {
    selectSnapshot(snap) {
      this.set('selectedSnapshot', snap);
      // console.log(this.get('selectedSnapshot'));
    },
  }
});
