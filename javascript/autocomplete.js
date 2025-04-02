const _autocomplete = () => {
  // private variables
  let el;
  let domId = "";
  let array = [];
  let recordedFirstLetter = "1";

  // public functions
  function _init(x) {
    this.domId = x;
    this.el = document.getElementById(this.domId);
    this.listenIn("hello");
  }

  function _listenIn(e) {
    this.el.addEventListener("keyup", this.keyed.bind(this));
  }

  function _keyed(e) {
    if (this.recordedFirstLetter !== this.el.value[0]) {
      this.recordedFirstLetter = this.el.value[0];
      this.loadList();
    }

    if (this.el.value.length > 3) {
      this.createSuggestionsDom();
    }
  }

  async function _loadList() {
    if (this.recordedFirstLetter) {
      let file =
        "../lookupTables/englishDictionary/" +
        this.recordedFirstLetter.toLowerCase() +
        ".js";
      let obj = await import(file);
      this.array = obj.default.data;
    }
  }

  function _createSuggestionsDom() {
    this.clearSuggestions();
    // create the list div
    let autocompleteList = document.createElement("DIV");
    autocompleteList.setAttribute("id", this.domId + "autocomplete-list");
    autocompleteList.setAttribute("class", "autocomplete-items");
    this.el.parentNode.appendChild(autocompleteList);

    for (let i = 0; i < this.array.length; i++) {
      if (
        this.array[i].substr(0, this.el.value.length).toUpperCase() ==
        this.el.value.toUpperCase()
      ) {
        let item = document.createElement("DIV");
        item.innerHTML =
          "<strong>" +
          this.array[i].substr(0, this.el.value.length) +
          "</strong>";
        item.innerHTML += this.array[i].substr(this.el.value.length);
        item.innerHTML += "<input type='hidden' value='" + this.array[i] + "'>";
        // add click event to list item
        let x = "mike";
        item.addEventListener("click", (e) => {
          this.el.value = e.target.getElementsByTagName("input")[0].value;
          this.clearSuggestions();
        });

        autocompleteList.appendChild(item);
      }
    }
  }

  function _clearSuggestions() {
    let x = document.getElementById(this.domId + "autocomplete-list");
    if (x) {
      x.remove();
    }
  }

  return {
    init: _init,
    keyed: _keyed,
    listenIn: _listenIn,
    createSuggestionsDom: _createSuggestionsDom,
    loadList: _loadList,
    clearSuggestions: _clearSuggestions,
  };
};
export default _autocomplete;

// private functions
// async function load(callback) {
//   import("/lookupTables/englishDictionary/a.js")
//     .then((module) => {
//       console.log("module loaded");
//       let a = module.default;
//       console.log(a.data[10]);

//       callback(a);
//     })
//     .catch((err) => {
//       console.log("error loading module");
//     });
// }
