import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | financial-life/management/control', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:financial-life/management/control');
    assert.ok(route);
  });
});
