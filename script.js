// function viewDiv(){
//     document.getElementById("login__tab").style.display = "block";
// };

const BurgerButtonElement = document.querySelector(".burger__button");
const BurgerNavigationElement = document.querySelector(".navigation");
const LoginButtonElement = document.querySelector(".header__button");
const LoginCloseElement = document.querySelector("main");
var LoginTabElement = document.getElementById("login__tab");

function ShowBurgerMenu() {
  BurgerNavigationElement.classList.toggle("navigation__visible");
}

// Мой метод вроде работает :/
function ShowLoginTab() {
  if (LoginTabElement.style.display == "block") {
    LoginTabElement.style.display = "none";
    document.querySelector("main").style.backgroundColor = "#fff";
  } else {
    LoginTabElement.style.display = "block";
    // document.querySelector("main").style.backgroundColor = "#313131";
  }
}

function CloseLoginTab() {
  document.querySelector("main").style.backgroundColor = "#fff";
  LoginTabElement.style.display = "none";
  // BurgerNavigationElement.classList.remove("navigation__visible");
}

BurgerButtonElement.addEventListener("click", ShowBurgerMenu);
LoginButtonElement.addEventListener("click", ShowLoginTab);
LoginCloseElement.addEventListener("click", CloseLoginTab);
