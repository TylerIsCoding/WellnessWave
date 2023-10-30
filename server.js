const express = require("express");
const app = express();
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");

require("dotenv").config({ path: "./config/.env" });
