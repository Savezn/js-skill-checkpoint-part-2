const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
// 1. ให้กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50 //filter

const getScoresOver50 = (array) => {
  return array.filter((num) => num.score > 50);
};

const scoresOver50 = getScoresOver50(students);
console.log(scoresOver50);

// -------------------------------------------------------
// 2. ให้เพิ่มคะแนนนักเรียนแต่ละคนที่ผ่านการกรองในข้อหนึ่ง 10% //map

const plusTenPercent = (array) => {
  return array.map((num) => (num.score += (num.score * 10) / 100));
};

const newScores = plusTenPercent(scoresOver50);
console.log(newScores);

// -------------------------------------------------------
// 3. ให้หาผลรวมของคะแนนทั้งหมดจากข้อ 2 //reduce

const getTotalScores = (array) => {
  return array.reduce((acc, cur) => acc + cur, 0);
};

const totalScores = getTotalScores(newScores);
console.log(totalScores);

// -------------------------------------------------------
// 4. ให้นำคะแนนที่รวมแล้ว มาแสดงบนหน้าจอ Console ในรูปแบบ
// "Total score is <ค่าของคะแนนที่รวมแล้ว>"` (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)

const convertToString = (value) => {
  return `Total score is ${value}`;
};

const stringResult = convertToString(totalScores);
console.log(stringResult);

// -------------------------------------------------------
