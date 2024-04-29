const {Tarea} = require('../db.js')


async function getTasksByUser(req, res) {
    const {id} = req.params
    try {
        const tareas = await Tarea.findAll({where:{userId:id}})
        return res.status(200).json(tareas)
    } catch (error) {
        return res.status(400).json({e:er.message})
    }
}
module.exports = {getTasksByUser}