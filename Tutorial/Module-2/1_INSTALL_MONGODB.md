_NOTE: For a better understanding of the code change to the branch_ `git checkout module-2/part-1`

### What is MongoDB?

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability, performance, and high availability, making it a popular choice for modern web applications. Unlike traditional relational databases, MongoDB does not use tables and rows but collections and documents, allowing for a more dynamic and schema-less data structure.

### Key Features:
- **Flexible Schema**: Allows you to store different types of data in the same collection.
- **Scalability**: Built to scale out across many servers.
- **High Performance**: Optimized for read and write operations.
- **Replication and High Availability**: Supports automatic failover and data redundancy.

### How to Install MongoDB on Windows

#### Step-by-Step Installation Guide:

1. **Download MongoDB**:
   - Go to the [MongoDB Download Center](https://www.mongodb.com/try/download/community).
   - Select the version appropriate for your Windows operating system and click "Download."

2. **Run the Installer**:
   - Locate the downloaded `.msi` installer file and double-click to run it.
   - Follow the prompts in the setup wizard taking. Choose "Complete" when prompted to select the setup type.

3. **Configure the Service**:
   - During installation, ensure that the "Install MongoDB as a Service" option is checked.
   - Set the data directory (where your database files will be stored) and the log directory.

4. **Finish the Installation**:
   - Complete the installation process by clicking "Install."
   - Once the installation is complete, MongoDB will be set up as a service and will start automatically.

5. **Add MongoDB to the System Path**:
   - Open the Start Menu, search for "Environment Variables," and select "Edit the system environment variables."
   - In the System Properties window, click on the "Environment Variables" button.
   - Under "System variables," find the `Path` variable, select it, and click "Edit."
   - Click "New" and add the path to the MongoDB `bin` directory (e.g., `C:\Program Files\MongoDB\Server\x.0\bin`).

6. **Verify the Installation**:
   - Open a Command Prompt and type `mongod --version` to verify that MongoDB is installed and added to the path correctly.

7. **Start the MongoDB Server**:
   - Open a Command Prompt and type `mongod` to start the MongoDB server.
   - Alternatively, MongoDB can also be started as a Windows service, which will run automatically on system startup.

### Example Commands:

- **Start MongoDB**:
  ```sh
  mongod
  ```

- **Open MongoDB Shell**:
  ```sh
  mongo
  ```

# How to Connect to a Local MongoDB Database Using MongoDB Compass

MongoDB Compass is a graphical user interface (GUI) for MongoDB that allows you to visualize and interact with your MongoDB data.

#### Step-by-Step Guide:

1. **Download and Install MongoDB Compass**:
   - Go to the [MongoDB Compass Download Center](https://www.mongodb.com/try/download/compass).
   - Download the version appropriate for your operating system and follow the installation instructions.

2. **Open MongoDB Compass**:
   - Launch MongoDB Compass from your applications menu or start menu.

3. **Connect to Local MongoDB**:
   - When MongoDB Compass opens, you will see the "Connect" screen.
   - In the "Connection String" field, enter the connection string for your local MongoDB server:
     ```
     mongodb://localhost:27017
     ```
   - This connection string specifies that you are connecting to a MongoDB server running on `localhost` (your local machine) on the default port `27017`.

4. **Click "Connect"**:
   - Click the "Connect" button to establish a connection to your local MongoDB database.

### Summary:

- **Download and install** MongoDB Compass from the official website.
- **Launch** MongoDB Compass.
- **Enter the connection string** `mongodb://localhost:27017` to connect to your local MongoDB server.
- **Click "Connect"** and start exploring your database.

MongoDB Compass provides an intuitive and user-friendly interface to work with your MongoDB data, making it easier to manage and analyze your data visually.

This guide should help you get MongoDB up and running on your Windows machine, be sure to use the corresponding version for your operating system.

### References:

- https://www.mongodb.com/