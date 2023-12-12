const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");
const app = express();
const path = require("path");
const views = path.join(__dirname, "/views/");

require("dotenv").config({ path: "./config/.env" });

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.WELLNESS_WAVE_AUTH0_SECRET,
    baseURL: "https://localhost:3000",
    clientID: process.env.WELLNESS_WAVE_AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.WELLNESS_WAVE_AUTH0_DOMAIN,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.use(express.static(__dirname + "/public"));

// req.isAuthenticated is provided from the auth router

app.get("/", (req, res) => {
    res.sendFile(views + "login.html");
});

app.get("/index", (req, res) => {
    res.sendFile(
        req.oidc.isAuthenticated() ? views + "index.html" : views + "login.html"
    );
});

// The /profile route will show the user profile as JSON
app.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.listen(3000, function () {
    console.log("Listening on https://localhost:3000");
});
