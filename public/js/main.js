const navTabs = document.querySelectorAll(".nav-tab");

const closeMenu = event => {
  document.querySelector(".toggler").checked = false;
};

navTabs.forEach(tab => tab.addEventListener("click", closeMenu));
