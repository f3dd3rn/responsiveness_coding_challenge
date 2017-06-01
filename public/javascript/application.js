document.addEventListener("DOMContentLoaded", function(event) {
  // info handling
  function manageInfoBoxes(event) {
    let active = document.querySelectorAll("[data-info-trigger]:checked")[0].value;
    let infoBoxes = document.querySelectorAll("[data-info-type]");
    for (let i = 0; i < infoBoxes.length; i++) {
      let infoBox = infoBoxes[i];
      if(infoBox.dataset.infoType === active) {
        infoBox.classList.remove("hidden");
      } else {
        infoBox.classList.add("hidden");
      }
    }
  }

  function initInfoHandling() {
    let infoTriggers = document.querySelectorAll("[data-info-trigger]");
    for (let i = 0; i < infoTriggers.length; i++) {
      infoTriggers[i].addEventListener("change", manageInfoBoxes);
    }

    manageInfoBoxes(null);
  }

  initInfoHandling();
});
