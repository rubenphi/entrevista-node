import { Router } from 'express';
import { getEntrevista, getEntrevistaById, createEntrevista, updateEntrevista, deleteEntrevista } from '../controllers/index.controller';
const router = Router();
router.get('/entrevista', getEntrevista);
router.get('/entrevista/:id', getEntrevistaById);
router.post('/entrevista', createEntrevista);
router.put('/entrevista/:id', updateEntrevista);
router.delete('/entrevista/:id', deleteEntrevista);

export default router;
