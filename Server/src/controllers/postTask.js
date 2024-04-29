const {Tarea,User} = require('../db.js');

async function postTask(req,res){
    try{
        const {name, description, priority, userId} = req.body;
        const newTask = await Tarea.create({name, description, priority,state:false,userId});
        const user = await User.findByPk(userId);
        if (user) {
            await user.addTarea(newTask);
        } else {
            throw new Error('User not found');
        }
        return res.status(200).json({
            task: newTask,
            user: user 
        });

    }catch(error){
        return res.status(400).json(error.message)
    }

}
module.exports = {postTask}