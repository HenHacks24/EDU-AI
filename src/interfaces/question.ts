export interface Question {
    subject: string;
    prompt: string;
    questionType: string;
    question: string;
    options: string[];
    correctAnswer: string;
    profFeedback: string;
}
