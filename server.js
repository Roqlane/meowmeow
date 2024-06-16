if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(methodOverride('_method'));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Route for the main page
app.get("/", (req, res) => {
    res.render("index"); // Ensure there is an index.ejs file in views
});

// Serve the JavaScript file directly
app.get("/web-client/ch62/color.js", (req, res) => {
    res.sendFile(__dirname + "/public/web-client/ch62/color.js"); // Adjust the path as needed
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
