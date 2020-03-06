const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('pages', {
    express:server
})

server.get('/', function(req, res) {
    return res.render('about')
})

server.get('/courses', function(req, res) {
    return res.render('courses')
})

server.use(function(req, res) {
    res.status(404).render('not-found')
})

server.listen(3000, function() {
    console.log('server is running!')
})