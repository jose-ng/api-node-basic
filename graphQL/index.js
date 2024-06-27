const { ApolloServer } = require('@apollo/server');
const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} = require('@apollo/server/plugin/landingPage/default');
const { expressMiddleware } = require('@apollo/server/express4');
const { config } = require('../config');
const { loadFilesSync } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers/index');

const {
  typeDefs: typeDefsScalars,
  resolvers: resolversScalars,
} = require('graphql-scalars');

const useGraphQL = async (app) => {
  const typeDefs = [...loadFilesSync('./**/*.graphql'), typeDefsScalars];
  const allResolvers = [resolvers, resolversScalars];
  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
    playground: true,
    plugins: [
      !config.dev
        ? ApolloServerPluginLandingPageProductionDefault({
            graphRef: 'word-store@apollo',
            footer: false,
          })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  });

  await server.start();

  app.use(
    '/graphql',
    expressMiddleware(server)
  );
};

module.exports = useGraphQL;
