type Question = {
    id: string;
    text: string;
    options: string[];
    correct_option: number;
};

export type Quiz = {
    id: string;
    title: string;
    questions: Question[];
};

export type Answer = {
    question_id: string;
    selected_option: number;
    is_correct: boolean;
};

export type Result = {
    quiz_id: string;
    user_id: string;
    score: number;
    answers: Answer[];
};
