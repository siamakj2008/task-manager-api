const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        console.log(token)
        // const decoded = jwt.verify(token, 'thisismynewcourse')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log('decoded: ', decoded)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(404).send({ error: 'Please authenticate.' })
    }
}


module.exports = auth