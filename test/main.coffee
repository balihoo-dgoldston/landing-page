
QUnit.test "Required page elements", (assert) ->

  ## SEO elements

  # Check for a page title
  title = $('title').html()
  assert.ok title, 'There is a page title'

  # Check for meta description
  description = $('#b-description').attr('content')
  assert.ok description, 'There is a meta description'

  # Check for canonical link
  canonical = $('#b-canonical').attr('href')
  assert.ok canonical, 'There is a canonical link'

  # Check for a favicon icon
  favicon = $('#b-favicon').attr('href')
  assert.ok favicon, 'There is a favicon in the assets/img folder'
  