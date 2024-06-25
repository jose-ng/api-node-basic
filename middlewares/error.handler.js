// Import the configuration settings
const { config } = require('../config');

/**
 * Formats the error response to include the stack trace if in development mode.
 * @param {string} error - The error message.
 * @param {string} stack - The stack trace of the error.
 * @returns {Object} - The formatted error response.
 */
function withErrorStack(error, stack) {
    if (config.dev)
        return { error, stack };
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