var button = document.querySelector(".brown-button");
var form = document.querySelector(".index-form");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var adults = form.querySelector("[name=adult-guests]");
var children = form.querySelector("[name=children-guests]");

var isStorageSupport = true;
var storage = "";

try {
  storageAdults = localStorage.getItem("adult-guests");
  storageChildren = localStorage.getItem("children-guests");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-show");
  form.classList.remove("form-error");
  if (isStorageSupport) {
    adults.value = storageAdults;
    children.value = storageChildren;
    }
  arrival.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  } else {
    localStorage.setItem("adult-guests", adults.value);
    localStorage.setItem("children-guests", children.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (form.classList.contains("modal-show")) {
      form.classList.remove("modal-show");
      form.classList.remove("form-error");
    }
  }
});

