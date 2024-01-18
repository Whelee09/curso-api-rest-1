//query parameters ?limit=3
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?api_key=live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O&limit=3'

//const API_KEY = live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O;
const API_URL_FAV = 'https://api.thecatapi.com/v1/favourites?api_key=live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O'
const spanError = document.getElementById('gatosError');

async function loadRandomGatos(){
  try {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();

  console.log('aleatorios');
  console.log(data);

  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2'); 

  img1.src = data[0].url;
  img2.src = data[1].url;
  } catch (error) {
    spanError.innerHTML = "Error: " + error;
  }
}
async function loadFavGatos(){
  const res = await fetch(API_URL_FAV);
  const data = await res.json();
  console.log('fav');
  console.log(data);

  // no me esta agarradno el objeto res.... ayuda??? por lo que manejo las excepciones con try catch
  if(res.status !== 200){
    spanError.innerHTML = "Error: " +  data.message;
  }else{
    console.log('ando por aqui');
    
  }
}  


async function saveCatFav(){
  const res = await fetch(API_URL_FAV, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      image_id: '7h3',
      //sub_id:"optional unique id of your user"
    })
  })
}

loadRandomGatos();
loadFavGatos();




//sin async-await
// function refresh(){
//   fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//     const img = document.querySelector('img');
//     img.src = data[0].url;
//   });
// } 




// documentacion para hacer post a fav
// Create a Favourite
// To allow your Users to Favourite a particular Image, you need to create a 'Favourite' via POST ./favourites, passing:

// {
//     "image_id":"id of the image",
//     "sub_id":"optional unique id of your user"
// }
// This will return:

// {
//     "id":"unique-id-of-the-new-favourite"
// }