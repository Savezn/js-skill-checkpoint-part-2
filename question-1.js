const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
const allPeople = [...techupPeople, ...techcoolPeople];

function getUnder20(array) {
  return array.filter((item) => item.age < 20);
}

const peopleUnder20 = getUnder20(allPeople);
console.log(peopleUnder20);
