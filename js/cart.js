function addToUi(ele, data) {
   let product = data.map((item, index) => {
      let { img, head, id, price, amount } = item;
      return `<tr>
               <th scope="row">${index + 1}</th>
                  <td width="20%"><img src="${img}" width="20%" height="20%"/></td>
                  <td>${head}</td>
                  <td>${price}</td>
                  <td>
                  <span onclick="dec(${id})">
                     <i class="fa-solid fa-chevron-down"></i>
                  </span>
                     <span>${amount}</span>
                     <span onclick="inc(${id})">
                        <i class="fa-solid fa-chevron-up"></i>
                     </span>
                  </td>
                  <td class="clr-main fw-bold cursor-pointer" onclick="removeItem(${id})">x</td>
            </tr>
      `;
   });
   ele.innerHTML = product.join("");
}

// add to event
document.addEventListener("DOMContentLoaded", () => {
   addToUi(document.querySelector(".table tbody"), cart);
   cart.length > 0 ? totalPrice() : (total = 0);
});
let DataSotrage = localStorage.getItem("data");

let total = localStorage.getItem("total") ? localStorage.getItem("total") : 0;

// increase amount
function inc(id) {
   // filter to get target element
   cart.filter((item) =>
      item.id == id ? (item.amount = item.amount + 1) : ""
   );
   localStorage.setItem("cart", JSON.stringify(cart));

   // update html
   addToUi(document.querySelector(".table tbody"), cart);
   totalPrice();
}


function dec(id) {
   // filter to get target element
   // cart.filter((item) =>
   //    item.id == id ? (item.amount = item.amount - 1) : ""
   // );

   cart.filter(item => {
      if (item.id == id) {
         if (item.amount > 0) {
            return item.amount = item.amount - 1
         }
      }
   })
   localStorage.setItem("cart", JSON.stringify(cart));

   // update html
   addToUi(document.querySelector(".table tbody"), cart);
   totalPrice();
}

function totalPrice() {
   let sum = cart
      .map((item) => item.price * item.amount)
      .reduce((acc, curr) => acc + curr);
   total = sum;
   localStorage.setItem("total", sum);

   document.querySelector(".total span").innerHTML = total;
}

function removeItem(id) {
   cart = cart.filter((item) => item.id !== id);
   localStorage.setItem("cart", JSON.stringify(cart));
   addToUi(document.querySelector(".table tbody"), cart);
   cart.length > 0
      ? totalPrice()
      : (document.querySelector(".total span").innerHTML = 0);
}
