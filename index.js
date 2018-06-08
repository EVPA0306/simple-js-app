const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(8800, () => {
  console.log('App is listining on port 8800')
})
