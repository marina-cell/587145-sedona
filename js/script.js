var searchButton = document.querySelector(".search__button");
var searchModalWindow = document.querySelector(".search__modal");
var searchForm = document.querySelector(".search-form");
var startDate = document.querySelector("[name=start-date]");
var adultNumber = document.querySelector("[name=adult-number]");
var childrenNumber = document.querySelector("[name=children-number]");
var endDate = document.querySelector("[name=end-date]");
var searchInputs = document.querySelectorAll(".search-form input");

var isStorageSupport = true;
var adultNumberInStorage = "";
var childrenNumberInStorage = "";

try {
  adultNumberInStorage = localStorage.getItem("adultNumber");
  childrenNumberInStorage = localStorage.getItem("childrenNumber");
} catch (err) {
  isStorageSupport = false;
}

searchModalWindow.classList.add("modal-hide");
searchModalWindow.classList.add("default-hide");

searchButton.addEventListener("click", function() {
  searchModalWindow.classList.remove("default-hide");
  searchModalWindow.classList.toggle("modal-hide");
  if (adultNumberInStorage) {
    adultNumber.value = adultNumberInStorage;
  }
  if (childrenNumberInStorage) {
    childrenNumber.value = childrenNumberInStorage;
  }
});

for(var i = 0; i < searchInputs.length; i++) {
  searchInputs[i].addEventListener("click", function() {
    var defaultValue = this.value;
    this.value = '';

    this.addEventListener("blur", function() {
      if(this.value === '') {
        this.value = defaultValue;
      }
    });
  });
}

searchForm.addEventListener("submit", function(evt) {
  if (!startDate.value || !endDate.value) {
    evt.preventDefault();
    searchModalWindow.classList.remove("modal-error");
    searchModalWindow.offsetWidth = searchModalWindow.offsetWidth;
    searchModalWindow.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultNumber", adultNumber.value);
      localStorage.setItem("childrenNumber", childrenNumber.value);
    }
  }
});
