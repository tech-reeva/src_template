let login = document.querySelector(".login");
let user = document.querySelector(".user");
let userLogin = document.querySelector(".user a");

let logOut = document.querySelector(".user .logout");
if (logOut) {
   logOut.addEventListener("click", () => {
      login.style.display = "block";
      user.style.display = "none";
      localStorage.setItem("login", "false");
   });
}

if (localStorage.getItem("login")) {
   if (localStorage.getItem("login") == "true") {
      login.style.display = "none";
      userLogin.innerHTML = localStorage.getItem("username");
      user.style.display = "block";
   } else {
      user.style.display = "none";
   }
} else {
   user.style.display = "none";
}

let cart = [];

let cartStorage = localStorage.getItem("cart");
if (cartStorage) {
   cart = JSON.parse(cartStorage);
} else {
   cart = [];
}

let favStorage = localStorage.getItem("fav");
if (favStorage) {
   fav = JSON.parse(favStorage);
} else {
   fav = [];
}
// add event listner
document.addEventListener("click", (e) => {
   let data = JSON.parse(localStorage.getItem("data"));
   // add event for add Cart btn
   if (
      e.target.classList.contains("add-cart") |
      e.target.classList.contains("fa-cart-shopping")
   ) {
      if (localStorage.getItem("username")) {
         if (cart.find((item) => item.id == e.target.dataset.id)) {
            e.target.classList.remove("active");
            e.target.parentElement.classList.remove("active");

            let newCart = cart.filter((item) => item.id != e.target.dataset.id);
            cart = newCart;
            localStorage.setItem("cart", JSON.stringify(cart));
         } else {
            let dataTarget = data.items.filter(
               (item) => item.id == e.target.dataset.id
            );

            cart.push(...dataTarget);
            localStorage.setItem("cart", JSON.stringify(cart));

            e.target.classList.add("active");
            e.target.parentElement.classList.add("active");
         }
      } else {
         alert("login please");
      }
   }
   if (
      e.target.classList.contains("add-fav") |
      e.target.classList.contains("fav-icon")
   ) {
      if (localStorage.getItem("username")) {
         if (fav.find((item) => item.id == e.target.dataset.id)) {
            // add class
            e.target.classList.remove("active");
            e.target.parentElement.classList.remove("active");

            let newfav = fav.filter((item) => item.id != e.target.dataset.id);
            fav = newfav;
            localStorage.setItem("fav", JSON.stringify(fav));
            if (document.querySelector(".may-like")) {
               ui(document.querySelector(".may-like"), fav);
            }
         } else {
            let newFav = data.items.filter((item) =>
               item.id == e.target.dataset.id ? (item.fav = true) : ""
            );
            // add to data
            fav.push(...newFav);
            localStorage.setItem("fav", JSON.stringify(fav));
            // add class
            e.target.classList.add("active");
            e.target.parentElement.classList.add("active");
         }
      } else {
         alert("login please");
      }
   }
});

if (document.querySelector(".user .down")) {
   document.querySelector(".user .down").addEventListener("click", () => {
      document
         .querySelector(".user .position-absolute")
         .classList.toggle("show");
   });
}

/* start Dark Mode */
let btnDark = document.querySelector(".dark-mode");
let themes = localStorage.getItem("mode")
   ? localStorage.getItem("mode")
   : "white";
btnDark.addEventListener("click", () => {
   checkMode();
});

function checkMode() {
   if (themes == "dark") {
      document.documentElement.style.setProperty("--clr-body", "#252525");
      document.documentElement.style.setProperty("--text-body", "#fff");
      document.documentElement.style.setProperty("--clr-second", "#202020");
      document.documentElement.style.setProperty("--clr-light", "#000");
      document.documentElement.style.setProperty("--clr-dark-21", "fafafa");
      document.documentElement.style.setProperty("--clr-intro", "#000");
      document.documentElement.style.setProperty("--clr-navbar", "#fafafa");
      document.documentElement.style.setProperty("--cart-box", "#202020");
      document.querySelector(".navbar-brand img").src='./img/footer-logo.webp';
      if(document.querySelector(".table")) {
         document.querySelector('.table').classList.add("table-dark");
      }
      themes = "white";
      localStorage.setItem("mode", "dark");
   } else {
      document.documentElement.removeAttribute("style");
      themes = "dark";
      localStorage.setItem("mode", "white");
      document.querySelector(".navbar-brand img").src='./img/logo.webp'

   }
}

document.addEventListener("DOMContentLoaded", () => {
   checkMode();
   /* end Dark Mode */
   
   let dataDb = JSON.parse(localStorage.getItem("data")).items;
   let tabs = document.querySelector(".tabs");
   let unique = new Set(["All", ...dataDb.map(ele => ele.category)]);
   
   
   if (tabs) {
      let tab = [...unique].map(li => `<li class="${li == "All" ? "active" : ""} pe-4 ps-4 pb-2 fw-bold text-center" data-cate="${li}" onclick="showTab('${li}')">${li}</li>`)
      tabs.innerHTML = tab.join(" ");
   }
});

function showTab(li) {
   let newCate = dataDb.filter(item => item.category == li);
   document.querySelectorAll(".tabs li").forEach(ele => ele.classList.remove("active"))
   document.querySelector(`[data-cate='${li}']`).classList.add("active")
   if (li == "All") {
      ui(document.querySelector(".trending"), dataDb);

   } else {
      ui(document.querySelector(".trending"), newCate);


   }
}