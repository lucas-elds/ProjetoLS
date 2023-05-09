function clickMenu() {
  let menu = document.getElementById("mobile-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function clickEquipe() {
  let projeto = document.getElementById("projeto");
  if (projeto.style.display === "block") {
    projeto.style.display = "none";
  } else {
    projeto.style.display = "block";
  }
}

function filtroAmeacaClique(ameaca) {
  let cards = Array.from(document.querySelectorAll(`#cards > article`));

  cards.forEach((card) => {
    if(card.classList.contains(`grau-${ameaca}`) || !ameaca) {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  }) 
}

