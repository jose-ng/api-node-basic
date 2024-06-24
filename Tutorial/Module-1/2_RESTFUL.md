# RESTful API

A **RESTful API** (Application Programming Interface) is a type of interface that follows the principles of REST (Representational State Transfer). REST is an architecture that uses web standards and protocols, such as HTTP, to enable communication between systems. RESTful APIs are widely used to build web services that interact with client applications, such as web and mobile apps.

### Key Principles of RESTful API

1. **Identifiable Resources**:
- In REST, everything (users, products, orders, etc.) is a resource. Each resource is uniqueidentified by a URL (Uniform Resource Locator).

2. **HTTP Methods**:
- RESTful APIs use standard HTTP methods to perform operations on resources:
- **GET**: Retrieve information about a resource.
- **POST**: Create a new resource.
- **PUT**: Update an existing resource.
- **DELETE**: Delete a resource.
- **PATCH**: Apply partial modifications to a resource.

3. **Resource Representations**:
- Resources can be represented in different formats, with JSON and XML being the most common. RESTful APIs typically use JSON due to its lightweight and easy-to-use nature.

4. **Stateless**:
- Each client request to the server must contain all the information needed to understand and process the request. The server should not store any state information between requests.

5. **Uniform Interface**:
- RESTful APIs should follow a uniform and consistent interface so that developers can predict how to interact with the API.

### Example of a RESTful API

A basic example of a RESTful API for managing users might have the following routes and methods:

### Benefits of a RESTful API

- **Scalability**: Allows handling multiple simultaneous requests efficiently.
- **Flexibility and Portability**: Resources can be accessed and manipulated from any platform that supports HTTP.
- **Simplicity**: The REST architecture is straightforward and easy to implement.
- **Interoperability**: Facilitates communication between different systems and technologies.

### Example of a RESTful API
A basic example of a RESTful API for managing users might have the following routes and methods:

- **GET** /users: Get a list of users.
- **POST** /users: Create a new user.
- **GET** /users/{id}: Get information about a specific user by their ID.
- **PATCH** /users/{id}: Update information about a specific user by their ID.
- **DELETE** /users/{id}: Delete a specific user by their ID.

## References

- https://aws.amazon.com/es/what-is/restful-api/
- https://www.freecodecamp.org/news/build-consume-and-document-a-rest-api/
- https://www.tutorialspoint.com/restful/index.htm