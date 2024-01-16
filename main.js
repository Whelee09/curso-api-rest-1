//query parameters ?limit=3
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3'



//sin async-await
// function refresh(){
//   fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//     const img = document.querySelector('img');
//     img.src = data[0].url;
//   });
// }  

async function refresh(){
  const res = await fetch(API_URL);
  const data = await res.json();
  const img = document.querySelector('img');
  img.src = data[0].url;
} 



refresh();
//}