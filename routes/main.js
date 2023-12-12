const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // This will log if the user is authenticated in the VS Code / Server terminal. Should return true of false. This will be removed for production.
    console.log(`Is user authenticated? ${req.oidc.isAuthenticated()}`);

    // If the user is authenticated; the EJS rendering engine will render the profile page. Else; it will render the index/login page.
    req.oidc.isAuthenticated() ? res.render("profile") : res.render("index");
});

module.exports = router;
