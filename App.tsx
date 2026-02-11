
import React, { useState } from 'react';
import { GameState, UserAnswer } from './types';
import { QUESTIONS } from './constants';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startGame = () => {
    setGameState(GameState.QUIZ);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (selectedOption: number) => {
    const question = QUESTIONS[currentQuestionIndex];
    const isCorrect = selectedOption === question.correctAnswer;
    
    const newAnswer: UserAnswer = {
      questionId: question.id,
      selectedOption,
      isCorrect,
    };

    setUserAnswers([...userAnswers, newAnswer]);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState(GameState.RESULT);
    }
  };

  const restartGame = () => {
    setGameState(GameState.INTRO);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-yellow-50 to-blue-100">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-400">
        {gameState === GameState.INTRO && (
          <Intro onStart={startGame} />
        )}
        
        {gameState === GameState.QUIZ && (
          <Quiz 
            question={QUESTIONS[currentQuestionIndex]} 
            totalQuestions={QUESTIONS.length}
            currentIndex={currentQuestionIndex}
            onAnswer={handleAnswer}
          />
        )}

        {gameState === GameState.RESULT && (
          <Result 
            userAnswers={userAnswers} 
            questions={QUESTIONS} 
            onRestart={restartGame}
          />
        )}
      </div>
    </div>
  );
};

export default App;
