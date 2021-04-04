const mogodb = require('mongoose');
const Cart = require('./cartSchema');


// exports.getAllCarts = (req, res) => {
//     Cart.find()
//         .then(carts => res.status(200).json(carts))
//         .catch(error => res.status(500).json(error))
// }

// exports.getACart = (req, res) => {
//     Cart.exists( { _id: req.params.id }, (err, result) => {
//         if(err) {
//             return res.status(400).json(err)
//         }
//         else {
//             if(result) {
//                 Cart.findById(req.params.id)
//                     .then(cart => res.status(200).json(cart))
//                     .catch(err => res.status(500).json(err))
//             }
//             else {
//                 return res.status(404).json({
//                     statusCode: 404,
//                     status: false, 
//                     message: 'Kundvagnen finns inte'
//                 })
//             }
//         }
//     })
// }

exports.saveCart = (req, res) => {
    Cart.exists({ name: req.body.name }, (err, result) => {
        if(err) {
            return res.status(400).json(err)
        }
        else {
            if(result) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false, 
                    message: 'En kundvagn med det namnet finns redan'
                })
            }
            else {

            const newCart = new Cart ({
                // user: req.user._id,
                // items: req.body.items,
                name: req.body.name
            })

            newCart.save()
                .then(() => {
                    res.status(201).json({
                        statusCode: 201,
                        status: true,
                        message: 'Kundvagnen har sparats'
                    })
                })
                .catch(() => {
                    res.status(500).json({
                        statusCode: 500,
                        status: false,
                        message: 'Misslyckades med att spara kundvagnen'
                    })
                })
                
            }
        }
    })
}
// exports.updateCart = (req, res) => {
//     Cart.exists({ _id: req.params.id }, (err, result) => {
//         if(err) {
//             return res.status(500).json(err)
//         }
//         else {
//             if(result) {
//                 Cart.updateOne({ _id: req.params.id }, {
//                     ...req.body,
//                     modified: Date.now()
//                 })
//                 .then(() => {
//                     res.status(200).json({
//                         statusCode: 200,
//                         status: true,
//                         message: 'Kundvagnen uppdaterades'
//                     })
//                 })
//                 .catch(() => {
//                     res.status(500).json({
//                         statusCode: 500,
//                         status: false,
//                         message: 'Misslyckades med att uppdatera kundvagnen'
//                     })
//                 })
                    
//             }
//             else {
//                 return res.status(404).json({
//                     statusCode: 404,
//                     status: false, 
//                     message: 'Kundvagnen finns inte'
//                 })
//             }
//         }
//     })
// }

// exports.deleteCart = (req, res) => {
//     Cart.exists({ _id: req.params.id }, (err, result) => {
//         if(err) {
//             return res.status(400).json(err)
//         }
//         else {
//             if(result) {
//                 Cart.deleteOne({ _id: req.params.id })
//                     .then(() => {
//                         res.status(200).json({
//                             statusCode: 200,
//                             status: true, 
//                             message: 'Kundvagnen är raderad'
//                         })
//                     })
//                     .catch(() => {
//                         res.status(500).json({
//                             statusCode: 500,
//                             status: false, 
//                             message: 'Misslyckades med att radera kundvagnen'
//                         })
//                     })
//             }
//             else {
//                 return res.status(404).json({
//                     statusCode: 404,
//                     status: false, 
//                     message: 'Kundvagnen finns inte'
//                 })
//             }
//         }
//     })
// }