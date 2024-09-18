import { Request, Response } from 'express';
import { quizzes } from '../data';
import { Quiz } from '../models/Quiz';
import { v4 as uuidv4 } from 'uuid';

// Create a new quiz
export const createQuiz = (req: Request, res: Response) => {
    const { title, questions } = req.body;
    if (!title || !questions || !questions.length) {
        return res.status(400).json({ error: 'Invalid quiz data' });
    }

    const newQuiz: Quiz = {
        id: uuidv4(),
        title,
        questions
    };

    quizzes.push(newQuiz);
    res.status(201).json(newQuiz);
};

// Get a quiz by ID
export const getQuiz = (req: Request, res: Response) => {
    const { quizId } = req.params;
    const quiz = quizzes.find(q => q.id === quizId);

    if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
    }

    const questionsWithoutAnswers = quiz.questions.map(q => ({
        id: q.id,
        text: q.text,
        options: q.options
    }));

    res.json({ id: quiz.id, title: quiz.title, questions: questionsWithoutAnswers });
};
