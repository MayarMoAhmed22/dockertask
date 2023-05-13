# dockertask

# Person CRUD App

This is a simple web application that allows you to perform CRUD (Create, Read, Update, Delete) operations on a person using a React frontend and a Node.js/Express backend.

## Running the App

To run the app, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the `backend` directory.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the backend server on port 5000.
5. Open another terminal and navigate to the `frontend` directory.
6. Run `npm install` to install the required dependencies.
7. Run `npm start` to start the frontend server on port 3000.
8. Open a web browser and go to `http://localhost:3000` to view the app.

## Building Docker Images

To build Docker images for the frontend and backend, follow these steps:

1. Open a terminal and navigate to the `backend` directory.
2. Run `docker build -t person-backend .` to build the backend image.
3. Open another terminal and navigate to the `frontend` directory.
4. Run `docker build -t person-frontend .` to build the frontend image.

## Running Docker Containers

To run Docker containers for the frontend and backend, follow these steps:

1. Open a terminal and run `docker run -p 5000:5000 person-backend` to start the backend container on port 5000.
2. Open another terminal and run `docker run -p 3000:3000 person-frontend` to start the frontend container on port 3000.
3. Open a web browser and go to `http://localhost:3000` to view the app.

Note: Make sure Docker is installed and running on your machine before running these commands.