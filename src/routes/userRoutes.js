const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userControllers');
const { userCreateValidation, userUpdateValidation } = require('../validators/userControllerValidator');
const handleValidation = require('../middlewares/handleValidation');

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userCreateValidation, handleValidation, userController.create);
router.put('/:id', userUpdateValidation, handleValidation, userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;
