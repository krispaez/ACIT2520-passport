"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var expressLayouts = require("express-ejs-layouts");
var session = require("express-session");
var path = require("path");
var port = process.env.port || 5000;
var app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
    },
}));
var passport = require("./middleware/passport");
var authRoute = require("./routes/authRoute");
var indexRoute = require("./routes/indexRoute");
// Middleware for express
app.use(express.json());
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    console.log("User details are: ");
    console.log(req.user);
    console.log("Entire session object:");
    console.log(req.session);
    console.log("Session details are: ");
    console.log(req.session.passport);
    next();
});
app.use("/", indexRoute);
app.use("/auth", authRoute);
app.listen(port, function () {
    console.log("\uD83D\uDE80 Server has started on port ".concat(port));
});
