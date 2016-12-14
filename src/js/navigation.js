let $checkboxes, $overlay;

/**
 * uncheck all checkboxes for hide navigation options
 */
function uncheckAll() {
  $checkboxes.forEach(($checkbox) => {
    $checkbox.checked = false;
  })
}

/**
 * uncheck all checkbox for hide the navigation options less
 * the option with the id recived
 * @param  {Number} id checkbox id
 */
function uncheckAllLessOne(id) {
  $checkboxes.forEach(($checkbox) => {
    if ($checkbox.id != id) {
      $checkbox.checked = false;
    }
  });
}

/** function for show the overlay */
function showOverlay() {
  $overlay.style.display = "block";
}

/**
 * function for hide the overlay
 */
function hideOverlay() {
  $overlay.style.display = "none";
}

/**
 * is actived when the overlay is clicked
 * @param  {Event} e
 */
function onClickOverlay(e) {
  e.preventDefault();
  uncheckAll();
  hideOverlay();
}

/**
 * is activated when a checkbox is clicked
 * @param  {Event} e
 */
function onClickCheckbox(e) {
  if (e.target.checked) {
    showOverlay();
    uncheckAllLessOne(e.target.id)
  } else {
    hideOverlay();
  }
}

/**
 * Initial function for run overlay animation and desktop navigation
 */
function start() {
  $overlay.addEventListener('click', onClickOverlay);
  $checkboxes.forEach(($checkbox) => {
    $checkbox.onclick = onClickCheckbox;
  });
}

setTimeout(() => {
  $checkboxes = document.querySelectorAll("input[name='navigation']");
  $overlay = document.getElementById("overlay");
  start();
}, 500);
