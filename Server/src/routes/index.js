const { Router } = require('express');
const {getTasksByUser} = require('../controllers/getTasksByUser');
const {postTask} = require('../controllers/postTask');
const {getUsers} = require('../controllers/getUsers');
const {postUser} = require('../controllers/postUser');
const {getTasks} = require('../controllers/getTasks'); 
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});
router.get('/tasks/:id', getTasksByUser);
router.post('/newtask',postTask);
router.get('/users',getUsers);
router.post('/newuser', postUser);
router.get('/tasks',getTasks);

module.exports = router;