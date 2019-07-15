const privateKey = '1c6597085b2ee3129c0154e5479cced5e9d570de',
       publicKey = 'a539ba370aebba43721a40ffbdc3af79',

	  content = document.getElementById('content'),
	  search = document.getElementById('search');

const getConnection = () => {
  const ts = Date.now(),
    hash = md5(ts + privateKey + publicKey),
    URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(URL)
      .then(response => response.json())
      .then(response =>{
        response.data.results.forEach(e=>{
          drawHero(e);
        });
      })
      .catch(e => console.log(e));
}

const drawHero = e =>{
  const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`;
  const hero =`
    <div class="hero ed-item l-1-3">
      <h3>${name}</h3>
      <div class="hero-img">
        <img class="thumbnail" src="${image}">
        <p class="description">${e.description}</p>
      </div>
    </div>
  `;
  content.insertAdjacentHTML('beforeEnd', hero);
};


const searchHero = name => {
    const ts = Date.now(),
    hash = md5(ts + privateKey + publicKey),
    hero = encodeURIComponent(name),
    URL = `http://gateway.marvel.com/v1/public/characters?name=${hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(URL)
      .then(response => response.json())
      .then(response =>{
        response.data.results.forEach(e => {
          drawHero(e);
        });
      })
      .catch(e => console.log(e));
};

search.addEventListener('keyup', e =>{
  if (e.KeyCode === 13) {
   searchHero(e.target.value.trim());
   //alert('personaje :'+e.target.value.trim());
 }else {

    alert('no recive enter');

 }

});

getConnection();
