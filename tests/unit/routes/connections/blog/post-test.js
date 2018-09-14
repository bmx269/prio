import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | connections/blog/post', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:connections/blog/post');
    assert.ok(route);
  });
});
