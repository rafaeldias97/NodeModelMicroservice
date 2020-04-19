const typeDefs = `
  type Custommer {
    id: ID
    status: Boolean
    fullName: String!
    accountId: String
  }
  type Query {
    getCustommers: [Custommer]
    getCustommer(id: ID!): Custommer
  }
  type Mutation {
    addCustommer(fullName: String!): Custommer
    updateCustommer(fullName: String!): Custommer
    deleteCustommer(id: ID!): Custommer
  }
`

module.exports = typeDefs