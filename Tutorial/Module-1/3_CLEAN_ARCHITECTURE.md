_NOTE: For a better understanding of the code change the branch_ `git checkout module-1/part-2`

# Clean Architecture

![alt text](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

Clean Architecture is a software design philosophy that aims to create a system structure that is both maintainable and scalable. It was introduced by Robert C. Martin (also known as Uncle Bob) and emphasizes separating the software into layers with clear boundaries. The core idea is to make the codebase more understandable, testable, and independent of frameworks, databases, or any external agencies.

## Key Principles:

1. **Separation of Concerns:** Different aspects of the application are separated into distinct layers, such as presentation, business logic, and data access.
2. **Independence:** The core logic of the application does not depend on the external layers, making it easier to change frameworks or databases without affecting the core.
3. **Testability:** By isolating components, Clean Architecture makes it easier to write unit tests for the core logic.
4. **Maintainability:** The modular structure allows for easier updates and modifications.

## Typical Layers:

1. **Entities Layer**:
The innermost layer consists of core business entities such as products, users, and categories. This layer also includes other component libraries and objects that interact with external data sources, such as APIs or databases.

2. **Use Cases Layer**:
This layer encompasses the business logic of the application. It contains all the services that define the operations and interactions within our business domain.

3. **Controllers Layer**:
Controllers provide the interface to access our business logic and entities. This layer includes routing and middleware, acting as a bridge between the use cases and the external interfaces.

4. **External Applications Layer**:
The outermost layer comprises applications and interfaces that interact with our services. These applications consume the services provided by the inner layers, making the system accessible to end-users or other systems.

By adhering to these principles, Clean Architecture aims to create a flexible, scalable, and maintainable software system.

## Create structure 

Our clean architecture is structured in distinct layers that provide robust solutions for organizing and maintaining code.

    /
    ├── config/
    ├── models/
    ├── routes/
    ├── services/
    └── utils/


Our clean architecture is structured in distinct layers, each with specific responsibilities.

By organizing our code in this manner, we ensure a clear separation of concerns, making our system more maintainable, scalable, and testable.


### Create routes and services folders

For now whe are only adding routing and services. See the code.

**Note:** Config JSON for parsing application/json into _index.js_

```
app.use(express.json()); 
```


## References

- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
