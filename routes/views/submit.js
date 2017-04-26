const keystone = require('keystone')

exports = module.exports = function(req, res) {
  const view = new keystone.View(req, res)
  const locals = res.locals

  // Set locals
  locals.section = 'submit'

  // Render the view
  view.render('submit')
}
