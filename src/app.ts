import express from 'express';
import quizRoutes from './routes/quizRoutes';
import answerRoutes from './routes/answerRoutes';

const app = express();
app.use(express.json());

app.use('/api', quizRoutes);
app.use('/api', answerRoutes);

export default app;
