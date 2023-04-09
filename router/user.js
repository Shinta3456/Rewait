const userController = require('../controllers/user');
const router = require('express').Router();

router.post('/register', userController.create);
router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.post('/login', userController.login);

module.exports = router;