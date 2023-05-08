import tartarugas from './script/tartarugas.js';

const adicionarTartaruga = (tartarugas) => {
  return tartarugas.map((tartaruga) => {
    return (
      `
    <article class="${tartaruga.grau}">
      <article class="tartaruga">
        <img src="${tartaruga.image}" alt="${tartaruga.nome}">
        
        <ul class="info-tartaruga">
          <h1>${tartaruga.nome}</h1>
          <li>${tartaruga.categoria}</li>
          <li>${tartaruga.peso}</li>
          <li>${tartaruga.tamanho}</li>
          <li>${tartaruga.area}</li>
          <li>${tartaruga.media}</li>
          <li>${tartaruga.desova}</li>
          <li>${tartaruga.idade}</li>
          <li>${tartaruga.distribuicao}</li>
          <li>${tartaruga.dieta}</li>
        </ul>
      </article>
    </article>
    `
    )
  }).join('')
}

const cards = document.getElementById('cards');
cards.innerHTML = adicionarTartaruga(tartarugas);
