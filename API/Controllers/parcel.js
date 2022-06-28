const { v4: uuidv4 } = require('uuid');

let parcels = [
    // username
    // destination 
    // pickup location
    // price 
    // _id
] 


const getParcel = (req, res)=>{
    if(parcels.length > 0){
             res.status(200).json({
                 parcels
             })
    }else{
        res.status(400).json({
            message : 'Sorry No parcel found'
        })
    }
 }


const createParcel = (req, res)=>{
    const parcel = req.body

    const with_uuiId = { id : uuidv4(), ...parcel}
    parcels.push(with_uuiId)
    if(with_uuiId) {
        res.status(201).json({
            parcel : with_uuiId
        })
    }else{
        res.status(400).json({
            message : 'Parcel not added'
        })
    }
}

const getParcel_id = (req, res)=>{
    const id = req.params.id
    const Parser_ID = parcels.find((parcel) => parcel.id === id)

    if(Parser_ID){
        res.status(200).json({
            Parser_ID
        })
    }else{
        res.status(400).json({
            error : 'Not a valid ID'
        })
    }

}

const updateParcel = (req, res)=>{
    const id = req.params.id
    const {username, price, _id} = req.body

    const updateParcel = parcels.find((parcel)=> parcel.id === id)

    if(username) updateParcel.username = username
    if(price) updateParcel.price = price

        res.status(200).json({
                updateParcel
            })
}

const deleteParcel = (req, res)=>{
    const id = req.params.id
    parcels = parcels.filter((parcel) => parcel.id !== id)

    res.status(200).json({
        parcels
    })
   
}


 module.exports = {
     getParcel,
     createParcel,
     getParcel_id,
     updateParcel,
     deleteParcel
 }