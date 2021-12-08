const express = require('express')
const env = require('dotenv')
const app = express();
const port=3000;

env.config();


app.get('/', (req, res , next) => {
    res.send("hi srija")
  })

app.post('/data', (req, res , next) => {
    res.send("post request")
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })