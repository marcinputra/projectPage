const handlers = require('./lib/handlers')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// obsługa statycznych plików, dodajemy folder ./public
app.use(express.static( __dirname + '/public' ))

// konfiguacja silnika widoków 
// instalacja poprzez komendę: npm install express-handlebars
// dodanie silnika widoków
const { engine } = require('express-handlebars')
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views','./views')


// losowanie z pliku fortunerandom.js
// app.get('/random',(req,res) => {
//     res.render('random',{fortune: fortune.getFortuneRandom() })
// })
app.get('/random', handlers.randomFortune )

// strona główna i podstrony
// app.get('/',(req,res) => {res.render('home')})
app.get('/',handlers.home)
// app.get('/about',(req,res) => {res.render('about')})
app.get( '/about',handlers.about )

// niestandardowa strona 404
// app.use((req, res) => {
//     res.status(404)
//     res.render('404')
// })
app.use( handlers.notfound )

// niestandradowa strona 500
// app.use((err, req, res, next) => {
//     console.error(err.message)
//     res.status(500)
//     res.render('500')
// })
app.use( handlers.serverError)

// informacja w konsoli pod którem portem otworzyliśmy serwer HTTP
// app.listen(port, () => console.log(
//     `Express został uruchomony pod adresem http:///localhost:${port}; `+
//     `Naciśnij Ctrl-C, aby zakończyć.`
// ))

// zmiana .listen na potrzeby testów puppeteer
if(require.main == module) {
    app.listen(port, () => {
        console.log(`Express został uruchomony pod adresem http:///localhost:${port}; `+
        `Naciśnij Ctrl-C, aby zakończyć.`)
    }) 
} else {
    module.exports = app
} 