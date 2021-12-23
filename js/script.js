//const checkFast = document.querySelector("#fast");
const myForm = document.querySelector(".formX");
const allCheckboxesOfForm = myForm.getElementsByTagName("input");

let lastCheckboxChecked;
let counter = 0;

function checkCheckboxes() {
  for (let checkbox of allCheckboxesOfForm) {
    //for (let i = 0; i < allCheckboxesOfForm.length; i++) {
    checkbox.addEventListener("change", function (e) {
      if (checkbox.checked) {
        counter = counter + 1;

        if (counter >= allCheckboxesOfForm.length) {
          //console.log("3 ist erreicht!");
          alert(
            "Sorry, alle " +
              allCheckboxesOfForm.length +
              " W\u00fcnsche auf einmal gehen leider nicht..."
          );
          lastCheckboxChecked.checked = false;
          counter = counter - 1;
        }

        lastCheckboxChecked = checkbox;
      } else {
        counter = counter - 1;
      }
      //console.log("Counter: " + counter);
      //console.log("Last checkbox: " + lastCheckboxChecked);
    });
  }
}

checkCheckboxes();

/*
checkFast.addEventListener("change", function (e) {
  if (checkFast.checked) {
    console.log("Hey fast!");
  }
});
*/
