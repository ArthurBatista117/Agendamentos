const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userControllers');
const { userCreateValidation, userUpdateValidation } = require('../validators/userControllerValidator');
const handleValidation = require('../middlewares/handleValidation');

router.get('/usuarios', userController.index);
router.get('/usuarios/:id', userController.show);
router.post('/usuarios', userCreateValidation, handleValidation, userController.create);
router.put('/usuarios/:id', userUpdateValidation, handleValidation, userController.update);
router.delete('/usuarios/:id', userController.destroy);

module.exports = router;
