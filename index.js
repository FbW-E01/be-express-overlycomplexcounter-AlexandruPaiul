import express from "express";

const app = express();
let single_number = 0;

// 1. GET / -- this returns just a single number (starting from 0)
app.get("/", (req, res) => {
  res.send(`Single number is ${single_number.toString()} \n`);
});

//2. POST /inc -- this increases the number
app.post("/inc", (req, res) => {
  single_number++;
  res.send(`The single number is increased ${single_number.toString()} \n`);
});

// 3. POST /dec -- this decreases the number
app.post("/dec", (req, res) => {
  single_number--;
  res.send(`The single number is decreased ${single_number.toString()} \n`);
});

//4. POST /die -- this shuts down the server
app.post('/die',(req,res)=>{
    res.end("The server is shutdown\n");
    process.exit();
})

const port = 3030;
const message = () => {
  console.log("Server is running on http://localahost:" + port);
};
app.listen(port, message);
