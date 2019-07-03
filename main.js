let abcd = document.querySelector(".about__paragraph-js");

console.log(abcd.innerHTML);

abcd.innerHTML = "Podmiana treści przez JavaScript";

if ("javascript" != "java") {
  console.log("to prawdza");
}

let name = prompt("Podaj swoje imię:");
let age = prompt("Podaj ile masz lat:");

function welcome(name, age) {
  let hello = document.querySelector(".header__title");
  hello.innerHTML = ('Cześć ' + name + ' masz ' + age);
}

welcome(name, age);