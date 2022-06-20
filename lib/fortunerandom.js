
// tablica losowych wpisow 
const fortunes = [
    "Przyjmnego dnia na początek tygodnia.",
    "Nie obawiaj się dzisiejszego dnia. Ładna pogoda.",
    "Wygrałeś dziś wyjazd na wakacje, do Hiszpani.",
]

exports.getFortuneRandom = () => {
    const x = Math.floor(Math.random()*fortunes.length)
    return fortunes[x]
}
