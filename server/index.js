const express = require("express");
// used to set up configuration that will
// listen to incoming requests
// then route those requests to different handlers

const app = express();

// TODO: learn about arrow function
// register router handler to app:

// app = application to register the route handler to
// get = watch incoming requests with this method
// / = root
// first arg (req) represents incoming request: contains info about who is requesting
// second arg (res) is the response
// res.send({}) sends plain js object
// tells express to close request and send back json data

app.get("/", (req, res) => {
	res.send({ hi: "there" });
});

app.get("/greeting", (req, res) => {
	res.send({ greetings: "friend" });
});

app.get("/potato", (req, res) => {
	res.send({ bye: "potato" });
});

const PORT = process.env.PORT || 5000;

// express tells node it wants to listen to incoming traffic on port 5000

app.listen(PORT);
