module.exports = {
  attribute : {
    name: {
      type: 'string',
      required: true
    },
    city: {
      type: 'string'
    },
    address: {
      type: 'string'
    },

    jobs: {
      collection: 'Job',
      via: '_company'
    },
    user: {
      model: 'user',
      columnName: 'userId',
      required: true
    }
  }
}
