const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3080;
app.use(bodyParser.json())

// access static HTML5 files from public folder
app.use(express.static('public'))

// tells server to parse incoming data as JSON
app.use(express.json())









app.listen(port, () =>{
console.log(`Port listening on port ${port}`)
})