_NOTE: For a better understanding of the code change to the branch_ `git checkout module-2/part-3`

# Database Models

We create the database models in `models/db.schemas/user.js` and `models/db.schemas/word.js` for our application.

### Updating Services

We update the services in `services/user.service.js` and `services/word.service.js` to handle data manipulation using the Mongoose ODM within the database.

### Explanation and Extension

1. **Database Models**:
   - **User Model**: The `user.js` file will define the schema for user documents in the database. This schema will include fields such as username, email, password, and any other user-related information.
   - **Word Model**: The `word.js` file will define the schema for word documents. This schema might include fields such as the word itself, its definition, usage examples, and other relevant information.

2. **Updating Services**:
   - **User Service**: The `user.service.js` file will include functions to interact with the user model, such as creating a new user, finding a user by ID or username, updating user information, and deleting a user.
   - **Word Service**: The `word.service.js` file will include functions to interact with the word model, such as adding a new word, retrieving a list of words, updating word definitions, and deleting a word.

By organizing our code into models and services, we follow a clean architecture pattern that separates the data structure definitions from the business logic, making our API more maintainable and scalable.

## API request client collection

You can find it in `Tutorial/Collections/thunder-collection_dictionary_db.json`

## References

- https://mongoosejs.com/docs/queries.html