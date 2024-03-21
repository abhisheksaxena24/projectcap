let container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let container2 = document.querySelector(".container");

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let timeNow = new Date().getHours();
console.log(timeNow);
let greeting = time >=5 && timeNow < 12 ? 
"Good Morning" : timeNow >= 12 && timeNow < 18 ?
"Good Afternoon" : "Good Evening"
console.log(greeting);
container2.animate = `<h1>${greeting}</h1>`;