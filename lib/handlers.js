const fortune = require('./fortunerandom')

exports.home = (req, res) => res.render('home')
exports.about = (req, res) => res.render('about')
exports.randomFortune = (req,res) => res.render('random',{fortune: fortune.getFortuneRandom() })
exports.notfound = (req, res) =>  res.render('404') 
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500') 
/* eslint-enable no-unused-vars */
