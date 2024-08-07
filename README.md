# Overview

In this tutorial, you'll learn how to build a powerful backend for your application using Node.js, Express.js, GraphQL, Passport.js, and jsonwebtoken (JWT). We are setting up a robust API that forms the backbone of any modern web or mobile application. This stack allows us to create efficient, scalable, and maintainable server-side applications.

We'll start by setting up our development environment with Node.js and Express.js, creating the foundation of our server. Next, we'll integrate Passport.js and JWT to implement secure authentication mechanisms, ensuring our API endpoints are protected from unauthorized access. Finally, we'll introduce GraphQL to enhance our data querying capabilities, providing a flexible and efficient alternative to traditional REST endpoints.

By the end of this tutorial, you'll have a comprehensive understanding of how to develop a secure and high-performance backend for your app.

The API is for a dictionary app as example.

## Features

- User Authentication: Secure user authentication using Passport.js and JWT.
- GraphQL API: Powerful and flexible data querying and mutation with GraphQL.
- Role-Based Access Control: Manage different user roles and permissions.
- RESTful Endpoints: Additional endpoints for traditional REST API interactions and GraphQL for flexible data querying.
- Error Handling: Comprehensive error handling for better developer experience.
- Scalable Architecture: Modular and scalable codebase for future expansion.
- NoSQL: Database Mongo.db/Mongoose to stores data in flexible, JSON-like documents.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine:

- Recommended version: 18.x or 20.x (LTS)

#### Important

- Basic knowledge of Node.js, Express.js and API Rest

### Installation

- **Fork** the repository: https://github.com/jose-ng/api-node-basic.git

### Install dependencies:

```
npm install
```

### Running the Server

```
npm start
```

# Tutorial

## Table of contents

_Note: Each module or section will be in a branch_

1. [Module 1](Tutorial/Module-1)
    1. [Express basic concepts](Tutorial/Module-1/1_EXPRESS.md) `git checkout module-1/part-1`
    2. [RESTful API concepts](Tutorial/Module-1/2_RESTFUL.md) `git checkout module-1/part-1`
    3. [Project structure](Tutorial/Module-1/3_CLEAN_ARCHITECTURE.md) `git checkout module-1/part-2`
    4. [CRUD](Tutorial/Module-1/4_CRUD.md) `git checkout module-1/part-3`
    5. [Middlewares](Tutorial/Module-1/5_MIDDLEWARES.md) `git checkout module-1/part-3`
    6. [CORS](Tutorial/Module-1/6_CORS.md) `git checkout module-1/part-4`
2. [Module 2](Tutorial/Module-2)
    1. [Install MongoDB](Tutorial/Module-2/1_INSTALL_MONGODB.md) `git checkout module-2/part-1`
    2. [Connection to a data base](Tutorial/Module-2/2_CONNECT_TO_DB.md) `git checkout module-2/part-1`
    3. [Add connection to our project](Tutorial/Module-2/3_CONFIGURE_CONNECTION.md) `git checkout module-2/part-2`
    4. [Add data base schemas and update the services](Tutorial/Module-2/4_DATA_BASE_SCHEMAS.md) `git checkout module-2/part-3`
3. [Module 3](Tutorial/Module-3)
    1. [GraphQL](Tutorial/Module-3/1_GRAPHQL.md) `git checkout module-3/part-1`
    2. [GraphQL implementation](Tutorial/Module-3/2_GRAPHQL_IMPLEMENTATION.md) `git checkout module-3/part-2`

# TODO

- **Add request object schema validation**
- **Add HTTP-friendly error objects handler**
- **Add authentication and authorization**




