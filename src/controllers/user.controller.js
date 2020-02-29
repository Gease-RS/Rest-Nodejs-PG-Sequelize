const User = require('../Model/User')

async function getAllUsers(req, res) {
    const users = await User.findAll()
    res.json({
        data: users
    })
}

async function getOne(req, res) {
    const { id } = req.params

    var user = await User.findOne({
        where: {
            id
        }
    })
    res.json({
        data: user
    })
}

module.exports = {getAllUsers, getOne}