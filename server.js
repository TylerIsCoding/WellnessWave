const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");
const app = express();
const path = require("path");
const mainRouter = require("./routes/main.js");

require("dotenv").config({ path: "./config/.env" });

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.WELLNESS_WAVE_AUTH0_SECRET,
    baseURL: "http://localhost:3000",
    clientID: process.env.WELLNESS_WAVE_AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.WELLNESS_WAVE_AUTH0_DOMAIN,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.set("view engine", "ejs");
app.set("views", "views");
app.use(auth(config));
app.use(express.static(__dirname + "/public"));

app.use("/", mainRouter);

app.listen(3000, function () {
    console.log("Listening on http://localhost:3000");
});
