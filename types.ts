
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
}

export enum GameState {
  INTRO = 'INTRO',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT'
}
