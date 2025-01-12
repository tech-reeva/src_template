let signup = document.querySelector("#signup");
let input = document.querySelector("#sign-email");
let password = document.querySelector("#sign-password");
let passwordHelp = document.querySelector("#password-help");
let emailHelp = document.querySelector("#email-help");

if (signup) {
   signup.addEventListener("click", (e) => {
      e.preventDefault();

      if (input.value == "" || password.value == "") {
         console.log("there is no password or email");
      } else if (password.value.length < 3) {
         console.log("password should be bigger than 7");
         passwordHelp.innerHTML = "password should be bigger than 3";
         passwordHelp.classList.add("clr-main");
      } else {
         // add to local storage
         localStorage.setItem("username", input.value);
         localStorage.setItem("password", password.value);
         window.location.href="login.html"
      }
   });
}
