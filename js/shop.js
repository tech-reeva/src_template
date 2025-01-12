document.addEventListener("DOMContentLoaded", () => {
   fetchApi().then((data) => {
      ui(document.querySelector(".trending"), data.items);
      console.log(data.items);
      ui(
         document.querySelector(".may-like"),
         data.items.filter((item) => item.like)
      );
   });
});

