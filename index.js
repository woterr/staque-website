const express = require("express");
const app = express();

const rootRoutes = require(`./routes/root-routes.js`);
const authRoutes = require(`./routes/auth-routes.js`);
const port = process.env.PORT || 3000;

__dirname;	
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.use(
  "/",
  rootRoutes,
  authRoutes,
);

app.all("*", (req, res) => res.render("404"));

app.listen(port, () => console.log(`Server is live on port 3000`));


// APp

module.exports = app;
