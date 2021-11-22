const express = require('express')
const env = require('dotenv')
const app = express();
const port=3000;
const bodyParser= require('body-parser')

env.config();

app.use(bodyParser());

app.get('/', (req, res , next) => {
    res.status(200).json({
        message:'hi srija , i love you'
    });
  })

app.post('/data', (req, res , next) => {
    res.status(200).json({
        message:req.body
    });
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })