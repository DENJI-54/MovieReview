# Movie Review Application

## Description
This project is a Movie Review application that allows users to review and comment on their favorite movies. Users can register, log in, and post reviews, as well as view reviews from other users.

## Features
- User registration and login
- Create, read, update, and delete movie reviews
- Comment on reviews
- User authentication

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd yt-blog
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables.

## Usage
To run the application, use the following command:
```bash
node server.js
```
The application will be running on `http://localhost:3000`.

## Routes
- **GET /**: Home page
- **GET /login**: Login page
- **POST /login**: Authenticate user
- **GET /register**: Registration page
- **POST /register**: Register a new user
- **GET /blog**: View all movie reviews
- **POST /blog**: Create a new movie review
- **GET /blog/:id**: View a specific movie review
- **PUT /blog/:id**: Update a movie review
- **DELETE /blog/:id**: Delete a movie review
- **POST /comment**: Comment on a review

## License
This project is licensed under the MIT License.
