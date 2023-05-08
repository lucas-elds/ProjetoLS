function clickMenu() {
  let menu = document.getElementById("mobile-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function clickProjeto() {
  let projeto = document.getElementById("projeto");
  if (projeto.style.display === "block") {
    projeto.style.display = "none";
  } else {
    projeto.style.display = "block";
  }
}

function clickCR() {
  let cr = document.querySelectorAll(".grau-cr");
  let en = document.querySelector(".grau-en");
  let vu = document.querySelectorAll(".grau-vu");
  let dd = document.querySelector(".grau-dd");
  cr[0].style.display = "block";
  cr[1].style.display = "block";
  en.style.display = "none";
  vu[0].style.display = "none";
  vu[1].style.display = "none";
  vu[2].style.display = "none";
  dd.style.display = "none";
}

function clickEN() {
  let cr = document.querySelectorAll(".grau-cr");
  let en = document.querySelector(".grau-en");
  let vu = document.querySelectorAll(".grau-vu");
  let dd = document.querySelector(".grau-dd");
  cr[0].style.display = "none";
  cr[1].style.display = "none";
  en.style.display = "block";
  vu[0].style.display = "none";
  vu[1].style.display = "none";
  vu[2].style.display = "none";
  dd.style.display = "none";
}

function clickVU() {
  let cr = document.querySelectorAll(".grau-cr");
  let en = document.querySelector(".grau-en");
  let vu = document.querySelectorAll(".grau-vu");
  let dd = document.querySelector(".grau-dd");
  cr[0].style.display = "none";
  cr[1].style.display = "none";
  en.style.display = "none";
  vu[0].style.display = "block";
  vu[1].style.display = "block";
  vu[2].style.display = "block";
  dd.style.display = "none";
}

function clickDD() {
  let cr = document.querySelectorAll(".grau-cr");
  let en = document.querySelector(".grau-en");
  let vu = document.querySelectorAll(".grau-vu");
  let dd = document.querySelector(".grau-dd");
  cr[0].style.display = "none";
  cr[1].style.display = "none";
  en.style.display = "none";
  vu[0].style.display = "none";
  vu[1].style.display = "none";
  vu[2].style.display = "none";
  dd.style.display = "block";
}

function limparFiltros() {
  let cr = document.querySelectorAll(".grau-cr");
  let en = document.querySelector(".grau-en");
  let vu = document.querySelectorAll(".grau-vu");
  let dd = document.querySelector(".grau-dd");
  cr[0].style.display = "block";
  cr[1].style.display = "block";
  en.style.display = "block";
  vu[0].style.display = "block";
  vu[1].style.display = "block";
  vu[2].style.display = "block";
  dd.style.display = "block";
}
