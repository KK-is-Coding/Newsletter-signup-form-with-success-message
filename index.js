const form = document.querySelector('form')
const card_1 = document.querySelector(".card")
const card_2 = document.querySelector(".card-2")
const enteredMail = document.getElementById("enteredMail")
const errorMessage = document.getElementById("errorMessage")
var validationEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const submit = document.querySelector('.submit')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
});

submit.addEventListener("click", function () {
    if (input.value.match(validationEmail)) {
        enteredMail.textContent = input.value;
    }

    else {
        errorMessage.textContent = "Valid email required"
        errorMessage.style.color = "hsl(4, 100%, 67%)";
        errorMessage.style.fontWeight = "bold"
        input.style.borderColor = "red";
        input.style.color = "red";
        input.style.background = "hsl(351, 93%, 89%)"
    }
})


