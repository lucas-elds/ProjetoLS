import tartarugas from './script/tartarugas.js';

const cards = document.getElementById('cards');

function adicionarTartaruga(tartaruga) {
  return `
    <article class="tartaruga">
      <img src="${tartaruga.image}" alt="${tartaruga.nome}">
      <ul class="info-tartaruga">
        <h1>${tartaruga.nome}</h1>
        <li>${tartaruga.peso}</li>
        <li>${tartaruga.tamanho}</li>
        <li>${tartaruga.area}</li>
        <li>${tartaruga.media}</li>
        <li>${tartaruga.desova}</li>
        <li>${tartaruga.idade}</li>
        <li>${tartaruga.distribuicao}</li>
        <li>${tartaruga.categoria}</li>
        <li>${tartaruga.dieta},</li>
      </ul>
    </article>
    `;
}

for (const tartaruga of tartarugas) {
  cards.insertAdjacentHTML('beforeend', adicionarTartaruga(tartaruga));
}