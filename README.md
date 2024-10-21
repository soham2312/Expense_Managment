# Daily Expense Sharing Application

A backend application for managing and sharing daily expenses among participants, built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Secure user signup and login using JWT.
- **Expense Management**: Add, view, and manage expenses with different split methods (equal, exact, percentage).
- **Individual Expenses**: View expenses for individual users and calculate the total amount spent.
- **Overall Expenses**: View all expenses and calculate the total amount spent across all users.
- **Balance Sheet**: Download a balance sheet of expenses.
- **Optimized Database Queries**

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT) for authentication

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/soham2312/Expense_Managment.git
   cd Expense_Managment
   
2. Install dependencies:
   ```sh
   npm i

3. Set up environment variables:
- Create a .env file in the root directory.
- Add the following variables:
   ```sh
   PORT=6000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

4. Start the server:
   ```sh
   nodemon app.js


## Endpoints
1. UserRoutes-
- `POST /api/users/` - Register a new user
   ```sh
   {
  "name": "string",       
  "email": "string",       
  "password": "string",   
  "phone": "string"       
   }
- `POST /api/users/login` - Login user
   ```sh
   {       
  "email": "string",       
  "password": "string",          
   }  
- `GET /api/users/logout` - Logout user
- `GET /api/users/:id` - Get user details
2. ExpenseRoutes-
- `POST /api/expenses/` - Add a new expense
   ```sh
   {
  "description": "string",     // A brief description of the expense
  "amount": "number",          // The amount of the expense
  "splitMethod": "string",     // How the expense should be split ("equal", "exact", "percentage")
  "participants": [            // List of participants involved in the expense
    {
      "userId": "string",      // The participant's user ID
      "share": "number"        // The participant's share (only required if splitMethod is "exact" or "percentage")
    }
  ]
   }

- `GET /api/expenses/individual` - Get individual expenses
- `GET /api/expenses/overall` - Get overall expenses
- `GET /api/expenses/balance-sheet` - Download balance sheet

