_NOTE: For a better understanding of the code change the branch_ `git checkout module-1/part-2`

# Create structure 

We make sure to create a folder and file structure for our code, considering what best suits our needs. In this example, we'll use parts of a simpler structure principle like LIFT, which is typically used in frontend Angular applications but is beneficial for our case. There are other frameworks and architectures like Clean Architecture that also provide robust solutions for organizing and maintaining code.

    /
    ├── config/
    ├── models/
    ├── routes/
    ├── services/
    └── utils/

## LIFT

- **Locate your code quickly:** This principle emphasizes the importance of being able to quickly locate code within the project. It involves having a well-organized and coherent folder and file structure so that developers can easily find any component, service, module, or other resource in the project.

- **Identify the code at a glance:** This principle means that code should be easily identifiable at first glance in terms of its purpose and function. For example, file names, folders, and variable names should be descriptive and meaningful, making it easy to quickly understand what each part of the code does.

- **Flat structure as much as possible:** This principle encourages maintaining a flat folder structure and avoiding excessive nesting. A flatter structure makes navigation easier and reduces complexity in locating and managing files.

- **Try to stay DRY (Don't Repeat Yourself):** The DRY principle advocates for avoiding code duplication and promoting code reuse. In Angular, this can be achieved by using modules to encapsulate common functionalities, services for shared logic, and reusable components.

### Create routes and services folders

See the code.

**Note:** Config JSON for parsing application/json into _index.js_

```
app.use(express.json()); 
```


## References

- https://bguiz.github.io/js-standards/angularjs/application-structure-lift-principle/
- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

