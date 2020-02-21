var button = document.querySelector(".brown-button");
var form = document.querySelector(".index-form");
var close = document.querySelector(".form-close");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var adults = form.querySelector("[name=adult-guests]");
var children = form.querySelector("[name=children-guests]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adult-guests");
  storage = localStorage.getItem("children-guests");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.add("form-show");
  if (storage) {
    adults.value = storage;
    children.value = storage;
  }

  arrival.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.remove("form-show");

  form.classList.add("form-show");
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    console.log("Нужно ввести данные в форму");
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
      }
    }
});

