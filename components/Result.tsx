
import React, { useState } from 'react';
import { UserAnswer, Question } from '../types';

interface ResultProps {
  userAnswers: UserAnswer[];
  questions: Question[];
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ userAnswers, questions, onRestart }) => {
  const [showReview, setShowReview] = useState(false);
  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const score = (correctCount / questions.length) * 100;

  const getEncouragement = () => {
    if (score === 100) return "Tuyệt vời! Em là thiên tài Toán học! 🌟";
    if (score >= 80) return "Rất tốt! Em nắm kiến thức rất chắc đấy! 👏";
    if (score >= 50) return "Cố gắng lên nhé! Em chỉ cần ôn luyện thêm một chút thôi. 💪";
    return "Đừng nản chí! Hãy ôn lại bài và thử lại nhé. ❤️";
  };

  return (
    <div className="p-8 space-y-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
      {!showReview ? (
        <div className="text-center space-y-6">
          <div className="relative">
            <svg className="w-48 h-48 mx-auto" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8" />
              <circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="8" 
                strokeDasharray={`${282.6 * (score / 100)} 282.6`}
                transform="rotate(-90 50 50)"
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
              <text x="50" y="55" textAnchor="middle" className="text-2xl font-bold fill-gray-800" style={{ fontSize: '18px' }}>
                {score}%
              </text>
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-gray-800">Kết Quả Của Em</h2>
          <p className="text-2xl text-blue-600 font-semibold">{correctCount} / {questions.length} câu đúng</p>
          <p className="text-lg text-gray-600">{getEncouragement()}</p>

          <div className="flex flex-col gap-4 pt-4">
            <button
              onClick={() => setShowReview(true)}
              className="w-full py-4 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors shadow-lg active:scale-95"
            >
              Xem đáp án chi tiết
            </button>
            <button
              onClick={onRestart}
              className="w-full py-4 border-2 border-gray-200 text-gray-600 font-bold rounded-2xl hover:bg-gray-50 transition-colors active:scale-95"
            >
              Quay lại màn hình chính
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center sticky top-0 bg-white py-2 z-10 border-b">
            <h3 className="text-2xl font-bold text-gray-800">Chi tiết đáp án</h3>
            <button 
              onClick={() => setShowReview(false)}
              className="text-blue-500 font-bold hover:underline"
            >
              Quay lại
            </button>
          </div>

          <div className="space-y-6">
            {questions.map((q, idx) => {
              const userAnswer = userAnswers.find(a => a.questionId === q.id);
              return (
                <div key={q.id} className={`p-4 rounded-2xl border-2 ${userAnswer?.isCorrect ? 'border-green-100 bg-green-50' : 'border-red-100 bg-red-50'}`}>
                  <p className="font-bold text-gray-800 mb-2">Câu {idx + 1}: {q.text}</p>
                  <div className="space-y-1 mb-3">
                    <p className="text-sm">
                      <span className="font-semibold">Lựa chọn của em:</span>{' '}
                      <span className={userAnswer?.isCorrect ? 'text-green-600' : 'text-red-600'}>
                        {q.options[userAnswer?.selectedOption ?? 0]}
                      </span>
                    </p>
                    {!userAnswer?.isCorrect && (
                      <p className="text-sm">
                        <span className="font-semibold">Đáp án đúng:</span>{' '}
                        <span className="text-green-600 font-bold">{q.options[q.correctAnswer]}</span>
                      </p>
                    )}
                  </div>
                  <div className="text-sm bg-white p-3 rounded-lg border border-gray-200 text-gray-700 italic">
                    <span className="font-bold not-italic">Giải thích:</span> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={onRestart}
            className="w-full py-4 bg-yellow-500 text-white font-bold rounded-2xl hover:bg-yellow-600 transition-colors shadow-lg mt-4"
          >
            Chơi lại từ đầu
          </button>
        </div>
      )}
    </div>
  );
};

export default Result;
