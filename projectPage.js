const express = require('express')
const app = express()
const port = process.env.PORT || 3000


// konfiguacja silnika widoków 
// instalacja poprzez komendę: npm install express-handlebars
// dodanie silnika widoków
const { engine } = require('express-handlebars')
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views','./views')


// // strona główna i podstrony
app.get('/',(req,res) => {res.render('home')})
app.get('/about',(req,res) => {res.render('about')})

// // niestandardowa strona 404
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

// // niestandradowa strona 500
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

// informacja w konsoli pod którem portem otworzyliśmy serwer HTTP
app.listen(port, () => console.log(
    `Express został uruchomony pod adresem http:///localhost:${port}; `+
    `Naciśnij Ctrl-C, aby zakończyć.`
))