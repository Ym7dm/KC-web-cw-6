alert("مرحباً بك في موقعي الذي سيحسب درجتك!!");
let grade = prompt("اكتب درجتك بالأرقام");
console.log(grade);

if (grade >= 90 && grade <= 100) {
  console.log("%cلقد حصلت على امتياز ", "color : green");
} else if (grade >= 80 && grade <= 89) {
  console.log("%cلقد حصلت على جيد جداً", "color : green");
} else if (grade >= 70 && grade <= 79) {
  console.log("%cلقد حصلت على جيد", "color : blue");
} else if (grade >= 60 && grade <= 69) {
  console.log("%cلقد حصلت على مقبول", "color : orange");
} else if (grade >= 50 && grade <= 59) {
  console.log("%cلقد حصلت على ضعيف", "color : orange");
} else if (grade < 50) {
  console.log("%cراسب", "color : red");
}
// جافاسكربت ليست جافااسب
