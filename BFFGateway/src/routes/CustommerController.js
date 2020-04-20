const typeDefs = `
  type Custommer {
    id: ID,
    status: String,
    fullName: String,
    accountId: String,
    userLogin: String,
    userPassword: String
  }
  type Query {
    getCustommers: [Custommer]
    getCustommer(id: ID!): Custommer
  }
  type Mutation {
    addCustommer(fullName: String!, userLogin: String!, userPassword: String!): Custommer
    updateCustommer(fullName: String!): Custommer
    deleteCustommer(id: ID!): Custommer
  }
`

module.exports = typeDefs