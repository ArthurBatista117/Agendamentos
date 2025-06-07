const { Router } = require('express');
const UserRouter = Router();
const userControllers = require('../app/controllers/userControllers');

UserRouter.get('/', userControllers.index)
UserRouter.get('/:id', userControllers.show)
UserRouter.post('/', userControllers.create)
UserRouter.put('/:id', userControllers.update)
UserRouter.delete('/:id', userControllers.destroy)

module.exports = UserRouter;