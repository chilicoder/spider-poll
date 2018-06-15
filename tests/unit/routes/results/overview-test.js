import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | results/overview', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:results/overview');
    assert.ok(route);
  });
});
