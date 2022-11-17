const signupForm = document.querySelector("#sinupup-form");
const message = document.querySelector(".message");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const RegEx = /^[a-zA-Z0-9]{6,12}$/;
  const inputVal = signupForm.username.value;

  if (RegEx.test(input)) {
    message.textContent = "Ma'lumot to'g'ri";
  } else {
    message.textContent =
      "Xatolik aniqlandi.Kiritayotgan ma'lumotda 6 va 12 oralig'ida bo'lsin";
  }
});
