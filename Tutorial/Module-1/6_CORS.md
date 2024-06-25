_NOTE: For a better understanding of the code change to the branch_ `git checkout module-1/part-4`

# Understanding CORS

CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to prevent malicious websites from making unauthorized requests to a different domain than the one that served the original web page. It controls how resources on a web server are shared with web pages from different origins (domains).

#### The CORS Problem
By default, web browsers enforce the same-origin policy, which restricts web pages from making requests to a different domain than the one that served the web page. This can cause issues when you need to allow your web application to access resources from a different domain. For example, if you have a frontend application hosted on `http://frontend.com` and it needs to make API calls to `http://api.backend.com`, the browser will block these requests due to CORS policy.

#### Resolving CORS Issues in Express.js

To resolve CORS issues in an Express.js application, you can use the `cors` middleware package. This package allows you to specify which domains are permitted to access your resources.

#### Step-by-Step Solution:

1. **Install the `cors` package**:
   ```sh
   npm install cors
   ```

2. **Use the `cors` middleware in your Express application**:
   ```javascript
   const express = require('express');
   const cors = require('cors');

   const app = express();

   // Use the CORS middleware
   app.use(cors());

   // Define your routes
   app.get('/example', (req, res) => {
     res.json({ message: 'This is an example route' });
   });

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

3. **Customizing CORS settings**:
   - You can customize the CORS settings to allow only specific origins, methods, or headers. Here is an example of how to configure CORS to allow requests only from `http://frontend.com`:
   ```javascript
   const corsOptions = {
     origin: 'http://frontend.com', // Allow only this origin
     methods: 'GET,POST', // Allow only these HTTP methods
     allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
   };

   app.use(cors(corsOptions));
   ```

### Summary

- **CORS** is a mechanism that allows web servers to specify who can access their resources.
- The **same-origin policy** enforced by browsers can cause issues when making requests to a different domain.
- Using the `cors` middleware in an Express.js application allows you to configure and enable CORS, specifying which domains, methods, and headers are permitted.

## Implemetation

See the code.

### References:

- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- https://aws.amazon.com/what-is/cross-origin-resource-sharing