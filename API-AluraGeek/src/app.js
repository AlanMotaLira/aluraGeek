import express from "express";
import routes from "./routes/index.js";
import config from "./config/config.development.json" assert { type: "json" };
import dbConect from "./config/dbConnect.js";
;
const app = express();

dbConect(
  `mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`
);

const port = process.env.PORT || 8000;

app.use(express.json());
app.use((__,res,next)=>{
  res.header('Access-Control-Allow-Origin','http://localhost:8080')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,content-type');
  next()
})
routes(app);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
export default app;
