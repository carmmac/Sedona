const reviewForm = document.querySelector(".review-form"),
  popup = document.querySelector(".popup"),
  popupSuccess = document.querySelector(".popup--success"),
  popupFailure = document.querySelector(".popup--failure"),
  popupBtnSuccess = document.querySelector(".popup__button--success"),
  popupBtnFailure = document.querySelector(".popup__button--failure"),
  formField = document.querySelector(".field");



popup.classList.add("visually-hidden");
reviewForm.noValidate = true;

reviewForm.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.target;
  let validFields = 0;

  for (let f = 0; f < form.elements.length; f++) {
    let field = form.elements[f];

    if (field.validity.valid) {
      validFields++;
      form.elements[f].classList.remove("field-invalid");
    } else{
      form.elements[f].classList.add("field-invalid");
    }
  }

  if (validFields === form.elements.length) {
    popupSuccess.classList.remove("visually-hidden");
  } else {
      popupFailure.classList.remove("visually-hidden");
    }
});

popupBtnSuccess.addEventListener("click", () => {
  popupSuccess.classList.add("visually-hidden");
});

popupBtnFailure.addEventListener("click", () => {
  popupFailure.classList.add("visually-hidden");
});
