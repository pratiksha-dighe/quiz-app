import { Router } from 'express';
import { submitAnswer, getResult } from '../controllers/answerController';

const router = Router();

router.post('/answer', submitAnswer);
router.get('/result/:quizId/:userId', getResult);

export default router;
