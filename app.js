const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 5000
const routeParcel = require('./API/Routes/parcel.js')
const routeUsers = require('./API/Routes/users.js')
const app = express()

app.listen(PORT, ()=>{
    console.log('Listening')
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use('/parcel', routeParcel )
app.use('/users', routeUsers)

app.get('/', (req, res) =>{
    res.render('index', {title : 'On Time Delivery App'})
})

app.get('/docs', (req, res) =>{
    res.render('docs', {title : 'On Time Delivery App'})
})