
# Movie API - README #
Welcome to the Movie API! This is an open-source RESTful API built with Node.js, Express, and MongoDB. The API provides an easy way to fetch information about movies, including searching by movie name, language, and retrieving a list of all available movies.

# Features
Search by Movie Name: Retrieve detailed information about a specific movie.
Search by Language: Find movies based on their language, such as Hindi or English.
Get All Movies: Retrieve a complete list of all available movies in a random order.
Getting Started
Prerequisites
Before you can use the API, make sure you have the following installed:

Node.js
MongoDB
# Installation

# Clone the repository:
git clone https://github.com/yourusername/movie-api.git

# Navigate to the project directory:
cd movie-api

# Install the dependencies:
npm i

# Set up your MongoDB database and update the connection string in the .env file.
Start the server:
npm start

# API Endpoints
1. # Get Movie by Name #
Endpoint: /movie/:moviename
Method: GET
Description: Fetch details of a movie by its name.
Example: http://localhost:3000/movie/inception
2. Get Movies by Language
Endpoint: /language/:language
Method: GET
Description: Retrieve movies based on the specified language.
Example: http://localhost:3000/language/hindi
3. Get All Movies
Endpoint: /random
Method: GET
Description: Retrieve a list of all available movies in random order.
Example: http://localhost:3000/random
# How to Use
Copy the public link of the API or run it locally.
To find a specific movie, use /movie/moviename.
To find movies based on language, use /language/hindi or /language/english.
To get all the movies, simply use /.
# Contributing
Contributions are welcome! If you have any ideas or find any bugs, feel free to open an issue or submit a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Contact
If you have any questions or need further assistance, feel free to contact me via email at youremail@example.com.
