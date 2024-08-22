# PrismaCRUD
prisma-node-crud is a simple CRUD (Create, Read, Update, Delete) application built with [**Prisma**](https://www.prisma.io/) and [**Express.js**](https://expressjs.com/). This application allows users to manage product information efficiently, including details like product name, color, and price. It serves as a foundational tool for inventory management or any system where basic product information needs to be stored, retrieved, and modified.
## Features
- **Create**: Add new products with specific details like name, color, and price.
- **Read**: View a list of all products or individual product details.
- **Update**: Modify existing product information.
- **Delete**: Remove products from the database.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Npm](https://www.npmjs.com/) (Node Package Manager)
- A [MongoDB](https://www.mongodb.com/) database (either a local instance or a MongoDB Atlas cloud database)
## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/himanshu064/prisma-node-crud.git
```
2. **Install dependencies:**

```bash
npm install
```
3. **Set up the environment variables:**
```bash
DATABASE_URL=
PORT=
```
4. **Start the application:**
```bash
npm start
```

## Swagger Testing
This project includes a swagger.yaml file that defines the API endpoints, request parameters, and responses in a standardized OpenAPI format. You can use this file to test and document the API.

### Using the swagger.yaml File
1. **Use an Online Swagger Editor:**
- Visit the [Swagger Editor](https://editor.swagger.io/).
- Copy the contents of the swagger.yaml file from your project.
- Paste the contents into the editor.
- The Swagger Editor will display the API documentation, allowing you to interact with and test the API endpoints directly from the browser.

## Postman Collection for API Testing

To make API testing easier, a Postman collection is provided for this project. This collection includes all the necessary endpoints and can be used to quickly test the API without manually configuring each request.

### Importing the Postman Collection

Follow these steps to import the Postman collection:

1. **Download the Postman Collection:**

   - The Postman collection file (`product-api-collection.json`) is included in the repository.

2. **Import the Collection into Postman:**

   - Open Postman.
   - Click on the "Import" button in the top left corner.
   - Select the `product-api-collection.json` file from your local machine.
   - Click "Open" to import the collection.

3. **Start Testing:**

   - Once the collection is imported, you can start making requests to the API endpoints defined in the collection. Each request includes predefined settings for method, URL, headers, and body, making it easier to test the API.
---

