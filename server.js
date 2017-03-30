const express = require("express"),
      hbs     = require("hbs"),
      fs      = require("fs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// app.use((req, res, next) = > {
//     var now = new Date().toString();
//     var log = `${now}: ${req.method} | ${req.path}`;
//     console.log(log);
//     fs.appendFile("server.log", log + "\n", (err) =>{
//         if(err){
//             console.log("Unable to append to server.log");
//         }
//     });
//     next();
// });

app.use((req, res) => {
    res.render("maintenance.hbs", {
        pageTitle: "maintenance",
        pageMessage: "This page is under construction...We'll be back soon!",
        pageMean: "Now go away!"
    });
});

app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
    return new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text) => {
    return text.toUpperCase();
});

app.get("/", (req, res) => {
    res.render("home.hbs", {
        pageTitle: "Welcome Page",
        welcomeMessage: "This is the welcome page! Welcome!"
    });
});


app.listen(3000, process.env.IP, () => {
    console.log("Server is up on Port 3000.");
});
