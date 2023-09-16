# Running the database
Navigate to the directory 
```
../shellhacks2023/pocketbase_0.18.6
```
run the command
```
./pocketbase serve
```
The app should run on ```localhost:8090```

# Running the backend server
Navigate to the directory
```
../shellhacks2023/backend
```
run the command
```
npm i
npm start
```
The app should run on ```localhost:5000```


# API Endpoints

# User API Documentation

 This document provides a brief overview of the API endpoints related to the 'user' in our application.

## Create a New User [POST /user/create]

This endpoint is used to create a new user in our system. 

**Request Body**

- `first_name`: The user's first name.
- `last_name`: The user's last name.
- `password`: User's password.
- `income`: User's income.
- `location`: User's location.
- `Debt_IDs`: A list of debt identifier that user owns.
- `investment_IDs`: A list of investment identifier that user has made.

**Response**

- The newly created user data.

## Get User by ID [GET /user/:id]

This endpoint is used to get the user's data by ID.

**Request Parameter**

- `id`: The ID of the user you want to retrieve.

**Response**

- The user data.

## Update User [PUT /user/:id]

This endpoint is used to update an existing user.

**Request Parameters**

- `id`: The ID of the user you want to update.

**Request Body**

- The fields you want to update.

**Response**

- The updated user data.

## Add Debt ID to User [PUT /user/:id/addDebt]

This endpoint is used to add a Debt ID to the list of debt IDs in user.

**Request Parameters**

- `id`: The ID of the user you want to add debt to.

**Request Body**

- `Debt_IDs`: An array containing the ID(s) of the new debt(s) you want to add.

**Response**

- The updated user data with the added debt ID.

Please reach out if you have any problems or require further clarifications using these endpoints.



# Investment API Documentation

This document offers a concise summary of the API endpoints related to 'investment' in our application.

## Create New Investment [POST /investment/create]

This endpoint is used to create a new investment in our system. 

**Request Body**

- `index_fund_ID`: The ID of the index fund in which the investment is made.
- `shares`: The number of shares purchased.
- `initial_dollar_amount`: The initial dollar amount invested.
- `initial_investment_date`: The date when the initial investment was made.

**Response**

- The newly created investment data.

## Get Investment by ID [GET /investment/:id]

This endpoint enables you to retrieve a particular investment using its ID.

**Request Parameter**

- `id`: The ID of the investment you wish to retrieve.

**Response**

- The requested investment data.

## Update Investment [PUT /investment/:id]

This endpoint is used to update an existing investment's details.

**Request Parameters**

- `id`: The ID of the investment you intend to update.

**Request Body**

- The fields that you wish to update.

**Response**

- The updated investment data.

## Delete Investment [DELETE /investment/:id]

This endpoint is used to delete a particular investment using its ID.

**Request Parameters**

- `id`: The ID of the investment you wish to delete.

**Response**

- The data of the investment that was deleted.

## Add Investment ID [PUT /investment/:id/addInvestment]

This endpoint is used to add an investment ID to the list of investment IDs.

**Request Parameters**

- `id`: The ID of the investment you wish to relate to.

**Request Body**

- `investment_IDs`: An array containing the new investment ID(s) you wish to add.

**Response**

- The updated investment data with the new investment ID listed.

Feel free to reach out if you encounter any issues or need further clarification on these endpoints.

# Debt API Documentation

This document presents a brief overview of the API endpoints related to the 'debt' in our application.

## Create New Debt [POST /debt/create]

This endpoint allows you to create a new debt our system. 

**Request Body**

- `name`: The name of the debt.
- `amount`: The amount of the debt.
- `interest`: The interest rate on the debt.
- `category`: The category of the debt.

**Response**

- The newly created debt data.

## Get Debt by ID [GET /debt/:id]

This endpoint allows you to retrieve a specific debt using its ID.

**Request Parameter**

- `id`: The ID of the debt you wish to retrieve.

**Response**

- The debt data.

## Update Debt [PUT /debt/:id]

This endpoint is used to update the details of an existing debt.

**Request Parameters**

- `id`: The ID of the debt you want to update.

**Request Body**

- The fields you want to update.

**Response**

- The updated debt data.

## Delete Debt [DELETE /debt/:id]

This endpoint is used to delete a specific debt using its ID.

**Request Parameters**

- `id`: The ID of the debt you wish to delete.

**Response**

- The data of the debt that was deleted.

Should you encounter any issues or require deeper clarification regarding these endpoints, please feel free to reach out.
