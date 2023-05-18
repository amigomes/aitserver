const express = require("express")
const v1router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors({
    origin: 'https://aitool.fyi'
}));
app.use(bodyParser.json());
app.use("/api/v1", v1router);

app.listen(PORT, ()=>{
    console.log("server runnning "+PORT);
});