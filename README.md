# Video Rental Application Backend

This project is a video rental application backend built using Node.js, Express, and MongoDB. The application allows an admin to perform CRUD (Create, Read, Update, Delete) operations on customers, genres, movies, and rentals. Postman is used for API testing and documentation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Customers](#customers)
  - [Genres](#genres)
  - [Movies](#movies)
  - [Rentals](#rentals)
- [Technologies Used](#technologies-used)
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

## API Endpoints (Only ShowCasing Customers, all of the other are similar to the this)

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



## Technologies Used

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Postman**


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
