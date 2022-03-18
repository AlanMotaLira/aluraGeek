const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.json(),express.json())

routes(app)
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

module.exports = app;