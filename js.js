/*let userName = prompt("Как тебя зовут?");
document.write(userName.toUpperCase());*/

//toUpperCase() -> в верхний регистр
//toLowerCase() -> в нижний регистр
//trim() -> удалит все лишние пробелы в начале и в конце
//repeat(4) -> повторит столько раз сколько указали число
//concat("Hello","again") -> склеивает слова между ними
//replace("william", "john") -> заменяет одно слово на другое
//includes('быть') -> проверяет слово он есть там или нет. и показывает только true/false
//indexOf('W') -> показывает буква ви это какой индекс в май стринг
//substring(0,2) -> делает отрезок слова (начиная с 0 индекса до 2)

/*let userName = prompt("Как тебя зовут?");
document.write(userName.toLowerCase());*/


/*let userName = "kasiet";
console.log(userName.repeat(40));*/

/*let userName = "kasiet";
console.log(userName.concat("Hello","again"));*/

/*let myString = "Hello William";
console.log(myString.replace("William", "John"));*/

/*let myString = "Быть или не быть вот в чем вопрос";
console.log(myString.includes('Бытьь'));*/

/*let myString = "William";
console.log(myString.indexOf('m'));*/


/*let myString = "William";
console.log(myString.substring(0, 2));*/

/*let myString = "Hello William";
console.log(myString.slice(0, 4));*/


let userName = prompt("Введите номер кредитной карты");
document.write("Номер вашей карты: **********");
document.write(userName.slice(8, 12));





