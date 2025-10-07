# Product CRUD API (Node.js + MongoDB + MVC)

## Setup Instructions
1. Run `npm install`
2. Start MongoDB locally
3. Run the app with `npm start`
4. Access API at `http://localhost:5000/api/products`

## Folder Structure
- config/db.js — MongoDB connection
- models/productModel.js — Mongoose schema
- controllers/productController.js — CRUD logic
- routes/productRoutes.js — Routes for endpoints
- server.js — Entry point

## API Endpoints
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /api/products | Create a product |
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get product by ID |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |
