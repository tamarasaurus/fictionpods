const keystone = require('keystone')
const Types = keystone.Field.Types

const Tag = new keystone.List('Tag', {
  autokey: {
    path: 'code',
    from: 'code',
    unique: true,
  },
  map: {
    name: 'code',
  },
  track: {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
  },
  defaultColumns: 'description,code',
})

Tag.add({
  description: {
    type: Types.Text,
    reqired: true,
    initial: true,
  },
  code: {
    type: Types.Text,
    required: true,
    initial: true,
  },
})

Tag.register()
