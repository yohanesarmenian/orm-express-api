const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 4000

const {Article} = require('./models')

app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.use(express.json())


//GET all articles
// app.get('/articles', (req, res) => {
//     Article.findAll().then(articles => {
//         res.status(200).json(articles)
//     })
// })

//POST /articles, buat artikel baru
app.post('/articles', (req, res) => {
    Article.create({
        title: req.body.title,
        body: req.body.body,
        // approved: true
    }).then(article => {
        res.render('Article berhasil dibuat')
    })
})

//form create articles
app.get('/articles/create', (req,res) => {
    res.render('./articles/create')
})

app.get('/articles', (req, res) => {
    Article.findAll()
    .then(articles => {
        res.render('./articles/index', {articles
        })
    })
})

//GET article by ID
app.get('/articles/:id', (req, res) => {
    Article.findOne({
        where: { id: req.params.id }
    }).then(article => {
        res.render('articles/show', article)
        // res.status(200).json(article)
    })
})

//Create article
app.post('/articles', (req, res) => {
    Article.create({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    }).then(article => {
        res.status(201).json(article)
    }).catch(err => {
        res.status(442).json("Can't create article")
    })
})

//Update article
app.put('/articles/:id', (req, res) => {
    Article.update({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    }, {
        where: { id: req.params.id},
        returning: true //show update data as result
    }).then(article => {
        res.status(201).json(article)
    }).catch(err => {
        res.status(442).json("Can't update article")
    })
})

//Delete article
app.delete('/articles/:id', (req, res) => {
    Article.destroy({
        where: { id: req.params.id }
    }).then(article => {
        if(article === 1){
            res.status(200).json({message : "Article has been deleted!"})
        } else
        {
            res.status(404).json({message:"Article not found"})
        }
    }).catch(err => {
        res.status(442).json(error)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})