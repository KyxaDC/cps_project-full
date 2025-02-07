const btnShowAll = document.querySelectorAll(".btn-show-all");
const slidesBrands = document.querySelectorAll(".brands__slide");
const slidesTechniques = document.querySelectorAll(".repair-technique__slide");

for (let i = 0; i < btnShowAll.length; i++) {
  if (i === 0) {
    btnShowAll[i].addEventListener("click", () => {
      showSlidesBrands();
      btnShowAll[i].classList.toggle("btn-show-all--pressed");
      btnShowAll[i].classList.contains("btn-show-all--pressed")
        ? (btnShowAll[i].innerHTML = "Закрыть")
        : (btnShowAll[i].innerHTML = "Показать все");
    });
  }
  if (i === 1) {
    btnShowAll[i].addEventListener("click", () => {
      showSlidesTechniques();
      btnShowAll[i].classList.toggle("btn-show-all--pressed");
      btnShowAll[i].classList.contains("btn-show-all--pressed")
        ? (btnShowAll[i].innerHTML = "Закрыть")
        : (btnShowAll[i].innerHTML = "Показать все");
    });
  }
}

function showSlidesBrands() {
  if (window.innerWidth >= 768) {
    for (let slide of slidesBrands) {
      slide.classList.toggle("brands-slide--visible");
    }
  }
}

function showSlidesTechniques() {
  for (let slide of slidesTechniques) {
    slide.classList.toggle("repair-technique-slide--visible");
  }
}
