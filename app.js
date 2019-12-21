const app = require('express')

const port = process.env.PORT || 3000;


app.listen(port, () =>{
console.log(`Port listening on port ${port}`)
})