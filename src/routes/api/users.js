import express from 'express';
import usersController from '#src/controllers/usersController'
import authMiddleware from '../../middleware/middleware';


const router = express.Router();


router.get('/:id', authMiddleware, usersController.allUsers);

router.post('/', usersController.createUser);

export default router;