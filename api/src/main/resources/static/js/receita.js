$(document).ready(function () {
    $("#escolha").on('change', function () {
        var selectedValue = $(this).val();

        // Exibir formulário para opções válidas
        if (selectedValue === 'visaoSimples' || selectedValue === 'multifocal' || selectedValue === 'bifocal') {
            $("#form-receita").css('display', 'block');

            // Gerenciar habilitação de campos
            if (selectedValue === 'visaoSimples') {
                $("#iadicaoOD, #iadicaoOE").prop('disabled', true);
            } else {
                $("#iadicaoOD, #iadicaoOE").prop('disabled', false);
            }
        } else {
            // Ocultar formulário e alertar sobre opção inválida
            $("#form-receita").css('display', 'none');
            alert('Opção inválida');
        }
    });
});

$(document).ready(function () {
    $('#form-submit').on('click', function (e) {
        e.preventDefault();

        // Verificando se os campos estão preenchidos
        var vertical = $('#ivertical').val();
        var diagonalMaior = $('#idiagonalMaior').val();
        var horizontal = $('#ihorizontal').val();
        var ponte = $('#iponte').val();
        var codigoArmacao = $('#icodigoArmacao').val();
        var corArmacao = $('#icorArmacao').val();

        // Condição de verificação de campos
        if (!vertical || !diagonalMaior || !horizontal || !ponte || !codigoArmacao || !corArmacao) {
            // Se algum campo não estiver preenchido, mostra a tela3
            $('#tela3').css('display', 'block');
        } else {
            // Caso todos os campos estejam preenchidos
            alert('Todos os campos estão preenchidos!');
            // Aqui você pode adicionar o envio do formulário ou outra ação desejada.
        }
    });
});


//função para converter os números do cilindro em potências negativas automaticamente
$(document).ready(function () {
    $("#cilindroOD, #cilindroOE").on('input', function () {
        let valor = $(this).val();
        if (valor && valor > 0) {
            $(this).val(-Math.abs(valor)); // Torna o valor negativo
        }
    });
});
//verificar eixo
$(document).ready(function() {
    $('#eixoOD, eixoOE').on('input', function() {
      let valor = $(this).val();

      // Remove números decimais e caracteres inválidos
      valor = valor.replace(/[^0-9]/g, ''); // Remove tudo que não for número
      valor = parseInt(valor, 10) || 0;    // Converte para inteiro (ou 0 se for inválido)

      // Limita o valor ao máximo de 180
      if (valor > 180) {
        valor = 180;
      }

      // Atualiza o campo com o valor válido
      $(this).val(valor);
    });
  });
  //verificar dnp
  
  
  