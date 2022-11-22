const sum = require("./hw-10-2");
let studentsArray = [];

//Вариант 1
describe("Тестирование функции sum вариант 1", () => {
  it("Граница значений >= 30", () => {
    expect(sum(studentsArray)).toBe("Поздравляем, Ivan, ты - молодчина!");
  });
});
//Вариант 2
describe("Тестирование функции sum вариант 2", () => {
  it.each([[studentsArray, "Поздравляем, Ivan, ты - молодчина!"]])(
    //не получается вставить другие массивы, не знаю почему
    "Массив %p и полученный ответ %p",
    (a, result) => {
      //не понимаю, почему "a" оказалось не объявленной
      //почему если подставляю вместо "а" "studentsArray", то перестаёт работать

      expect(sum(studentsArray)).toBe(result);
    }
  );
});
//Вариант 3
describe("Тестирование функции sum", () => {
  it.each`
    studentsArray    | result
    ${studentsArray} | ${"Поздравляем, Ivan, ты - молодчина!"}
  `(
    //не получается вставить другие массивы, не знаю почему
    `Передаём значения $a результаты представлены в $result`,
    ({ a, result }) => {
      //не понимаю, почему "a" оказалось не объявленной
      //почему если подставляю вместо "а" "studentsArray", то перестаёт работать
      expect(sum(studentsArray)).toEqual(result);
    }
  );
});

studentsArray = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];
