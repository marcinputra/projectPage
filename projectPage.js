const express = require('express')

const app = express()

const port = process.env.PORT || 3000

// niestandardowa strona 404
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - nie znaleziono')
})

// niestandradowa strona 500
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - błąd serwera')
})

// informacja w konsoli pod którem portem otworzyliśmy serwer HTTP
app.listen(port, () => console.log(
    `Express został uruchomony pod adresem http:///localhost:${port}; `+
    `Naciśnij Ctrl-C, aby zakończyć.`
))