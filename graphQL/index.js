// Importing necessary modules from Apollo Server
const { ApolloServer } = require('@apollo/server');

// Importing Apollo Server plugins for landing pages (local and production environments)
const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} = require('@apollo/server/plugin/landingPage/default');

// Importing middleware to connect Apollo Server with Express
const { expressMiddleware } = require('@apollo/server/express4');

// Importing application configuration
const { config } = require('../config');

// Importing a utility to load GraphQL schema files synchronously
const { loadFilesSync } = require('@graphql-tools/load-files');

// Importing resolvers for the GraphQL schema
const resolvers = require('./resolvers/index');

// Importing scalars for custom scalar types in GraphQL
const {
  typeDefs: typeDefsScalars,
  resolvers: resolversScalars,
} = require('graphql-scalars');

// Async function to configure and use GraphQL with an Express app
const useGraphQL = async (app) => {
  // Loading GraphQL type definitions and including custom scalars
  const typeDefs = [...loadFilesSync('./**/*.graphql'), typeDefsScalars];
  
  // Combining custom resolvers with scalar resolvers
  const allResolvers = [resolvers, resolversScalars];
  
  // Creating an Apollo Server instance with type definitions, resolvers, and configuration
  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
    playground: true,
    plugins: [
      // Conditionally applying the appropriate landing page plugin based on the environment (development or production)
      !config.dev
        ? ApolloServerPluginLandingPageProductionDefault({
            graphRef: 'dictionary-app@apollo',
            footer: false,
          })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  });

  // Starting the Apollo Server
  await server.start();

  // Applying the Apollo Server middleware to the Express app, under the '/graphql' endpoint
  app.use(
    '/graphql',
    expressMiddleware(server)
  );
};

module.exports = useGraphQL;