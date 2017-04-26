const keystone = require('keystone')
const Types = keystone.Field.Types

const Podcast = new keystone.List('Podcast', {
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
  defaultColumns: 'name,description,release_date,email,network,state,images,links,ratings,submitter',
})

Podcast.add({
  name: {
    type: Types.Text,
    initial: true,
  },
  description: {
    type: Types.Text,
    initial: true,
  },
  release_date: {
    type: Types.Date,
    initial: true,
  },
  email: {
    type: Types.Email,
    initial: true,
  },
  network: {
    type: Types.Text,
    initial: true,
  },
  state: {
    type: Types.Select,
    options: 'draft, published, archived',
    default: 'draft',
    required: true,
    initial: true,
  },
  images: {
    type: Types.CloudinaryImages,
    initial: true,
  },

  // Relationships
  links: {
    type: Types.Relationship,
    ref: 'Link',
    many: true,
    initial: true,
  },
  ratings: {
    type: Types.Relationship,
    ref: 'Rating',
    many: true,
    initial: true,
  },
  contributors: {
    type: Types.Relationship,
    ref: 'Contributor',
    many: true,
    initial: true,
  },
  // Maybe change this to User
  submitter: {
    type: Types.Relationship,
    ref: 'Submitter',
    initial: true,
  },
})

Podcast.register()
