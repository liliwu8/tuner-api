// DEPENDENCIES
const app = require('./app')

// CONFIGURATION
require('dotenv').config()

const PORT = process.env.PORT || 3003

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
