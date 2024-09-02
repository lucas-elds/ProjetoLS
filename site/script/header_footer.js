const header = document.querySelector("header");

function adicionarHeader() {
  return `
    <nav>
      <button id="mobile-menu-icon" onclick="clickMenu()"><i class="fa-solid fa-bars"></i></button>
      <div id="logo">
        <a href="/site/index.html">
          <img src="../img/logo.png" alt="Logo Casco Vivo">
          <h1 style="padding-left: 5px;">Casco Vivo</h1>
        </a>
      </div>
      <div id="mobile-login-icon">
        <a href="">
          <i class="fa-solid fa-right-to-bracket"></i>
          <p>LOGIN</p>
        </a>
      </div>

      <ul id="botoes-menu">
        <li class="botao-menu"><a href="/site/index.html">HOME<i class="fa-solid fa-house"></i></a></li>
        <li class="botao-menu"><a href="">COMUNIDADE<i class="fa-solid fa-comment"></i></a></li>
        <li class="botao-menu"><a href="">VOLUNTARIADO<i class="fa-solid fa-hand-holding-hand"></i></a></li>
        <li class="botao-menu"><a href="">DOAÇÕES<i class="fa-solid fa-hand-holding-heart"></i></a></li>
        <li id="login" class="botao-menu"><a href="">LOGIN<i class="fa-solid fa-right-to-bracket"></i></a></li>
      </ul>

    </nav>
    <section id="mobile-menu">
      <ul id="botoes-menu-mobile">
        <a href="/site/index.html">
          <li class="botao-menu-mobile">
            <p>HOME</p>
            <i class="fa-solid fa-house"></i>
          </li>
        </a>
        <a href="">
          <li class="botao-menu-mobile">
            <p>COMUNIDADE</p>
            <i class="fa-solid fa-comment"></i>
          </li>
        </a>
        <a href="">
          <li class="botao-menu-mobile">
            <p>VOLUNTARIADO</p>
            <i class="fa-solid fa-hand-holding-hand"></i>
          </li>
        </a>
        <a href="">
          <li class="botao-menu-mobile">
            <p>DOAÇÕES</p>
            <i class="fa-solid fa-hand-holding-heart"></i>
          </li>
        </a>
      </ul>
    </section>

    <img id="banner" src="../img/banner.jpg" alt="Banner: Preserve as Tartarugas Marinhas">
    `;
}
header.insertAdjacentHTML("beforeend", adicionarHeader());

const footer = document.querySelector("footer");

function adicionarFooter() {
  return `
    <div id="footer-logo">
      <img src="../img/logo.png" alt="Logo">
      <h1>Casco Vivo</h1>
    </div>
    <ul id="redes-sociais">
      <li id="facebook">
        <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
      </li>
      <li id="instagram">
        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
      </li>
      <li id="twitter">
        <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
      </li>
    </ul>
    <div id="footer-info">
      <p>
        Construído com:
        <i style="color: #e34c26;" class="fa-brands fa-html5"></i>
        <i style="color: #2965f1;" class="fa-brands fa-css3-alt"></i>
        <i style="color: #f0db4f;" class="fa-brands fa-square-js"></i>
        para as disciplinas de:
      </p>
      <ul>
        <li>
          <dt><i class="fa-solid fa-seedling"></i> Ciência, Tecnologia e Meio Ambiente</dt>
          <dd><i class="fa-solid fa-chalkboard-user"></i> Docente: Alexandre Fonseca</dd>
        </li>

        <li>
          <dt><i class="fa-solid fa-file-code"></i> Linguagem de Script</dt>
          <dd><i class="fa-solid fa-chalkboard-user"></i> Docente: Francisco Dantas
          <dd><i class="fa-solid fa-chalkboard-user"></i> Docente: Luiz Carlos</dd>
        </li>
      </ul>
    </div>
    <button id="btn-equipe" onclick="clickEquipe()">Equipe <i class="fa-solid fa-people-group"></i></button>
    <section id="projeto">
      

      <p><i class="fa-solid fa-people-group"></i> Equipe:</p>

      <ul>
        <li>
          <dt>
            Lucas Emiliano
            ( <i class="fa-solid fa-seedling"></i> / <i class="fa-solid fa-file-code"></i> )
          </dt>
          <dd><i class="fa-solid fa-address-card"></i> Matrícula: 20221370040</dd>
        </li>
        <li>
          <dt>
            Michel Lavanere
            ( <i class="fa-solid fa-file-code"></i> )
          </dt>
          <dd><i class="fa-solid fa-address-card"></i> Matrícula: 20221370001</dd>
        </li>
        <li>
          <dt>
            Sheila Lee
            ( <i class="fa-solid fa-seedling"></i> )
          </dt>
          <dd><i class="fa-solid fa-address-card"></i> Matrícula: 20221370004</dd>
        </li>
        <li>
          <dt>
            Wilton Padilha
            ( <i class="fa-solid fa-seedling"></i> )
          </dt>
          <dd><i class="fa-solid fa-address-card"></i> Matrícula: 20221370039</dd>
        </li>
      </ul>
    </section>
    `;
}

footer.insertAdjacentHTML("beforeend", adicionarFooter());
