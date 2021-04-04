const mogodb = require('mongoose');
const User = require('./userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentic/auth');


exports.registerUser = (req, res) => {
    User.exists({ email: req.body.email }, (err, result) => {
        if(err) {
            return res.status(400).json(err)
        }
        else {
            if(result) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'Mailadressen är redan registrerad'
                })
            }
            else {
                const salt = bcrypt.genSaltSync(10);
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if(err) {
                        return res.status(500).json({
                            statusCode: 500,
                            status: false,
                            message: 'Misslyckades med att kryptera lösenordet'
                        })
                    }

                    const newUser = new User({
                        firstName:      req.body.firstName,
                        lastName:       req.body.lastName,
                        email:          req.body.email,
                        passwordHash:   hash
                    })

                    newUser.save()
                        .then(() => {
                            res.status(201).json({
                                statusCode: 201,
                                status: true,
                                message: 'Användaren har skapats'
                            })
                        })
                        .catch(() => {
                            res.status(500).json({
                                statusCode: 500,
                                status: false,
                                message: 'Misslyckades med att skapa användaren'
                            })
                        })
                })
            }
        }
    })
}

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if(user === null) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'Fel e-postadress eller lösenord'
                })
            }
            try {
                bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
                    if(err) {
                        return res.status(400).json(err)
                    }
                    else {
                        if(result) {
                            return res.status(200).json({
                                statusCode: 200,
                                status: true,
                                message: 'Autentisering lyckades',
                                token: auth.generateToken(user._id)
                            })
                        }
                        return res.status(401).json({
                            statusCode: 401,
                            status: false,
                            message: 'Fel e-postadress eller lösenord'
                        })
                    }
                })
            }
            catch {
                return res.status(500).json({
                    statusCode:500,
                    status: false,
                    message: 'Kunde inte autentisera användaren. Kontakta systemadministratören'
                })
            }
        })
}

exports.getAUser = (req, res) => {
    User.exists( { _id: req.body._id }, (err, result) => {
        if(err) {
            return res.status(400).json(err)
        }
        else {
            if(result) {
                User.findById(req.body._id)
                    .then(user => res.status(200).json(user))
                    .catch(err => res.status(500).json(err))
            }
            else {
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message: 'Hittade inte användaren'
                })
            }
        }
    })
}