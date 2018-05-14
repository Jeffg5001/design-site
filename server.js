const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

//app.use(require('body-parser').urlencoded({extended:false, type: 'application/x-www-form-urlencoded'}))


app.post('/api/hello', (req, res) => {
  console.log(req)
  res.sendStatus(200)
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));