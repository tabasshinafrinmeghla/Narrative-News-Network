const express = require('express');
const app = express();
const port = 5000;
const cors  = require ('cors');

const categories = require('./Data/Categories.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Narrative News Network is running')
})
app.get('/categories', (req, res) => {
  res.send(categories);
})

app.listen(port, () => {
  console.log(`Narrative News Network is running ${port}`)
})