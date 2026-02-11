
import React from 'react';
import { Question } from '../types';

interface QuizProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (index: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ question, currentIndex, totalQuestions, onAnswer }) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="p-6 md:p-10 flex flex-col min-h-[500px]">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-blue-600">Câu hỏi {currentIndex + 1} / {totalQuestions}</span>
          <span className="text-sm font-bold text-gray-500">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-blue-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Text */}
      <div className="flex-grow mb-8">
        <h3 className="text-2xl font-bold text-gray-800 leading-tight">
          {question.text}
        </h3>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(idx)}
            className="p-4 text-lg font-semibold text-left rounded-2xl border-2 border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-all duration-200 active:scale-95 shadow-sm"
          >
            <div className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-lg mr-3 shrink-0 text-gray-400 font-bold group-hover:text-blue-500">
                {String.fromCharCode(65 + idx)}
              </span>
              {option}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
