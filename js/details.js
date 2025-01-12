
let data = JSON.parse(localStorage.getItem("data"));
let id = localStorage.getItem("details");
let product = data.items.filter((item) => item.id == id);
document.addEventListener("DOMContentLoaded", () => {
   addToui(document.querySelector(".trending"), product);
   ui(
      document.querySelector(".may-like"),
      data.items.filter((item) => item.like)
   );
});

function addToui(ele, data) {
   let productItems = data.map((item) => {
      let { img, head, price, oldPrice, id, text } = item;
      return `
      <div class="col-12 mb-3">
      <div class="d-flex">
         <div class="box">
            <img class="img-fluid" src="${img}" alt="${head}" />
         </div>
         <div class="ps-3 mt-3">
            <h3 class="mb-2">${head}</h3>
            <span class="text-muted">
               price : $${price}
               <span
                  class="ps-1 clr-browse text-decoration-line-through"
               >
                  $ ${oldPrice}
               </span>
            </span>
            <div>
               <div class="mt-2 m-w-500">
                  ${text}
               </div>
               <div class="mt-2 m-w-500">
                  ${text}
               </div>
            </div>
         </div>
      </div>
   </div>
      `;
   });
   ele.innerHTML = productItems;
}
