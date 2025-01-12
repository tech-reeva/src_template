let api = "./js/data.json";
async function fetchApi() {
   let response = await fetch(api);
   let data = await response.json();

   console.log(data);
   localStorage.setItem("data", JSON.stringify(data));
   return data;
}
