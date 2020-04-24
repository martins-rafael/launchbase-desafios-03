const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require('./data')

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function (req, res) {
    return res.render('index', { recipes })
})

server.get('/about', function (req, res) {
    return res.render('about')
})

server.get('/recipes', function (req, res) {
    return res.render('recipes', { recipes })
})

server.get('/recipes/:index', function (req, res) {
    const recipesIndex = req.params.index
    return res.render('recipe', {recipe: recipes[recipesIndex]})
})

server.listen(3000, function () {
    console.log('server is running on port 3000')
})