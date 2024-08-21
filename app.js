function removeElement(arr, item) {
  let index = arr.indexOf(item);

  if (index !== -1) {
    arr.splice(index, 1);
  }

  return arr;
}

let array = [];
let input;

for (let i = 0; i < 5; i++) {
  input = parseInt(prompt("Введіть елемент масиву номер #" + (i + 1)));

  if (!isNaN(input)) {
    array.push(input);
  } else {
    alert("Ви ввели не числове значення, воно буде пропущене.");
  }
}

let removeIt = parseInt(prompt("Який елемент ви хочете видалити?"));

let newArray = removeElement(array, removeIt);

console.log(newArray);
