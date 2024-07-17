// ถ้า students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"] และ searchStudent = "John" ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 7

// ถ้า students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"] และ searchStudent = "Andrew" ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1

function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  /////  Linear
  //   let index = -1;
  //   for (const i in students) {
  //     if (students[i] === searchStudent) {
  //       index = i;
  //     }
  //   }
  //   return index;

  ///// Binary
  let left = 0;
  let right = students.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (students[mid] === searchStudent) {
      return mid;
    } else if (students[mid] < searchStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let students = [
  'Andrew',
  'Bobby',
  'Diana',
  'George',
  'Hannah',
  'Isaac',
  'Jasmine',
  'John'
];
let searchStudent = 'John';
console.log(findStudentIndex(students, searchStudent)); // 7

students = ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona'];
searchStudent = 'Andrew';
console.log(findStudentIndex(students, searchStudent)); // -1

// Binary Search มี Big O เป็นเท่าไร เพราะอะไร ให้เขียนอธิบายใน comment แนบมาข้างใต้โค้ดตรงส่วนที่ระบุว่า “ตอบคำถามตรงนี้จ้า”
// ตอบคำถามตรงนี้จ้า
// Binary Search มี ฺBig O เป็น O(log n) - Logarithmic Time
// เพราะ จำนวนรอบจะแปรผันตรงตามขนาดข้อมูลในแบบ logarithm เช่น Array มีสมาชิก 8 ตัว จะใช้การวน Loop สูงสุด log₂8 = 3 รอบ
