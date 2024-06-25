_NOTE: For a better understanding of the code change to the branch_ `git checkout module-1/part-3`

# CRUD 

A CRUD in a REST API refers to the basic operations needed to create, read, update, and delete data in a database. Each letter in CRUD stands for one of these operations:

- **Create**: Adds new records to the database.
- **Read**: Retrieves records from the database.
- **Update**: Modifies existing records in the database.
- **Delete**: Removes records from the database.

These operations are fundamental for managing data in most applications and are typically exposed through RESTful endpoints in a Node.js API. For example:

- `POST /items` for creating a new item.
- `GET /items` and `GET /items/:id` for reading all items or a specific item.
- `PUT /items/:id` for updating an existing item.
- `DELETE /items/:id` for deleting an item.

## Implementation

See the code.

## References 

- https://www.codecademy.com/article/what-is-crud