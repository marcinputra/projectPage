const express = require('express')
const app = express()

// Nagłówek żądań

app.get('/headers', (req, res) => {
  res.type('text/plain')
  const headers = Object.entries(req.headers)
    .map(([key, value]) => `${key}: ${value}`)
  res.send(headers.join('\n'))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nprzechodzenie do http://localhost:${port}/headers\n`))
