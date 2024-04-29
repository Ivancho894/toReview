const {User} = require('../db')

async function getUsers(req,res) {
    try{
        const users = await User.findAll()
        return res.status(200).json(users)

    } catch (err) {
        return res.status(400).json(err.message)
    }
}


module.exports = {getUsers}