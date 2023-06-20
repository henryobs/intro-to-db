// enable env variables
import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import apiRoutes from './routes/app.routes.js';
import cookieParser from "cookie-parser";

const app = express();

// set view engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true })); // for forms
app.use(express.json()); // for application/json
app.use(cookieParser());

const DB_URI = process.env.DB_URI;

// routes
async function startApp () {
  console.log('Starting App...');

  console.log('Connection to DB...');

  await mongoose.connect(DB_URI);

  // define our routes
  app.use('', apiRoutes);

  console.log('Database connected');

  app.listen(9000, () => {
    console.log("App is live and running");
  });
}

startApp();

