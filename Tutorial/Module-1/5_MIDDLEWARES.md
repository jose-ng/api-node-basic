_NOTE: For a better understanding of the code change to the branch_ `git checkout module-1/part-3`

# Understanding Middleware in Node.js and Express

Middleware functions in Express.js are integral components that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. Middleware functions can perform a variety of tasks, including:

- Executing any code.
- Making changes to the request and response objects.
- Validating or authenticating requests.
- Calling the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will remain unprocessed.

### Example of Error Handling Middleware

Error handling middleware is designed to manage errors that occur within an Express.js application. It provides detailed error messages and stack traces in development mode to aid in debugging while limiting the information exposed in production mode.

#### `withErrorStack` Function:

**Purpose**: Formats the error response to include the stack trace if the application is running in development mode.

- **Parameters**:
  - `error`: The error message.
  - `stack`: The stack trace of the error.
- **Returns**:
  - An object containing both the error message and stack trace if in development mode (`config.dev` is true).
  - Only the error message if not in development mode.

#### `errorHandler` Function:

**Purpose**: Handles sending the error response to the client.

- **Parameters**:
  - `err`: The error object.
  - `req`: The request object.
  - `res`: The response object.
  - `next`: The next middleware function (not used in this case).
- **Behavior**:
  - Sets the response status code to the error status or 500 if not specified.
  - Sends a JSON response containing the error message and, if in development mode, the stack trace by using the `withErrorStack` function.

### Example Usage:

This middleware is typically used at the end of your middleware stack in an Express application to catch and handle errors that occur during the request-response cycle.

### Commented Code:

```javascript
const { config } = require('../config');

/**
 * Formats the error response to include the stack trace if in development mode.
 * @param {string} error - The error message.
 * @param {string} stack - The stack trace of the error.
 * @returns {Object} - The formatted error response.
 */
function withErrorStack(error, stack) {
    if (config.dev) {
        return { error, stack };
    }
    return error;
}

/**
 * Error handling middleware function.
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function (not used in this case).
 */
function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
    errorHandler
};
```

### Summary:

- **withErrorStack**: Enhances error messages with stack traces in development mode to aid debugging.
- **errorHandler**: Standardizes the error response format and ensures that appropriate HTTP status codes are sent, providing necessary information to the client while preventing sensitive information leakage in production.

### Implementation

Don't forget to add the middleware to your Express application in `index.js`:

```javascript
const { errorHandler } = require('./middlewares/errorHandlers');

app.use(errorHandler);
```

### References:

- https://expressjs.com/en/guide/using-middleware.html