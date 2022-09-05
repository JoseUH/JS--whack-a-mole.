const count$$ = document.querySelector(".count");
const score$$ = document.querySelector(".score");
const game$$ = document.querySelector(".game");
const hoyos$$ = document.querySelectorAll(".hole");

let playing = false;
let random;
let anterior;
let score = 0;

function startGame() {
  playing = true;
  count = 4;
  count$$.textContent = count;
  for (let index = 0; index < hoyos$$.length; index++) {
    hoyos$$[index].addEventListener("click", touch);
  }
  moveHans();
  let intId = setInterval(() => {
    if (count !== 0) {
      count -= 1;
      moveHans();
    } else {
      if (score >= 10) {
        alert("Enhorabuena, estas dentro del One piece");
      }
      else{
        alert("La liaste nico")
      }
      score = 0;
      score$$.textContent = score;
      hoyos$$[anterior].classList.remove("up");
      clearInterval(intId);
    }
  }, 2000);
}
const touch = (event) => {
  if (
    event.target.className.includes("up") ||
    event.target.className == "mole"
  ) {
    score += 1;
  } else {
    score -= 1;
  }
  score$$.textContent = score;
};
function moveHans() {
  anterior = random;
  random = Math.floor(Math.random() * 6);
  if (anterior !== undefined) {
    if (hoyos$$[anterior].className.includes("up")) {
      hoyos$$[anterior].classList.remove("up");
    }
  }

  hoyos$$[random].classList.add("up");

  count$$.textContent = count;
}
