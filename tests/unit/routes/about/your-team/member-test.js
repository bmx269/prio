import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | about/your-team/member', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:about/your-team/member');
    assert.ok(route);
  });
});
