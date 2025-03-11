
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
## Environment Variables
To run this project, you will need to add the following environment variables to your `.env` file:

```
DATABASE_URL=<your_database_url>
JWT_SECRET=<your_jwt_secret>
PORT=3000
```



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




## Tech Stack
- **Node.js**: JavaScript runtime for building the application.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing movie reviews and user data.
- **EJS**: Templating engine for rendering views.
- **JWT**: For user authentication and authorization.
