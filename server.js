// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create our app object
const app = express();

// set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving about info
app.get("/about", (req, res) => {
    // send projects via JSON
    res.json(about);
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  // send projects via JSON
  res.json(projects);
});

// Show
app.get('/projects/:id', (req, res) => {
    const id = req.params.id
    res.json(projects[id])
})

// create route - post - create a new turtle
app.post("/projects", (req, res) => {
    // push req.body into the projects array
    console.log("Request Body:", req.body)
    projects.push(req.body)
    // return all the projects
    res.json(projects)
})

// update route - put - updates the turtle specified
app.put("/projects/:id", (req, res) => {
    // grab the id
    const id = req.params.id
    // update the array
    projects[id] = req.body
    // return all the projects as json
    res.json(projects)
})

// destroy route - delete - remove the turtle specific
app.delete("/projects/:id", (req, res) => {
    // grab the id
    const id = req.params.id
    // splice/remove the item from the array
    projects.splice(id, 1)
    // return all the projects
    res.json(projects)
})


//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));