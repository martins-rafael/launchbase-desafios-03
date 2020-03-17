const express = require('express')
const nunjucks = require('nunjucks')
const cursos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('pages', {
    express:server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res) {
    const about = {
        img_url: 'images/logo.jpg',
        name: 'Rocketseat',
        description: 'Plataforma de educação em tecnologia',
        learn: 'Aqui você aprende:',
        tecnologies: [
            {name: 'Javascript'},
            {name: 'NodeJS'},
            {name: 'ReactJS'},
            {name: 'React Native'}
        ],
        links: [
            {name: 'Github', url: 'https://github.com/Rocketseat'},
            {name: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial/'},
            {name: 'Facebook', url: 'https://www.facebook.com/rocketseat'}
        ]
    }

    return res.render('about', {about})
})

server.get('/courses', function(req, res) {
    return res.render('courses', {items: cursos})
})

server.get('/courses/:id', function(req,res) {
    const id = req.params.id;
    const curso = cursos.find(function(curso){
        return curso.id == id
    })

    if (!curso) {
        return res.render('not-found')
    }

    return res.render('course', {items: curso})
})

server.use(function(req, res) {
    res.status(404).render('not-found')
})

server.listen(3000, function() {
    console.log('server is running!')
})