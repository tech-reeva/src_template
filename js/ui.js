function ui(ele, data) {
   let product = data.map((item) => {
      let { img, head, id, price, oldPrice } = item;
      return `
      <div class="pe-2 ps-2 mb-5 col col-lg-3 col-md-4 col-sm-6" data-proudct="${id}">
      <div class="box position-relative overflow-hidden">
         <div class="overflow-hidden">
            <img
               class="img-fluid"
               src="${img}"
               alt=""
            />
         </div>
         <div class="overlay-img position-absolute">
            <div class="add-cart icon p-3 ${
               cart.find((ele) => ele.id == id) ? "active" : ""
            }" data-id="${id}">
               <i class="fa-solid fa-cart-shopping" data-id="${id}"></i>
            </div>
            <div class="icon p-3 add-fav ${
               fav.find((ele) => ele.id == id) ? "active" : ""
            }" data-id="${id}">
               <i class="fa-solid fa-heart fav-icon" data-id="${id}"></i>
            </div>
            <div class="icon p-3" onclick="addDetails(${id})">
               <i class="fa-solid fa-circle-info"></i>
            </div>
         </div>
      </div>
      <div class="text-center mt-3">
         <p class="mb-0">${head}</p>
         <span class="text-muted"
            >${price}
            <span
               class="ps-1 clr-browse text-decoration-line-through"
               >${oldPrice}</span
            ></span
         >
      </div>
   </div>
      `;
   });
   if (data.length == 0) {
      ele.innerHTML = `<div class="text-center fw-bold">
         <h2>there is no product go to <a href="shop.html" class="text-primary">shop now</a></h2>
      </div>`   
   } else {
      ele.innerHTML = product.join(" ");
   }
}

function addDetails(id) {
   localStorage.setItem("details", id);
   window.location.href = "details.html";
}
