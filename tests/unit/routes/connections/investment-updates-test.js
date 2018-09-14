import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | connections/investment-updates', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:connections/investment-updates');
    assert.ok(route);
  });
});
