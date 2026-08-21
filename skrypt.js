/* Zastępniki brakujących zdjęć */
document.querySelectorAll(".ph img").forEach(function (img) {
  var brak = function () { img.closest(".ph").classList.add("brak"); };
  img.addEventListener("error", brak);
  if (img.complete && img.naturalWidth === 0) brak();
});
