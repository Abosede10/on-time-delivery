const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 5000
const app = express()

app.listen(PORT, ()=>{
    console.log('Listening')
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(morgan('dev'))

app.get('/', (req, res) =>{
    res.render('index', {title : 'On Time Delivery App'})
})