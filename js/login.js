let passwordLogin = document.querySelector("#password-login");
let emailLogin = document.querySelector("#email-login");
let btnLogin = document.querySelector("#btn-login");

if (btnLogin) {
   btnLogin.addEventListener("click", (e) => {
      e.preventDefault();
      if (
         emailLogin.value == localStorage.getItem("username") &&
         passwordLogin.value == localStorage.getItem("password")
      ) {
         localStorage.setItem("login", "true");
         document.querySelector(".login").style.display = "none";
         document.querySelector(".user").style.display = "block";
         document.querySelector(".user a").innerHTML =
            localStorage.getItem("username");
         window.location.href = "shop.html";
      } else {
         alert("password or gmail is wrong");
      }
   });
}
