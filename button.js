// ===== Scroll Buttons for Movie Section =====
document.addEventListener("DOMContentLoaded", () => {
  const movieCards = document.getElementById("movieCards");
  const scrollLeft = document.getElementById("scrollLeft");
  const scrollRight = document.getElementById("scrollRight");

  if (scrollLeft && scrollRight && movieCards) {
    scrollLeft.addEventListener("click", () => {
      movieCards.scrollBy({ left: -400, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", () => {
      movieCards.scrollBy({ left: 400, behavior: "smooth" });
    });
  }
});
