const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { buildSubgraphSchema } = require("@apollo/subgraph");

const { readFileSync } = require("fs");
const gql = require("graphql-tag");

const typeDefs = gql(readFileSync("./schema.graphql", { encoding: "utf-8" }));
const resolvers = require("./resolvers");

async function startApolloServer() {
  // the server requires typeDefs and your resolvers
  const server = new ApolloServer({
    schema: buildSubgraphSchema({
      typeDefs,
      resolvers,
    }),
  });

  const port = Number.parseInt(process.env.PORT) || 4000;
  const subgraphName = "articles";

  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });

  console.log(`
        🚀  Subgraph ${subgraphName} is running
        📭  Query at ${url}
      `);
}

startApolloServer();
