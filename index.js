// Import the MongoDB Node.js driver
const { MongoClient } = require('mongodb');

// Connection URI (Uniform Resource Identifier)
const uri = 'mongodb://localhost:27017'; // Change this URI according to your MongoDB setup

// Database Name
const dbName = 'your_database_name'; // Change this to your database name

// Function to connect to MongoDB
async function connectToMongoDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        console.log('Connected to MongoDB');

        // Access your database
        const db = client.db(dbName);

        // You can perform database operations here

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection when done
        await client.close();
    }
}

// Call the function to connect to MongoDB
connectToMongoDB();
