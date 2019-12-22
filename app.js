const port = process.env.PORT || 3000;
const express = require('express')
const app = express()

//initializes bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// tells server to parse incoming data as JSON
app.use(express.json())

// access static HTML5 files from public folder
app.use(express.static('public'))
// loads homepage when localhost:3000 is entered in URL
app.get('/', (req, res,) => {
  res.sendFile('index.html', { root: __dirname })
})


app.get('/users', (req, res) => {
  res.json('you got it')
})






app.listen(port, () =>{
  console.log(`Port listening on port ${port}`)
})