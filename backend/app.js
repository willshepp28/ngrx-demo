const express = require("express"),
    jwt = require("jsonwebtoken"),
    bodyParser = require("body-parser"),
    cors = require("cors");




const application = express();




application.get("/", (request, response) => {
    response.status(200).json({
        message: "Welcome to our home page"
    })
})


application.listen("3000", (request, response) => {
    console.log("Server listening on port 3000");
});