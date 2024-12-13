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
