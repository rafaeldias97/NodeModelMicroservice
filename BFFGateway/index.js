const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const routes = require('./src/routes');
const resolvers = require('./src/resolvers');

const server = new ApolloServer({
  typeDefs: routes,
  resolvers: resolvers.custommerResolver
});
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));