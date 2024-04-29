const {Tarea} = require('../db');

async function getTasks(req, res, next) {
    try {
        const tareas = await Tarea.findAll();
        return res.status(200).json(tareas)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {getTasks};