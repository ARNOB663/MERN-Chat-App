# Chat App

This is a MERN stack chat application.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/chat-app.git
    cd chat-app
    ```

2. Install backend dependencies:

    ```sh
    cd backend
    npm install
    ```

3. Install frontend dependencies:

    ```sh
    cd ../frontend
    npm install
    ```

## Running the Project

1. Start the backend server:

    ```sh
    cd backend
    npm run server
    ```

2. Start the frontend development server:

    ```sh
    cd ../frontend
    npm run dev
    ```

## Environment Variables

Make sure to create a [.env](http://_vscodecontentref_/1) file in the root directory with the following content:

```properties
PORT=3000
MONGO_DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development