const express = require('express')
const { json } = require('express/lib/response');
const route = express.Router()
const Controller = require('../Controllers/parcel')



route.get('/', Controller.getParcel)

route.post('/', Controller.createParcel)

route.get('/:id', Controller.getParcel_id)

route.patch('/:id', Controller.updateParcel)

route.delete('/:id', Controller.deleteParcel)


module.exports = route