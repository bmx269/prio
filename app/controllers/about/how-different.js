import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.selectedSnapshot = null;
  },

  snapshotsAsArray: computed('snapshots.[]', function(){
    return this.snapshots.toArray();
  }),

  actions: {
    selectSnapshot(snap) {
      this.set('selectedSnapshot', snap);
      // console.log(this.get('selectedSnapshot'));
    },
  }
});
