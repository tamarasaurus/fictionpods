const keystone = require('keystone')
const Types = keystone.Field.Types

const Contributor = new keystone.List('Contributor', {
  autokey: {
    from: 'name',
    path: 'key',
    unique: true,
  },
  map: { name: 'name' },
  track: {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
  },
  defaultColumns: 'name,type,links',
})

Contributor.add({
  name: {
    type: Types.Text,
    initial: true,
  },
  type: {
    type: Types.Select,
    options: 'actor, musician, host, creator, writer',
    required: true,
    default: 'creator',
    initial: true,
  },
  links: {
    type: Types.Url,
    many: true,
    initial: true,
  },
})

Contributor.register()
