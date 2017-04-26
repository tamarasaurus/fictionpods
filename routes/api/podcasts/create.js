const keystone = require('keystone')
const Podcast = keystone.list('Podcast')

exports = module.exports = function(req, res) {
  const data = req.body
  const podcast = new Podcast.model()

  podcast.getUpdateHandler(req).process(data, function(err) {
    if (err) return res.json(err, 400)
    return res.apiResponse({ podcast })
  })
}
