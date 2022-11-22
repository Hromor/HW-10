function sum(studentsArray) {
  let firstArray = [];
  for (i = 0; i < studentsArray.length; i++) {
    let innerArrayLength = studentsArray[i].length;
    for (let j = 0; j < innerArrayLength; j++) {
      if (studentsArray[i][j].score != 0 && studentsArray[i][j].date != "") {
        firstArray.push(studentsArray[i][j]);
      }
    }
  } //сделал 1 новый массив, убрав сразу лишние данные студентов,
  //по которым нет данных по дате и очков = 0

  firstArray.sort(function (a, b) {
    return b.score - a.score;
  });
  const maxScore = firstArray[0].score;
  //отфильтровал массив, чтобы показать самый большой элемент

  let newArrayDate = [];
  for (i = 0; i < firstArray.length; i++) {
    if (firstArray[i].score == maxScore) {
      newArrayDate.push(firstArray[i]);
    }
  } //сделал новый массив, чтобы там были только максимальные очки
  newArrayDate.sort(function (a, b) {
    return a.date - b.date;
  }); //отфильтровал массив и вывел самый первый элемент
  console.log(`Поздравляем, ${newArrayDate[0].name}, ты - молодчина!`);
  return `Поздравляем, ${newArrayDate[0].name}, ты - молодчина!`;
}

module.exports = sum;
