import { Router } from 'express';
import { createQuiz, getQuiz } from '../controllers/quizController';

const router = Router();

router.post('/quiz', createQuiz);
router.get('/quiz/:quizId', getQuiz);

export default router;
