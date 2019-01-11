

var link = document.querySelector(".btn-writeus");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".contact-form");
var login = popup.querySelector("[name=full-name]");
var mail = popup.querySelector("[name=mail]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("full-name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и e-mail");
  } else {
    if (isStorageSupport) {
      localStorage.getItem("login", "login.value");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

