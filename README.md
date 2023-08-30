
# Todo Client App REST API

This repository contains the backend REST API for the Todo Client App. It's built using Node.js and Express.js, providing endpoints to manage tasks and todos.



## Features


- Create, read, update, and delete tasks.
- Store tasks with associated information such as title and status.
- RESTful API architecture for easy integration with frontend applications.
- Error handling and validation for robustness.
## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (Make sure you have a MongoDB server running locally or provide a connection string)
## Installation

Install my-project with npm

Clone the repository:

```bash
git clone https://github.com/ad1tyaSharma/todo-api.git
cd todo-api
```
```bash
npm install
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` :  The port on which the server will run.

`MONGODB_URI` : The MongoDB connection string.


## Usage

Run the server:
```bash 
npm start
```
Demo User,<br/>
Email : user@test.com<br/>
Password : 123456<br/>
The API will be available at `http://localhost:8000`.

## API Reference

#### Login User

```http
  POST /auth/login
```

#### Register User

```http
  POST /auth/register
```


#### Get User by :id

```http
  GET /auth/:id
```

#### Get Task by :id

```http
  GET /task/:id
```

#### Get Task by User :id

```http
  GET /task/gettasks/:id
```
#### Create Task 

```http
  POST /task/create
```
#### Edit Task 

```http
  PUT /task/edit/:id
```
#### Delete Task 

```http
  DELETE /task/delete/:id
```

## Demo

Insert gif or link to demo


## Contributing

Contributions are welcome! If you find any issues or want to enhance the API, feel free to open a pull request. Make sure to follow the existing coding style and add appropriate tests for your changes.

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push the changes to your fork.
5. Open a pull request explaining your changes.

