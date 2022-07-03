window.addEventListener("load", () => {
  const form = document.querySelector("#formulario");
  const usuario = document.querySelector("#usuario");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const passConfirma = document.querySelector("#passConfirma");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validaCampos();
  });

  const validaCampos = () => {
    //Capturo valores ingresados
    const usuarioValor = usuario.value.trim();
    const emailValor = email.value.trim();
    const passValor = password.value.trim();
    const passConfirmaValor = passConfirma.value.trim();

    //Validando campo usuario
    if (!usuarioValor) {
      validaFalla(usuario, "Campo vacio");
    } else {
      validaOk(usuario);
    }

    //Validando email
    if (!emailValor) {
      validaFalla(email, "Campo vacio");
    } else if (!validaEmail(emailValor)) {
      validaFalla(email, "El campo no es valido");
    } else {
      validaOk(email);
    }

    //Validando contraseña
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/;

    if (!passValor) {
      validaFalla(password, "Campo vacio");
    } else if (passValor.length < 8) {
      validaFalla(password, "Debe tener 8 caracteres como minimo");
    } else if (!passValor.match(er)) {
      validaFalla(
        password,
        "Debe tener al menos una Mayus una Minuscula y un Num"
      );
    } else {
      validaOk(password);
    }

    //Validando campo password Confirmacion
    if (!passConfirmaValor) {
      validaFalla(passConfirma, "Confirme su password");
    } else if (passValor !== passConfirmaValor) {
      validaFalla(passConfirma, "La password no coincide");
    } else {
      validaOk(passConfirma);
    }
  };

  //Alertas
  const validaFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = msje;

    formControl.className = "form-control falla";
  };

  const validaOk = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control ok";
  };

  const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
});
