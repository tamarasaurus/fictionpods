const keystone = require('keystone')
const Types = keystone.Field.Types

const Submitter = new keystone.List('Submitter', {
  autokey: {
    from: 'name',
    path: 'key',
    unique: true,
  },
  track: {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
  },
  defaultColumns: 'name,email',
})

Submitter.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  email: {
    type: Types.Email,
    required: true,
    initial: true,
  },
})

Submitter.register()
