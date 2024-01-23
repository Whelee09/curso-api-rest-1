//query parameters ?limit=3
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?api_key=live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O&limit=2'

//const API_KEY = live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O;
const API_URL_FAV = 'https://api.thecatapi.com/v1/favourites?api_key=live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O'
const API_URL_DELFAV = (id) => `https://api.thecatapi.com/v1/favourites/${id}`
const API_URL_UPLOAD= 'https://api.thecatapi.com/v1/images/upload';
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

  const bt1 = document.getElementById('btn1Save');
  const bt2 = document.getElementById('btn2Save');
  bt1.onclick = () => (saveCatFav(data[0].id));
  bt2.onclick = () => (saveCatFav(data[1].id));

  } catch (error) {
    spanError.innerHTML = "Error: " + error;
  }
}
async function loadFavGatos(){
  console.log('fav');
  const res = await fetch(API_URL_FAV);

  try {
    const data = await res.json();
    console.log(data);

    const section = document.getElementById('favCats')
    section.innerHTML = "";
    const flexContainer = document.createElement('div');
    const h2Fav = document.createElement('h2');
    const h2FavText = document.createTextNode('michis fav');
    flexContainer.classList.add('flexContainer');
    h2Fav.appendChild(h2FavText);

    data.forEach(gato => {
      const article = document.createElement('article');
      article.classList.add('containerArticle');
      const img = document.createElement('img');
      img.classList.add('imagenes')
      const btnDelFav = document.createElement('button')
      const btnText = document.createTextNode('Sacar al michi de fav');
      console.log(gato.image_id);
      btnDelFav.onclick = () => deleteFavCat(gato.id);
      

      btnDelFav.appendChild(btnText);
      img.src = gato.image.url;
      img.width = 250;
      article.appendChild(img);
      article.appendChild(btnDelFav);
      flexContainer.appendChild(article);
      section.appendChild(h2Fav);
      section.appendChild(flexContainer);

    });
  } catch (error) {
    spanError.innerHTML = "Error: " + res.status + "||" + error;
  } 
}  
///aplication/type
//CONTENT TYPE
//multipart/
async function saveCatFav(id){
  console.log('fuardando gatos fav');
  const res = await fetch(API_URL_FAV, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      image_id: id,
    })
  })
  loadFavGatos();
}


//form data????
async function deleteFavCat(id){
  const res = await fetch(API_URL_DELFAV(id), {
    method: 'DELETE',
    headers:{
      "x-api-key": `live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O`
      }
  });
  try {
    
  } catch (error) {
    console.log(error);
    spanError.innerHTML = "Error: " + error;
    console.log(res.status);
  }
  loadFavGatos();
}
async function uploadFile (){
  const form = document.getElementById('uploadingForm');
  const formData = new FormData(form);

  const res = await fetch(API_URL_UPLOAD, {
    method: 'POST',
    headers: {
      "x-api-key": `live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O`
    },
    body:formData,
  });
  const data = await res.json();
  saveCatFav(data.id);

  console.log(formData.get('file'));
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
