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

// tablica losowych wpisow 
const fortunes = [
    "Przyjmnego dnia na początek tygodnia.",
    "Nie obawiaj się dzisiejszego dnia. Ładna pogoda.",
    "Wygrałeś dziś wyjazd na wakacje, do Hiszpani.",
]

app.get('/random',(req,res) => {
    const randomfortunes = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('random',{fortune: randomfortunes})
})

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