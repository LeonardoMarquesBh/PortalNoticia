/*
var dados = {
    "noticias": [
        {
            "id": 1,
            "titulo": "Titulo da noticia fresquinha",
            "imagem": "https://source.unsplash.com/random/150x150?sig=1",
            "fonte": "Universo Online",
            "data": "08/05/2020",
            "resumo": "orem ipsum dolor sit, amet consectetur adipisicing elit. Sequi suscipit corporis est iure distinctio modi, atque fuga odit quasi dicta omnis veritatis enim. Commodi, vero.",
            "url": "https://www.uol.com.br",
        },

        { 
            "id": 2,
            "titulo": "Titulo da noticia Fake",
            "imagem": "https://source.unsplash.com/random/150x150?sig=2",
            "fonte": "Ig Online",
            "data": "10/05/2020",
            "resumo": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi suscipit corporis est iure distinctio modi, atque fuga odit quasi dicta omnis veritatis enim. Commodi, vero.",
            "url": "https://www.uol.com.br",
        }, 

        { 
            "id": 3,
            "titulo": "Titulo da noticia Bombástica",
            "imagem": "https://source.unsplash.com/random/150x150?sig=3",
            "fonte": "G1 - Globo.com",
            "data": "16/05/2020",
            "resumo": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi suscipit corporis est iure distinctio modi, atque fuga odit quasi dicta omnis veritatis enim. Commodi, vero.",
            "url": "https://www.uol.com.br",
        },

        { 
            "id": 4,
            "titulo": "Titulo da noticia Sem importância",
            "imagem": "https://source.unsplash.com/random/150x150?sig=4",
            "fonte": "Carta Capital",
            "data": "20/05/2020",
            "resumo": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi suscipit corporis est iure distinctio modi, atque fuga odit quasi dicta omnis veritatis enim. Commodi, vero.",
            "url": "https://www.uol.com.br",
        }
    ]
};

var init = function (){
    var elemNoticias = document.querySelector('main.conteudo');
    var textoHTML = '';
  
    for (i=0; i<dados.noticias.length; i++) {
      var noticia = dados.noticias[i];
      textoHTML = textoHTML + `
          <div class="box-noticia">
              <img class="thumbnail" src="${noticia.imagem}" alt="">
              <h3 class="titulo">${noticia.titulo}</h3>
              <div><span class="data">${noticia.data}</span> - <span class="fonte">${noticia.fonte}</span></div>
              <p class="texto">${noticia.resumo}</p>
              <div class="barra-icones"></div>
          </div>
      `
    }
  
    elemNoticias.innerHTML = textoHTML;
  }
  */

  const API_KEY = '05c5270040fa4d92bdef3c3924e0cb50';
   
  function exibeNoticias(){
      let divTela = document.querySelector('main.conteudo');
      let texto = '';
      

      //Montar texto HTML das noticias
      let dados = JSON.parse(this.responseText);
      for (i=0; i<dados.articles.length; i++){
            let noticia = dados.articles[i];
            let data =  new Date(noticia.publishedAt);

            texto = texto + `
            <div class="box-noticia">
                <img class="thumbnail" src="${noticia.urlToImage}" alt="">
                <h3 class="titulo">${noticia.title}</h3>
                <div><span class="data">${data.toLocaleDateString()}</span> - <span class="fonte">${noticia.source.name}</span></div>
                <p class="texto">${noticia.description}</p>
                <p class="url"><a id="mais" href="#" onclick="abreLink('${noticia.url}');">Visualizar materia completa: </a></p>
                <div class="barra-icones"></div>  
            </div>
            `;
        };

      divTela.innerHTML = texto;
    }     

  function executaPesquisa(){
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET',`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send();
  }

  document.getElementById('btnPesquisa').addEventListener('click',executaPesquisa);

  function init (){
    //let q = document.getElementById('Brasil').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET',`
    https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    xhr.send();
  }

  function executaSecao1(){

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET',`https://newsapi.org/v2/sources?&apiKey=${API_KEY}`);
    xhr.send();
  }

  document.getElementById('secao1').addEventListener('click',executaSecao1);
  
  function executaSecao2(){

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=be&apiKey=${API_KEY}`);
    xhr.send();
  }

  document.getElementById('secao2').addEventListener('click',executaSecao2);

  function executaSecao3(){

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}`);
    xhr.send();
  }

  document.getElementById('secao3').addEventListener('click',executaSecao3);

  function executaSecao4(){

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=at&apiKey=${API_KEY}`);
    xhr.send();
  }

  document.getElementById('secao4').addEventListener('click',executaSecao4);

function abreLink(props){
    window.open(props);
}