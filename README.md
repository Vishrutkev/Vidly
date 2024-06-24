# Video Rental Application Backend

This project is a video rental application backend built using Node.js, Express, and MongoDB. The application allows an admin to perform CRUD (Create, Read, Update, Delete) operations on customers, genres, movies, rentals, and users. Postman is used for API testing and documentation. The project includes various middleware for authentication using JWT, data validation, and other functionalities. Jest is used for unit, integration, and TDD tests. The code is organized to minimize duplication and ensure robustness and scalability.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Customers](#customers)
  - [Genres](#genres)
  - [Movies](#movies)
  - [Rentals](#rentals)
  - [Users](#users)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Vishrutkev/Vidly.git
    cd Vidly
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    MONGODB_URL=your-mongodb-url
    PORT=your-port
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

## Usage

Use Postman to interact with the API. The base URL is `http://localhost:your-port/`.

## API Endpoints

### Customers

- **Get all customers**

    ```http
    GET /api/customers
    ```

- **Get a customer by ID**

    ```http
    GET /api/customers/:id
    ```

- **Create a new customer**

    ```http
    POST /api/customers
    ```

    **Body:**

    ```json
    {
      "name": "Customer Name",
      "isGold": true,
      "phone": "1234567890"
    }
    ```

- **Update a customer**

    ```http
    PUT /api/customers/:id
    ```

    **Body:**

    ```json
    {
      "name": "Updated Name",
      "isGold": false,
      "phone": "0987654321"
    }
    ```

- **Delete a customer**

    ```http
    DELETE /api/customers/:id
    ```

### Genres

- **Get all genres**

    ```http
    GET /api/genres
    ```

- **Get a genre by ID**

    ```http
    GET /api/genres/:id
    ```

- **Create a new genre**

    ```http
    POST /api/genres
    ```

    **Body:**

    ```json
    {
      "name": "Genre Name"
    }
    ```

- **Update a genre**

    ```http
    PUT /api/genres/:id
    ```

    **Body:**

    ```json
    {
      "name": "Updated Genre Name"
    }
    ```

- **Delete a genre**

    ```http
    DELETE /api/genres/:id
    ```

### Movies

- **Get all movie**

    ```http
    GET /api/movies
    ```

- **Get a movie by ID**

    ```http
    GET /api/movies/:id
    ```

- **Create a new movie**

    ```http
    POST /api/movies
    ```

    **Body:**

    ```json
    {
      "title": "Movie Title",
      "genreId": "Genre ID",
      "numberInStock": 10,
      "dailyRentalRate": 2
    }
    ```

- **Update a movie**

    ```http
    PUT /api/movies/:id
    ```

    **Body:**

    ```json
    {
      "title": "Updated Movie Title",
      "genreId": "Updated Genre ID",
      "numberInStock": 15,
      "dailyRentalRate": 3
    }
    ```

- **Delete a movie**

    ```http
    DELETE /api/movies/:id
    ```

### Rentals

- **Get all rentals**

    ```http
    GET /api/rentals
    ```

- **Get a rental by ID**

    ```http
    GET /api/rentals/:id
    ```

- **Create a new rental**

    ```http
    POST /api/rentals
    ```

    **Body:**

    ```json
    {
      "customerId": "Customer ID",
      "movieId": "Movie ID"
    }
    ```

- **Update a rental**

  - All the calculations of the other properties within the rental object will get calculated at the server level.

    ```http
    PUT /api/returns/:id
    ```

    **Body:**

    ```json
    {
      "customerId": "Customer ID",
      "movieId": "Movie ID"
    }
    ```

     
### Users

- **Get a user by ID**

  - to get the user info with the ID is a bad idea so getting the user using JWT, So only the authenticated user would be able to get their Info.
  
    ```http
    GET /api/users/me  
    ```

- **Create a new user**

    ```http
    POST /api/users
    ```

    **Body:**

    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "password"
    }
    ```

## Technologies Used

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Postman**
- **Jest**

## Testing

Unit, integration, and TDD tests are written using Jest. To run the tests:
```bash
    npm test
```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
