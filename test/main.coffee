
QUnit.test "Basic page elements", (assert) ->

  # Get the page title
  assert.ok $('title').length > 0, 'There is a page title'