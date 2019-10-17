const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());

app.post("/register", (req, res) => {
    console.log("request in post register", req.body);
});

app.listen(8080, () => {
    console.log("Port 8080 is listening");
});
