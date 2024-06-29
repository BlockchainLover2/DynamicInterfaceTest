let buttons = document.querySelectorAll(".dropdown-container > button");
let subMenuButtons = document.querySelectorAll(".dropdown-item.expand");

export let clickEventDropdownButtons = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      dropdownEventButton(button, e);
    });
    document.body.addEventListener("click", (e) =>
      dropdownEventBody(button, e),
    );
  });
  subMenuButtons.forEach((button) => {
    button.addEventListener("click", (e) => {});
  });
};

let dropdownEventButton = (button) => {
  let dropDownMenu = button.parentElement.childNodes[1];
  dropDownMenu.classList.toggle("dropdown-enabled");
};

let dropdownEventBody = (button, e) => {
  let dropDownMenu = button.parentElement.childNodes[1];
  if (e.target === button || e.target.classList.contains("dropdown-item"))
    return;

  dropDownMenu.classList.remove("dropdown-enabled");
};
