import { Request, Response } from 'express';
import { quizzes, results } from '../data';
import { Answer, Result } from '../models/Quiz';
import { v4 as uuidv4 } from 'uuid';

// Submit an answer
export const submitAnswer = (req: Request, res: Response) => {
    const { quizId, questionId, selected_option, user_id } = req.body;

    const quiz = quizzes.find(q => q.id === quizId);
    if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
    }

    const question = quiz.questions.find(q => q.id === questionId);
    if (!question) {
        return res.status(404).json({ error: 'Question not found' });
    }

    const isCorrect = question.correct_option === selected_option;
    const answer: Answer = { question_id: questionId, selected_option, is_correct: isCorrect };

    let userResult = results.find(r => r.quiz_id === quizId && r.user_id === user_id);
    if (!userResult) {
        userResult = { quiz_id: quizId, user_id, score: 0, answers: [] };
        results.push(userResult);
    }

    userResult.answers.push(answer);
    if (isCorrect) userResult.score++;

    res.json({ is_correct: isCorrect, correct_option: isCorrect ? null : question.correct_option });
};

// Get user results for a specific quiz
export const getResult = (req: Request, res: Response) => {
    const { quizId, userId } = req.params;
    const result = results.find(r => r.quiz_id === quizId && r.user_id === userId);

    if (!result) {
        return res.status(404).json({ error: 'Result not found' });
    }

    res.json(result);
};
