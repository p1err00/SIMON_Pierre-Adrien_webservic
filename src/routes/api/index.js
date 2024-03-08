import express from 'express';
import ping from './ping.js';
import auth from './auth.js';
import users from './users.js';
import project from './project.js';

const router = express.Router();

// api/v1/
router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});



// api/v1/ping 
router.use('/ping', ping);
router.use('/auth', auth);
router.use('/users', users);
router.use('/project', project);


export default router;
