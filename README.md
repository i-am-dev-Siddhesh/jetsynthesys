## Prerequisites for Setting Up and Running the Project

### Tools and Software

1. **Node.js and npm**:
   - Ensure you have Node.js installed. You can download it from the [Node.js website](https://nodejs.org/).
   - npm (Node Package Manager) comes bundled with Node.js.

2. **MongoDB**:
   - Install MongoDB on your local machine or use a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
   - Ensure MongoDB is running.


### Environment Setup

1. **Environment Variables**:
   - Create a `.env` file in your project root directory to store your environment variables. At a minimum, you'll need:
     ```
     PORT=8000
     MONGODB_URI=mongodb://localhost:27017/your_database_name or cloud hosted mongodb url.
     API_KEY=your_api_key
     ```

### Basic Knowledge

1. **JavaScript and Node.js**:
   - Basic understanding of JavaScript and Node.js to modify and run the server code.

2. **Express Framework**:
   - Familiarity with Express.js to understand the structure of the API.

3. **MongoDB and Mongoose**:
   - Basic knowledge of MongoDB and Mongoose for database operations.

## Instructions to Set Up and Run the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd jetsynthesys-service
   ```


   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the project root and add the required environment variables (as described above).


## How to Set Up and Run the JetSynthesys Project Locally

1. Clone the repository:

```bash
git clone https://github.com/i-am-dev-Siddhesh/jetsynthesys.git
```

2. Navigate to the project directory:

```bash
cd jetsynthesys
```

3. Install dependencies:

```bash
npm install or yarn add
```

4. Create a `.env` file in the project root and add the required environment variables mentioned in .env.example file.

5. Build the TypeScript files:

```bash
npm run build or yarn build
```

6. Start the server:

```bash
npm start or yarn start
```
7. Start the server In Development mode:

```bash
npm run dev or yarn dev
```
## How to Run the Tests

1. Ensure that the project dependencies are installed:

```bash
npm install or yarn add
```

2. Run the tests:

```bash
npm test or yarn test
```

---

**Movie API**

This document describes the functionalities and usage of the movie API. Postman Docs( https://documenter.getpostman.com/view/12163709/2sA3QwcA8b ).

**Base URL and Authentication:**

* Base URL: `http://localhost:8000/v1` (all API endpoints are prefixed with this base URL)
* Authentication: The API requires a valid API key in the `x-api-key` header for all requests. Replace `YOUR_VALID_API_KEY` with your actual key in the code example below.

**Supported Operations:**

* **POST /v1/movies:** Creates a new movie.
    * **Request Headers:**
        * `Content-Type: application/json`
        * `x-api-key: YOUR_VALID_API_KEY`
    * **Request Body:**
        * `title` (string): The title of the movie (required).
        * `director` (string): The director of the movie.
        * `releaseDate` (string): The release date of the movie in YYYY-MM-DD format (optional).
        * `genre` (string): The genre of the movie (optional).
        * `rating` (number): The rating of the movie (between 1 and 10, optional).
    * **Response:**
        * On success, returns a JSON object representing the newly created movie, including its generated ID.
        * On failure, returns an error message in JSON format (e.g., `{"error": "Title is required"}`).

* **GET /v1/movies:** Retrieves a list of all movies.
    * **Request Headers:**
        * `x-api-key: YOUR_VALID_API_KEY`
    * **Response:**
        * On success, returns a JSON array containing objects representing all movies in the collection. Each object includes the movie's ID, title, director, release date (if provided), genre (if provided), and rating (if provided).
        * On failure, returns an error message in JSON format.

* **GET /v1/movies/:movieId:** Retrieves a single movie by its ID.
    * **Request Headers:**
        * `x-api-key: YOUR_VALID_API_KEY`
    * **Path Parameter:**
        * `:id` (string): The unique identifier of the movie to retrieve.
    * **Response:**
        * On success, returns a JSON object representing the movie with the specified ID.
        * If no movie is found with the given ID, returns a 404 Not Found error with an appropriate message.
        * On failure, returns an error message in JSON format.

* **PUT /v1/movies/:movieId:** Updates an existing movie by its ID.
    * **Request Headers:**
        * `Content-Type: application/json`
        * `x-api-key: YOUR_VALID_API_KEY`
    * **Path Parameter:**
        * `:id` (string): The unique identifier of the movie to update.
    * **Request Body:**
        * Can include any subset of the movie fields to be updated (title, director, releaseDate, genre, rating).
    * **Response:**
        * On success, returns a JSON object representing the updated movie.
        * If no movie is found with the given ID, returns a 404 Not Found error with an appropriate message.
        * On failure, returns an error message in JSON format.

* **DELETE /v1/movies/:movieId:** Deletes a movie by its ID.
    * **Request Headers:**
        * `x-api-key: YOUR_VALID_API_KEY`
    * **Path Parameter:**
        * `:id` (string): The unique identifier of the movie to delete.
    * **Response:**
        * On success, returns a JSON object with a message (e.g., `{"message": "Movie deleted successfully"}`).
        * If no movie is found with the given ID, returns a 404 Not Found error with an appropriate message.
        * On failure, returns an error message in JSON format.
