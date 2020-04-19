const resolvers = {
  Query: {
    getCustommers: (parent, args) => {
      return [
        {
          id: '',
          status: true,
          fullName: 'rafael dias dasdj a sd',
          accountId: 'fadsjfhsdkfhasjfhadsj'
        }
      ]
    },
    getCustommer: (parent, args) => {
      console.log(args.id)
      return {
        id: '',
        status: true,
        fullName: 'rafael dias dasdj a sd',
        accountId: 'fadsjfhsdkfhasjfhadsj'
      }
    }
  },
  Mutation: {
    addCustommer: (parent, args) => {
      // let Movie = new Movie({
      //   name: args.name,
      //   producer: args.producer,
      //   rating: args.rating,
      // });
      // return Movie.save();
      return ''
    },
    updateCustommer: (parent, args) => {
      if (!args.id) return;
      return ''
    },
    deleteCustommer: (parent, args) => {
      if (!args.id) return;
      return ''
    }
  }
}

module.exports = resolvers