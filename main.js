//query parameters ?limit=3
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O'
//https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY
//const API_KEY = live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O;

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
  console.log(data);
  const img = document.querySelector('img');
  img.src = data[0].url;
} 



refresh();
//}