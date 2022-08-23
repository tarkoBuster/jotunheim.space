window.addEventListener("DOMContentLoaded", () => {
  const btnLogo = document.querySelector(".wrapper_logo__btn button"),
    btnRegist = document.querySelector(".login__btn button"),
    fRegist = document.querySelectorAll("form");

  function auditLogin (i) {
    if(i) {
        i.addEventListener("click", () => {
        fRegist.forEach((i) => {
          i.classList.toggle("show");
          i.classList.toggle("hide");
        });
      });
    }
  }
    auditLogin(btnLogo);
    auditLogin(btnRegist);
});
