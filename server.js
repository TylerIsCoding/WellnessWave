const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");
const app = express();

require("dotenv").config({ path: "./config/.env" });

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.WELLNESS_WAVE_AUTH0_SECRET,
    baseURL: "https://localhost:3000",
    clientID: process.env.WELLNESS_WAVE_AUTH0_CLIENT_ID,
    issuerBaseURL: `${process.env.WELLNESS_WAVE_AUTH0_DOMAIN}`,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in!" : "Logged out");
});

// The /profile route will show the user profile as JSON
app.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.listen(3000, function () {
    console.log("Listening on http://localhost:3000");
});
