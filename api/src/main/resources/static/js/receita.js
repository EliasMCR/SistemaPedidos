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
$(document).ready(function () {
    $('#eixoOD, eixoOE').on('input', function () {
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


//este método libera o botao da receita somente quando todos os dados estao preenchidos


$(document).ready(function () {
    // Função para carregar as lentes
    function carregarLentes(diametro) {
        $.ajax({
            url: '/lente/listar/',  // Endpoint que retorna as lentes
            method: 'GET',
            dataType: 'json',
            data: {
                diametro: diametro  // Passa o argumento para o servidor
            },
            success: function (data) {
                // Preencher o select para OD
                var selectOD = $('#escolhaLenteOD');
                selectOD.empty();  // Limpar o select antes de adicionar novos itens
                selectOD.append('<option value="">Selecione a lente OD</option>');

                data.forEach(function (lente) {
                    selectOD.append('<option value="' + lente.id + '">' + lente.material + ' - ' + lente.diametro + '</option>');
                });

                // Preencher o select para OE
                var selectOE = $('#escolhaLenteOE');
                selectOE.empty();  // Limpar o select antes de adicionar novos itens
                selectOE.append('<option value="">Selecione a lente OE</option>');

                data.forEach(function (lente) {
                    selectOE.append('<option value="' + lente.id + '">' + lente.material + ' - ' + lente.diametro + '</option>');
                });
            },
            error: function () {
                alert('Erro ao carregar as lentes.');
            }
        });
    }

    // Função para calcular o diâmetro
    function calcDiametro() {
        const ponte = parseFloat($('#iponte').val()) || 0; // Valor do campo 'ponte'
        const horizontal = parseFloat($('#ihorizontal').val()) || 0; // Valor do campo 'horizontal'
        const dnpOD = parseFloat($('#dnpOD').val()) || 0; // Valor do campo 'dnpOD'
        const dnpOE = parseFloat($('#dnpOE').val()) || 0; // Valor do campo 'dnpOE'
        const diagonal = parseFloat($('#idiagonalMaior').val()) || 0; // Valor do campo 'diagonalMaior'

        // Calcula o resultado de acordo com a fórmula
        return ponte + horizontal - (dnpOD + dnpOE) + diagonal;
    }

    // Função para verificar se todos os campos estão preenchidos
    function verificarCamposPreenchidos() {
        let preenchido = true;

        // Seleciona todos os inputs dentro do formulário
        $('#form-receita input').not('#iadicaoOD, #iadicaoOE').each(function () {
            if ($(this).val() === "") {
                preenchido = false;
            }
        });

        // Libera o container apenas se todos os campos forem preenchidos
        if (preenchido) {
            $('#container-escolha-lente').show();  // Torna o container visível
            const diametroCalculado = calcDiametro(); // Calcula o diâmetro
            $('#diametroLente').text('Diâmetro: ' + diametroCalculado.toFixed(2)); // Exibe o resultado
            carregarLentes(diametroCalculado); // Passa o valor calculado para carregar as lentes
        } else {
            $('#container-escolha-lente').hide();  // Esconde o container
            $('#diametroLente').text(''); // Limpa o texto do diâmetro
        }
    }

    // Chama a função sempre que um campo é alterado
    $('#form-receita input').on('input', function () {
        verificarCamposPreenchidos();
    });

    // Inicializa a verificação ao carregar a página
    verificarCamposPreenchidos();
});
