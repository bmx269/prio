import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | connections/prio-cares', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:connections/prio-cares');
    assert.ok(route);
  });
});
