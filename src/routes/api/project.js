import express from 'express';
import projectsController from '#src/controllers/projectsController'
import authMiddleware from '../../middleware/middleware';

const router = express.Router();

router.get('/', authMiddleware, projectsController.allProjects);
router.get('/:id', authMiddleware, projectsController.oneProject);
router.post('/', authMiddleware, projectsController.createProject);
router.put('/:id', authMiddleware, projectsController.updateProject);
router.patch('/:id', authMiddleware, projectsController.patchProject);
router.delete('/:id', authMiddleware, projectsController.removeProject);

export default router;