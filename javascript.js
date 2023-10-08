//Get all the dropdowns from the document

const dropdowns = document.querySelectorAll(".dropdown");
const iframes = document.querySelectorAll("iframe");

iframes.forEach((iframe) => {
  iframe.style.height = "270px";
  iframe.style.width = "130px";
});

dropdowns.forEach((dropdown) => {
  //Get inner elements from each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  /*
    We are using this method in order to have
    multiple dropdown menus on the page work
    */
  //Add a click event to the select element
  select.addEventListener("click", () => {
    //Add the clicked select styles to the select element
    select.classList.toggle("select-clicked");
    //Add the rotate styles to the caret element
    caret.classList.toggle("caret-rotate");
    //Add the open styles to the menu element
    menu.classList.toggle("menu-open");
  });
});
