_NOTE: For a better understanding of the code change to the branch_ `git checkout module-3/part-2`

# Adding Implementation to Our Project

## Updating Types
First, we need to create the GraphQL model schemas for our entities. In our case, these are `user` and `word`.

#### graphQL/types/user.schema.graphql
```graphql
type Query {
  user(username: ID!): User!
  users(query: String): [User]!
}

type Mutation {
  createUser(dto: AddUserDto!): User!
  updateUser(id: ID!, dto: UpdateUserDto!): User
  deleteUser(id: ID!): Boolean
}

type User {
  id: ID!
  email: String!
  firstName: String!
  pSurName: String
  mSurname: String
  bio: String
  photoUrl: String
  createAt: Date
}

input AddUserDto {
  email: String!
  firstName: String!
}

input UpdateUserDto {
  firstName: String
  pSurName: String
  mSurname: String
  bio: String
  photoUrl: String
}
```

#### graphQL/types/word.schema.graphql
```graphql
type Query {
  word(id: ID!): Word!
  words(query: String, skip: Int, limit: Int): WordsResponse
}

type Mutation {
  addWord(dto: AddWordDto!): Word!
  updateWord(id: ID!, dto: AddWordDto!): Word
  deleteWord(id: ID!): Boolean
}

type Word {
  id: ID!
  text_es: String!
  text_en: String!
  createAt: Date
}

type WordsResponse {
  list: [Word]!
  total: Int!
}

input AddWordDto {
  text_es: String!
  text_en: String!
}
```

Next, install a necessary library to manipulate and merge these types of files:
```bash
npm install @graphql-tools/load-files
```

You can uninstall `graphql-tag` as it is no longer needed:
```bash
npm uninstall graphql-tag
```

**Note:** It is important to add the `nodemon.json` configuration file so that Nodemon can detect changes in GraphQL files:
```json
{
  "ignore": [".git", "node_modules/**/node_modules"],
  "watch": ["./**/*.js", "./**/*.graphql", "./**/*.gql"],
  "ext": "js,json,graphql,gql"
}
```

#### Updating Resolvers
##### graphQL/resolvers/user.resolvers.js
```javascript
const UserService = require('../../services/user.service');
const userService = new UserService();

function getUsers(_, { query, page, limit }) {
  return userService.getUsers(query, page, limit);
}

function getUserById(_, { id }) {
  return userService.getById(id);
}

async function addUser(_, { dto }) {
  return userService.create(dto);
}

async function updateUser(_, { id, dto }) {
  return userService.update(id, dto);
}

async function deleteUser(_, { id }) {
  return wordService.deleteUser(id);
}

module.exports = {
  getUserById,
  getUsers,
  addUser,
  updateUser,
  deleteUser
};
```

##### graphQL/resolvers/word.resolvers.js
```javascript
const WordService = require('../../services/word.service');
const wordService = new WordService();

function getWords(_, { query, page, limit }) {
  return wordService.getAll(query, page, limit);
}

function getWordById(_, { id }) {
  return wordService.getById(id);
}

function addWord(_, { dto }) {
  return wordService.add(dto);
}

function updateWord(_, { id, dto }) {
  return wordService.update(id, dto.data);
}

function deleteWord(_, { id }) {
  return wordService.add(id);
}

module.exports = {
  getWordById,
  getWords,
  addWord,
  updateWord,
  deleteWord
};
```

##### graphQL/resolvers/index.js
```javascript
const {
  getWordById,
  getWords,
  addWord,
  updateWord,
  deleteWord
} = require('./word.resolvers');

const {
  getUserById,
  getUsers,
  addUser,
  updateUser,
  deleteUser
} = require('./user.resolvers');

const resolvers = {
  Query: {
    // Users
    user: getUserById,
    users: getUsers,
    // Words
    word: getWordById,
    words: getWords,
  },
  Mutation: {
    // Users
    addUser,
    updateUser,
    deleteUser,
    // Words
    addWord,
    updateWord,
    deleteWord
  }
};

module.exports = resolvers;
```

### Configuring GraphQL to Work
Here's a detailed comment explaining each part of the provided code in English:

```javascript
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
            graphRef: 'word-store@apollo',
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
```

**Note:** To use the `Date` type in GraphQL schemas, we can use the `graphql-scalars` library.

```bash
npm i graphql-scalars
```

Add this code to the `app.js` file:
```javascript
// GraphQL
await useGraphQL(app);
```

Run the application:
```bash
npm run dev
```

See the full implementation in the code.

### References
- https://the-guild.dev/graphql/tools/docs/schema-merging)
- https://the-guild.dev/graphql/scalars/docs/quick-start)
