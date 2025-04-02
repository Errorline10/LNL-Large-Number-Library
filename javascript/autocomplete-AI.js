function autocomplete(inputField, array) {
  let currentFocus;

  inputField.addEventListener("input", function (e) {
    
    // only trigger if input is longer then "engageNumber" letters
    if (this.value.length < 3) {
      closeAllLists();
      return false;
    } else {

      let autocompleteList = this.value;
      let item = this.value;
      let val = this.value;

      closeAllLists();
      if (!val) {
        return false;
      }

      currentFocus = -1;

      // create the list div
      autocompleteList = document.createElement("DIV");
      autocompleteList.setAttribute("id", this.id + "autocomplete-list");
      autocompleteList.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(autocompleteList);

      // populate the list div
      for (let i = 0; i < array.length; i++) {
        if (array[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          item = document.createElement("DIV");
          item.innerHTML = "<strong>" + array[i].substr(0, val.length) + "</strong>";
          item.innerHTML += array[i].substr(val.length);
          item.innerHTML += "<input type='hidden' value='" + array[i] + "'>";
          // add click event to list item
          item.addEventListener("click", function (e) {
            inputField.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });
          autocompleteList.appendChild(item);
        }
      }
    }
  });

  // // keyboard navigation of the displayed suggestions
  // inputField.addEventListener("keydown", function (e) {
  //   let x = document.getElementById(this.id + "autocomplete-list");
  //   if (x) x = x.getElementsByTagName("div");
  //   if (e.keyCode == 40) {
  //     currentFocus++;
  //     addActive(x);
  //   } else if (e.keyCode == 38) {
  //     currentFocus--;
  //     addActive(x);
  //   } else if (e.keyCode == 13) {
  //     e.preventDefault();
  //     if (currentFocus > -1) {
  //       if (x) x[currentFocus].click();
  //     }
  //   }
  // });

  // // 
  // function addActive(x) {
  //   if (!x) return false;
  //   removeActive(x);
  //   if (currentFocus >= x.length) currentFocus = 0;
  //   if (currentFocus < 0) currentFocus = x.length - 1;
  //   x[currentFocus].classList.add("autocomplete-active");
  // }

  // function removeActive(x) {
  //   for (let i = 0; i < x.length; i++) {
  //     x[i].classList.remove("autocomplete-active");
  //   }
  // }

  
  function closeAllLists(elmnt) {
    let x = document.getElementsByClassName("autocomplete-items");
    
    for (let i = 0; i < x.length; i++) {
       if (elmnt != x[i] && elmnt != inputField) {
         x[i].parentNode.removeChild(x[i]);
       }
     }
  }
  
  // close suggestions list on any click
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
