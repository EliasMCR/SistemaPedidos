$(document).ready(function () {
    $("#myForm").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        senha: {
          required: true,
          minlength: 6
        }
      },
      messages: {
        email: {
          required: "Por favor, insira seu email.",
          email: "Por favor, insira um email válido."
        },
        senha: {
          required: "Por favor, insira sua senha.",
          minlength: "A senha deve ter no mínimo 6 caracteres."
        }
      }
    });
  });
  