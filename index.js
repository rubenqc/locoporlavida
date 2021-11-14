const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('Hello world')
})

app.listen(process.env.PORT, () => {
  console.log(`App started ${process.env.PORT}`)
})
