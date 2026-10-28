//Zion Scott | IT302001 | Sept 27, 2026 | Unit 4 Exercise
require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const express = require('express');


const { MongoClient } = require('mongodb');

const app = express();

const port = 3000;
app.use(express.json());


// MongoDB connection URL (replace with your MongoDB connection string

// or an environment variable)

const mongoUrl = process.env.MONGO_DB_URI;


// Define a function to connect to MongoDB and return the database object

async function connectToMongo() {

  const client = new MongoClient(mongoUrl);


  try {

    await client.connect();

    return client.db('it302');

  } catch (error) {

    console.error('Error connecting to MongoDB:', error);

    throw error;

  }

}


// Route to get films from MongoDB and return them as JSON

app.get('/films_zds', async (req, res) => {

  try {

    const db = await connectToMongo();


    // Remove the filter query

    const query = {};


    // Use the query object to find all films

    const films_zds = await db.collection('films_zds').find(query).toArray();


    res.json(films_zds);

  } catch (error) {

    console.error(error.stack);

    res.status(500).json({ error: 'Error fetching films from the database' });

  }

});


// Route to get films from MongDB and handle filtering based on the "title" field

app.get('/films_title_zds', async (req, res) => {

  try {

    const db = await connectToMongo();

   

    // Get the "title" filter from the query parameters

    const propertyTypeFilter = req.query.title;


    // Define a query object based on the filter, or an empty query if no filter is provided

    const query = propertyTypeFilter ? { title: propertyTypeFilter } : {};


    // Use the query object to find films that match the filter

    const films_zds = await db.collection('films_zds').find(query).toArray();


    res.json(films_zds);

  } catch (error) {

    console.error(error.stack);

    res.status(500).json({ error: 'Error fetching filtered films from the database' });

  }

});


// Route to get films from MongoDB and handle filtering based on the "genre" field

app.get('/films_genre_zds', async (req, res) => {

  try {

    const db = await connectToMongo();


    // Get the "genre" filter from the query parameters

    const genreFilter = req.query.genre;


    // Define a query object based on the filter, or an empty query if no filter is provided

    const query = genreFilter ? { genre: genreFilter } : {};


    // Use the query object to find films that match the filter

    const films_zds = await db.collection('films_zds').find(query).toArray();


    res.json(films_zds);

  } catch (error) {

    console.error(error.stack);

    res.status(500).json({ error: 'Error fetching filtered films from the database' });

  }

});

// Unit 05 additions | September 30, 2026
// Route to create a new film in MongoDB
app.post('/films_zds', async (req, res) => {
  try {
    // Step 1: connect to MongoDB (returns the it302 database)
    const db = await connectToMongo();

    // Step 2: get the film fields from the request body
    const title = req.body.title;
    const year = req.body.year;
    const genre = req.body.genre;
    const actors = req.body.actors;
    const rating = req.body.rating; // optional

    const film = { title, year, genre, actors };
    if (rating !== undefined) film.rating = rating;

    // Step 3: insert the film into the films_zds collection
    const result = await db.collection('films_zds').insertOne(film);

    // Step 4: 201 if MongoDB acknowledged the insert, otherwise 500
    if (result.acknowledged) {
      res.status(201).json({ message: 'Film created successfully.' });
    } else {
      res.status(500).json({ error: 'Film could not be created.' });
    }
  } catch (error) {
    // Step 5: any error returns 500 with an error field
    console.error(error.stack);
    res.status(500).json({ error: 'Error creating film in the database' });
  }
});

// Route to delete a film from MongoDB by title
app.delete('/films_zds', async (req, res) => {
  try {
    // Step 1: connect to MongoDB (returns the it302 database)
    const db = await connectToMongo();

    // Step 2: get the film title from the request body
    const title = req.body.title;

    // Step 3: delete the film with that title from the films_zds collection
    const result = await db.collection('films_zds').deleteOne({ title: title });

    // Step 4: 200 if one film was deleted, otherwise 500
    if (result.deletedCount === 1) {
      res.status(200).json({ message: `Film "${title}" deleted successfully.` });
    } else {
      res.status(500).json({ error: `No film found with the title "${title}".` });
    }
  } catch (error) {
    // Step 5: any error returns 500 with an error field
    console.error(error.stack);
    res.status(500).json({ error: 'Error deleting film from the database' });
  }
});


// Start the server

app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}`);

});