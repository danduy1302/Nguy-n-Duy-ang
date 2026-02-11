
import React from 'react';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="p-8 text-center space-y-6">
      <div className="relative inline-block">
        <img 
          src="https://picsum.photos/seed/math/400/200" 
          alt="Toán lớp 5" 
          className="rounded-2xl shadow-lg border-4 border-white"
        />
        <div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold py-2 px-4 rounded-full rotate-12 shadow-md">
          Học kì 1
        </div>
      </div>
      
      <div>
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Toán Lớp 5</h1>
        <h2 className="text-xl font-semibold text-gray-700">Ôn Tập Số Tự Nhiên & Phép Tính</h2>
      </div>

      <p className="text-gray-600 max-w-md mx-auto">
        Chào mừng các em đến với trò chơi ôn tập Toán! 
        Hãy cùng vượt qua 10 câu hỏi trắc nghiệm thú vị để kiểm tra kiến thức của mình nhé.
      </p>

      <button 
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-yellow-500 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-yellow-600 shadow-xl active:scale-95"
      >
        <span className="text-2xl uppercase tracking-widest">Bắt đầu chơi!</span>
      </button>

      <div className="flex justify-center gap-4 pt-4">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">10 Câu hỏi</span>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Xem kết quả</span>
      </div>
    </div>
  );
};

export default Intro;
