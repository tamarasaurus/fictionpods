const keystone = require('keystone')
const Types = keystone.Field.Types

const Rating = new keystone.List('Rating', {
  map: { name: 'review' },
  track: {
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
  },
  defaultColumns: 'user,positive,review,podcast',
})

Rating.add({
  user: {
    type: Types.Relationship,
    ref: 'User',
    initial: true,
  },
  positive: {
    type: Types.Boolean,
    required: true,
    initial: true,
  },
  review: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  podcast: {
    type: Types.Relationship,
    ref: 'Podcast',
    required: true,
    initial: true,
  },
})

Rating.register()
