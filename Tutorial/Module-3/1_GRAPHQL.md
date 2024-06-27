_NOTE: For a better understanding of the code change to the branch_ `git checkout module-3/part-1`

# GraphQL

## Introduction

GraphQL is an open source server-side technology which was developed by Facebook to optimize RESTful API calls. It is an execution engine and a data query language. In this chapter, we discuss about the advantages of using GraphQL.

GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn’t tied to any specific database or storage engine and is instead backed by your existing code and data.

## Why GraphQL

RESTful APIs follow clear and well-structured resource-oriented approach. However, when the data gets more complex, the routes get longer. Sometimes it is not possible to fetch data with a single request. This is where GraphQL comes handy. GraphQL structures data in the form of a graph with its powerful query syntax for traversing, retrieving, and modifying data.

### Ask for what you want and get it

Send a GraphQL query to your API and get exactly what you need. GraphQL queries always return predictable results. Applications using GraphQL are fast and stable. Unlike Restful services, these applications can restrict data that should be fetched from the server.

The following example will help you understand this better:

Let us consider a business object Student with the attributes id, firstName, lastName and collegeName. Suppose a mobile application needs to fetch only the firstName and id. If we design a REST endpoint like /api/v1/students, it will end up fetching data for all the fields for a student object. This means, data is over fetched by the RESTful service. This problem can be solved by using GraphQL.

Consider the GraphQL query given below

```javascript
{
   students {
      id
      firstName
   }
}
```

This will return values only for the id and firstname fields. The query will not fetch values for other attributes of the student object. The response of the query illustrated above is as shown below

```javascript
{
   "data": {
      "students": [
         {
            "id": "S1001",
            "firstName": "Mohtashim"
         },
         {
            "id": "S1002",
            "firstName": "Kannan"
         }
      ]
   }
}
```

### Get many resources in a single request

GraphQL queries help to smoothly retrieve associated business objects, while typical REST APIs require loading from multiple URLs. GraphQL APIs fetch all the data your application need in a single request. Applications using GraphQL can be quick even on slow mobile network connections.

Let us consider one more business object, College which has the attributes: name and location. The Student business object has an association relationship with the College object. If we were to use a REST API in order to fetch the details of students and their college, we will end up making two requests to the server like /api/v1/students and /api/v1/colleges. This will lead to under fetching of data with each request. So mobile applications are forced to make multiple calls to the server to get the desired data.

However, the mobile application can fetch details for both Student and College objects in a single request by using GraphQL.

The following is a GraphQL query to fetch data

```javascript
{
   students{
      id
      firstName
      lastName
      college{
         name
         location
      }
   }
}
```

The output of the above query contains exactly those fields we have requested for as shown below

```javascript
{
   "data": {
      "students": [
         {
            "id": "S1001",
            "firstName": "Mohtashim",
            "lastName": "Mohammad",
            "college": {
               "name": "CUSAT",
               "location": "Kerala"
            }
         },
         
         {
            "id": "S1002",
            "firstName": "Kannan",
            "lastName": "Sudhakaran",
            "college": {
               "name": "AMU",
               "location": "Uttar Pradesh"
            }
         },
         
         {
            "id": "S1003",
            "firstName": "Kiran",
            "lastName": "Panigrahi",
            "college": {
               "name": "AMU",
               "location": "Uttar Pradesh"
            }
         }
      ]
   }
}
```

To achieve this result it is important to understand the following concepts.

## Type Definitions (typeDefs)

GraphQL is strongly typed and the queries are based on fields and their associated data types. If there is type mismatch in a GraphQL query, server applications return clear and helpful error messages. This helps in smooth debugging and easy detection of bugs by client applications.

Type definitions define the structure of the GraphQL schema. They include types, queries, mutations, and their respective fields. Essentially, this is the "contract" specifying what operations are available and what data can be queried or modified.

### Queries in TypeDefs

In GraphQL, queries are used to read or fetch data from the server. In the type definitions (typedefs), a `Query` type is defined to specify the available read operations. Each field within the `Query` type represents a different endpoint that can be queried by clients. These fields determine the shape and return type of the data that can be requested.

### Mutations in TypeDefs

Mutations in GraphQL are used to modify data on the server, such as creating, updating, or deleting data. In typedefs, a `Mutation` type is defined to specify the available write operations. Each field within the `Mutation` type represents an operation that can change the state of data on the server. These fields determine the input parameters required for the mutation and the return type of the operation.

### Custom Types and Inputs

Custom object types define the shape of the data in your schema, specifying what fields an object has and their types. Input types are used to structure input data for mutations and queries, encapsulating all necessary parameters in a single object. This modular approach allows for a clear and organized schema, facilitating efficient and accurate data manipulation.

Continuing with our application, we need type definitions for every entity in our application, depending on our needs. Here is an example of a types definition.

```graphql
const typeDefs = gql`
  type Query {
    getUser(id: ID!): User
    listUsers: [User]
  }

  type Mutation {
    createUser(dto: AddUserDto!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): Boolean
  }

  # custom types
  type User {
    id: ID!
    name: String
    email: String
  }

  input AddUserDto {
    name: String!
    email: String!
  }  
  # custom types
`;
```

#### Resolvers

Resolvers are functions that provide the logic to obtain the data defined in the type definitions. When a query or mutation is executed, resolvers "resolve" the request by performing the necessary logic to return data or make changes.

```javascript
const users = [];

const resolvers = {
  Query: {
    getUser: (parent, { id }) => userService.GetUser(id),
    listUsers: (parent) => userService.getAllUsers(),
  },
  Mutation: {
    createUser: (parent, { dto }) => {
      return userService.create(dto);
    },
    updateUser: (parent, { id, data }) => {
      return userService.update(id, data);
    },
    deleteUser: (parent, { id }) => {
      return userService.delete(id);
    },
  },
};
```

In this example:

- `typeDefs` define the `User` type, the queries `getUser` and `listUsers`, and the mutations `createUser`, `updateUser`, and `deleteUser`.
- `resolvers` provide the logic to handle these queries and mutations, interacting with an in-memory list of users.

### Type System

GraphQL includes a set of built-in scalar types ready to use:

- `Int`: A signed 32-bit integer.
- `Float`: A signed double-precision floating-point value.
- `String`: A UTF-8 character sequence.
- `Boolean`: `true` or `false`.
- `ID`: Represents a unique identifier, often used to fetch an object or as a key for a cache. It serializes in the same way as a string but indicates that it is not meant to be human-readable.

### Nullability and Lists in GraphQL

In GraphQL, you don't define a new type when you want to return a list of items from a field; you simply apply a list modifier to that type. For example:

```graphql
type ObjectType {
  singleRestaurant: Restaurant
  multipleRestaurants: [Restaurant]
}
```

Non-null is also a modifier, and you can apply list and non-null modifiers in an arbitrarily nested manner, especially since lists can be nested:

```graphql
type ObjectType {
  first: Restaurant
  second: [Restaurant]
  third: [Restaurant!]
  fourth: [Restaurant!]!
  fifth: [[Restaurant!]]!
}
```

So, what does it mean to have non-null inside or outside a list? It decides whether the non-null applies to the list element versus the list itself.

For example, you can have a list of non-null strings:

```graphql
drinkSizes: [String!]
```

This means the list itself can be null, but it cannot have any null members. For example, in JSON:

```json
drinkSizes: null // valid
drinkSizes: [] // valid
drinkSizes: ["small", "large"] // valid
drinkSizes: ["small", null, "large"] // error
```

Now, let's define a list of nullable strings:

```graphql
drinkSizes: [String]!
```

This means the list itself cannot be null, but it can contain null values:

```json
drinkSizes: null // error
drinkSizes: [] // valid
drinkSizes: ["small", "large"] // valid
drinkSizes: ["small", null, "large"] // valid
```

Finally, we can combine the two:

```graphql
drinkSizes: [String!]!
```

This is the most restrictive:

```json
drinkSizes: null // error
drinkSizes: [] // valid
drinkSizes: ["small", "large"] // valid
drinkSizes: ["small", null, "large"] // error
```

An interesting conclusion here is that there is no way to specify that the list cannot be empty: an empty list (`[]`) is always valid, regardless of whether the list or the items are non-null.

## Apollo Server

Apollo Server is a standalone, spec-compliant GraphQL server. It works independently of any web framework and is designed to be as easy to set up as possible. Here are some key points:

- **Framework Agnostic**: Apollo Server can be used without relying on any specific web framework.
- **Simplicity**: It is often used for simple setups or for microservices where a minimal setup is beneficial.
- **Built-in GraphQL Playground**: Apollo Server includes a built-in playground for testing queries.
- **Latest Version**: @apollo/server is the latest and most modular version of Apollo Server.
- **Modularity**: It is designed to be more modular, allowing for easier and more flexible integration with various libraries and frameworks.
- **Separation of Responsibilities**: Instead of including everything in a single package, @apollo/server focuses on the core Apollo server and integrates with other specific packages for different needs, such as @apollo/server/express for Express.
- **Compatibility**: It offers better compatibility and maintenance, adhering to the latest practices and updates from the GraphQL community.

## A basic example

First install apollo server and graphql in our existing project

```bash
npm i graphql @apollo/server graphql-tag
```

Add `graphQL/index.js` and put this code

```javascript
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const gql = require('graphql-tag');

// Define GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define resolvers for the schema
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Create a new Apollo Server instance with the schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Start the Apollo Server and apply its middleware to the Express application
server.start().then(() => {
  app.use(expressMiddleware(server));
  
  // Start the server and listen on port 4000
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
});
```

### Explanation:
1. **Importing Modules**:
   ```javascript
   const express = require('express');
   const { ApolloServer } = require('@apollo/server');
   const { expressMiddleware } = require('@apollo/server/express4');
   const gql = require('graphql-tag');
   ```
   - `express`: This module is used to create a web server.
   - `ApolloServer`: This is the Apollo Server class for creating a GraphQL server.
   - `expressMiddleware`: This function connects Apollo Server to an Express application.
   - `gql`: This is a template literal tag for writing GraphQL queries.

2. **Defining the GraphQL Schema**:
   ```javascript
   const typeDefs = gql`
     type Query {
       hello: String
     }
   `;
   ```
   - Defines a simple GraphQL schema with one query, `hello`, which returns a `String`.

3. **Defining the Resolvers**:
   ```javascript
   const resolvers = {
     Query: {
       hello: () => 'Hello world!',
     },
   };
   ```
   - Provides the resolver function for the `hello` query, which returns the string `'Hello world!'`.

4. **Creating the Apollo Server**:
   ```javascript
   const server = new ApolloServer({ typeDefs, resolvers });
   ```
   - Creates a new instance of Apollo Server using the schema (`typeDefs`) and the resolvers.

5. **Setting Up the Express Application**:
   ```javascript
   const app = express();
   app.use(express.json());
   ```
   - Creates an Express application and uses `express.json()` middleware to parse JSON requests.

6. **Starting the Apollo Server and Applying Middleware**:
   ```javascript
   server.start().then(() => {
     app.use(expressMiddleware(server));
     app.listen({ port: 4000 }, () => {
       console.log(`🚀 Server ready at http://localhost:4000/graphql`);
     });
   });
   ```
   - Starts the Apollo Server.
   - Applies the Apollo Server middleware to the Express application.
   - Starts the Express server on port 4000 and logs a message indicating that the server is running.

This code sets up a simple GraphQL server using Apollo Server and Express, allowing clients to query the `hello` field at the `/graphql` endpoint, which responds with the string `'Hello world!'`.

Run it 

```bash
node graphQL/index.js
```

## References

- https://www.tutorialspoint.com/graphql/index.htm
- https://graphql.org/learn/