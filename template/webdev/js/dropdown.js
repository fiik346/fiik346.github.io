function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, "");
  } else {
    elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
  }

  return elem;
}
function toggleBtn(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, "");
  } else {
    elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
  }

  return elem;
}
function shownav(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector(".m-menu");
  toggleClass(menu, "show");
}
const dropdownTitle = document.querySelector(".navbar-toggler");
dropdownTitle.addEventListener("click",shownav);

// // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.navbar-toggler')) {
    var dropdowns = document.getElementsByClassName("m-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        console.log("removed")
      }
    }
  }
}
