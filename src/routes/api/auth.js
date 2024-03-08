import express from 'express';
import authController from '#src/controllers/authController'


const router = express.Router();
const jsonMiddleware = express.json();


// v1/api/auth/login
router.post('/login', jsonMiddleware, authController.login);

export default router;