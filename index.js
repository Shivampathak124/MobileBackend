const express = require("express");
const { connection } = require("./config/db");

const {mobileRouter} = require("./controller/mobileController")

const app = express();
app.use(express.json());

app.use("/mobile", mobileRouter);

const port = 8080;
app.listen(port ,async () => {
    try {
        await connection;
        console.log("connected succesfully")
        console.log("listing on port 8080"); 
    } catch (error) {
        console.log(error); 
    }
})
