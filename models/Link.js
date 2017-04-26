const keystone = require('keystone')
const Types = keystone.Field.Types

const Link = new keystone.List('Link', {
  autokey: {
    path: 'url',
    from: 'url',
    unique: true,
  },
  map: {
    name: 'url',
  },
  track: {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
  },
  defaultColumns: 'description,url',
})

Link.add({
  description: {
    type: Types.Text,
    reqired: true,
    initial: true,
  },
  url: {
    type: Types.Url,
    required: true,
    initial: true,
  },
})

Link.register()
