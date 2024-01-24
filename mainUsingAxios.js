const instanceAxios = axios.create({
    baseURL: 'https://api.thecatapi.com/v1'
});
instanceAxios.defaults.headers.common['X-API-KEY'] = 'live_Wd3AwYuFZGxxEioUKOxems72lcmbT7zlZLwTrrST64OTlnR9NEOAzxDKkRNQoh4O';

const spanError = document.getElementById('gatosError');

async function loadRandomGatos(){
  const {data, status} = await instanceAxios.get('/images/search', {
      params:{
        limit: '3'
      }
  });

  if(status===200){
    // console.log('aleatorios');
    // console.log(data);
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2'); 

    img1.src = data[0].url;
    img2.src = data[1].url;

    const bt1 = document.getElementById('btn1Save');
    const bt2 = document.getElementById('btn2Save');
    bt1.onclick = () => (saveCatFav(data[0].id));
    bt2.onclick = () => (saveCatFav(data[1].id));
  }else{
    alert('error cargando');
    spanError.innerHTML = "Error: " + status;
  }
}
async function loadFavGatos(){
  const {data, status} = await instanceAxios.get('/favourites');

  try {
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
    spanError.innerHTML = "Error: " + error + "||" + status;
  } 
}  
async function saveCatFav(id){
    const {data, status} = await instanceAxios.post('/favourites', {
        image_id: id,
    });
    if(status!==200){
      spanError.innerHTML = "Error: " + status;
    }
  loadFavGatos();
}

async function deleteFavCat(id){
  const {data, status} = await  instanceAxios.delete(`/favourites/${id}`);

  if(status!==200) {
    spanError.innerHTML = "Error: " + status  + " " + data.message;
  } 
  loadFavGatos();
}
async function uploadFile (){
  const form = document.getElementById('uploadingForm');
  const formData = new FormData(form);
  const {data, status} = await instanceAxios.post('/images/upload', formData, {
    "Content-Type": "multipart/form-data"
  });
  console.log('subiendo archivo');
  console.log(formData.get('file'));
  saveCatFav(data.id);
}

loadRandomGatos();
loadFavGatos();

  





