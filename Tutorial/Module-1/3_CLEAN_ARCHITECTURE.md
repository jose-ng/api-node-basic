_NOTE: For a better understanding of the code change the branch_ `git checkout module-1/part-2`

# Create structure 

We make sure to create a folder and file structure for our code, considering what best suits our needs. In this example, we'll use a clean Architecture that also provide robust solutions for organizing and maintaining code.

    /
    ├── config/
    ├── models/
    ├── routes/
    ├── services/
    └── utils/

## Clean Architecture

![alt text](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

Our clean architecture is structured in distinct layers, each with specific responsibilities.

1. **Entities Layer**:
   The innermost layer consists of core business entities such as products, users, and categories. This layer also includes other component libraries and objects that interact with external data sources, such as APIs or databases.

2. **Use Cases Layer**:
   This layer encompasses the business logic of the application. It contains all the services that define the operations and interactions within our business domain.

3. **Controllers Layer**:
   Controllers provide the interface to access our business logic and entities. This layer includes routing and middleware, acting as a bridge between the use cases and the external interfaces.

4. **External Applications Layer**:
   The outermost layer comprises applications and interfaces that interact with our services. These applications consume the services provided by the inner layers, making the system accessible to end-users or other systems.

By organizing our code in this manner, we ensure a clear separation of concerns, making our system more maintainable, scalable, and testable.

---

This improved version provides a clearer structure and highlights the benefits of using clean architecture principles.

### Create routes and services folders

For now whe are only adding routing and services. See the code.

**Note:** Config JSON for parsing application/json into _index.js_

```
app.use(express.json()); 
```


## References

- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

