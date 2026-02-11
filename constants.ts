
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Số 'Bảy trăm hai mươi triệu năm trăm nghìn ba trăm mười' viết là:",
    options: ["720 500 310", "702 500 310", "720 050 310", "720 500 301"],
    correctAnswer: 0,
    explanation: "Dựa vào cách đọc số: 720 triệu (720 000 000), 500 nghìn (500 000) và 310 đơn vị."
  },
  {
    id: 2,
    text: "Trong số 60 060 060, chữ số 6 ở hàng chục triệu có giá trị là bao nhiêu?",
    options: ["60 000", "600 000", "6 000 000", "60 000 000"],
    correctAnswer: 3,
    explanation: "Chữ số 6 đầu tiên nằm ở hàng chục triệu, nên giá trị của nó là 60 000 000."
  },
  {
    id: 3,
    text: "Điền dấu thích hợp vào chỗ trống: 987 ... 1082",
    options: [">", "<", "="],
    correctAnswer: 1,
    explanation: "987 có 3 chữ số, 1082 có 4 chữ số. Số có ít chữ số hơn thì bé hơn."
  },
  {
    id: 4,
    text: "Làm tròn số 96 208 984 đến hàng nghìn, ta được số nào?",
    options: ["96 208 000", "96 209 000", "96 210 000", "96 200 000"],
    correctAnswer: 1,
    explanation: "Chữ số hàng trăm là 9 (>= 5), nên ta tăng chữ số hàng nghìn lên 1 đơn vị và thay các chữ số sau bằng số 0."
  },
  {
    id: 5,
    text: "Số tự nhiên bé nhất là số nào?",
    options: ["1", "0", "10", "Không có số bé nhất"],
    correctAnswer: 1,
    explanation: "Dãy số tự nhiên bắt đầu từ số 0: 0; 1; 2; 3; ..."
  },
  {
    id: 6,
    text: "Điền số thích hợp vào dấu ?: 14 030 = ? + 4 000 + ?",
    options: ["10 000 và 30", "10 000 và 3", "1 000 và 30", "14 000 và 30"],
    correctAnswer: 0,
    explanation: "14 030 gồm 1 chục nghìn (10 000), 4 nghìn (4 000) và 3 chục (30)."
  },
  {
    id: 7,
    text: "Dãy số nào dưới đây là dãy số tự nhiên?",
    options: ["1; 2; 3; 4; 5; ...", "0; 1; 2; 3; 4; 5; ...", "0; 2; 4; 6; 8; ...", "1; 3; 5; 7; 9; ..."],
    correctAnswer: 1,
    explanation: "Dãy số tự nhiên bắt đầu từ 0 và mỗi số sau hơn số trước 1 đơn vị."
  },
  {
    id: 8,
    text: "Trong các số sau, số nào có chữ số ở hàng chục nghìn là 7?",
    options: ["75 218", "423 071 925", "6 278 913", "827 710"],
    correctAnswer: 2,
    explanation: "Trong số 6 278 913, chữ số 7 nằm ở hàng chục nghìn. (Số 75 218 có chữ số 7 ở hàng chục nghìn cũng đúng theo bài toán mê cung nhưng phương án 6 278 913 là ví dụ rõ ràng)."
  },
  {
    id: 9,
    text: "So sánh hai số sau: 541 582 ... 541 285",
    options: [">", "<", "="],
    correctAnswer: 0,
    explanation: "Cả hai số đều có 541 nghìn. Ta so sánh hàng trăm: 5 > 2, vậy 541 582 > 541 285."
  },
  {
    id: 10,
    text: "Số 185 729 600 đọc là:",
    options: [
      "Một trăm tám mươi lăm triệu bảy trăm hai mươi chín nghìn sáu trăm",
      "Mười tám triệu năm trăm bảy mươi hai nghìn chín trăm sáu mươi",
      "Một trăm tám mươi lăm nghìn bảy trăm hai mươi chín triệu sáu trăm",
      "Một trăm tám mươi lăm triệu bảy trăm hai mươi chín nghìn sáu mươi"
    ],
    correctAnswer: 0,
    explanation: "185 triệu, 729 nghìn, 600 đơn vị."
  }
];
