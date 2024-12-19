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
    $("#cilindroOD, #icilindroOE").on('input', function () {
        let valor = $(this).val();
        if (valor && valor > 0) {
            $(this).val(-Math.abs(valor)); // Torna o valor negativo
        }
    });
});

//verificar eixo
$(document).ready(function () {
    $('#eixoOD, #eixoOE').on('input', function () {
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
        if (isNaN(diametro) || diametro <= 0) {
            console.error("Diâmetro inválido: ", diametro);
            alert("Erro: diâmetro inválido. Verifique os valores inseridos.");
            return;
        }

        console.log("Enviando requisição com diâmetro: ", diametro);

        $.ajax({
            url: `http://localhost:8080/lente/listar/${diametro}`,  // Inclui o diâmetro na URL
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Lentes recebidas: ", data);

                // Preencher o select para OD
                var selectOD = $('#escolhaLenteOD');
                selectOD.empty();
                selectOD.append('<option value="">Selecione a lente OD</option>');

                data.forEach(function (lente) {
                    selectOD.append('<option value="' + lente.id + '">' + lente.material + ' - ' + lente.diametro + '</option>');
                });

                // Preencher o select para OE
                var selectOE = $('#escolhaLenteOE');
                selectOE.empty();
                selectOE.append('<option value="">Selecione a lente OE</option>');

                data.forEach(function (lente) {
                    selectOE.append('<option value="' + lente.id + '">' + lente.material + ' - ' + lente.diametro + '</option>');
                });
            },
            error: function (xhr, status, error) {
                console.error("Erro ao carregar as lentes:", status, error);
                alert("Erro ao carregar as lentes. Tente novamente mais tarde.");
            }
        });

    }

    // Função para calcular o diâmetro
    function calcDiametro() {
        const ponte = parseFloat($('#iponte').val()) || 0;
        const horizontal = parseFloat($('#ihorizontal').val()) || 0;
        const dnpOD = parseFloat($('#dnpOD').val()) || 0;
        const dnpOE = parseFloat($('#dnpOE').val()) || 0;
        const diagonal = parseFloat($('#idiagonalMaior').val()) || 0;

        const diametro = ponte + horizontal - (dnpOD + dnpOE) + diagonal;
        return diametro > 0 ? diametro : 0; // Garante que o valor seja positivo
    }

    // Função para verificar se todos os campos estão preenchidos
    function verificarCamposPreenchidos() {
        let preenchido = true;

        $('#form-receita input').not('#iadicaoOD, #iadicaoOE').each(function () {
            if ($(this).val() === "") {
                preenchido = false;
            }
        });

        if (preenchido) {
            $('#container-escolha-lente').show();
            const diametroCalculado = calcDiametro();
            $('#diametroLente').text('Diâmetro: ' + diametroCalculado.toFixed(2));
            carregarLentes(diametroCalculado); // Passa o valor calculado
        } else {
            $('#container-escolha-lente').hide();
            $('#diametroLente').text('');
        }
    }

    // Eventos
    $('#form-receita input').on('input', function () {
        verificarCamposPreenchidos();
    });

    verificarCamposPreenchidos();
});

//salvando pedido
document.getElementById("form-receita").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        esfericoOD: parseFloat(document.getElementById("esfericoOD").value),
        cilindroOD: parseFloat(document.getElementById("cilindroOD").value),
        eixoOD: parseInt(document.getElementById("eixoOD").value),
        adicaoOD: document.getElementById("iadicaoOD").value ? parseFloat(document.getElementById("iadicaoOD").value) : null,
        dnpOD: parseFloat(document.getElementById("dnpOD").value),
        alturaOD: parseFloat(document.getElementById("alturaOD").value),
        esfericoOE: parseFloat(document.getElementById("iesfericoOE").value),
        cilindroOE: parseFloat(document.getElementById("icilindroOE").value),
        eixoOE: parseInt(document.getElementById("ieixoOE").value),
        adicaoOE: document.getElementById("iadicaoOE").value ? parseFloat(document.getElementById("iadicaoOE").value) : null,
        dnpOE: parseFloat(document.getElementById("dnpOE").value),
        alturaOE: parseFloat(document.getElementById("alturaOE").value),
        vertical: parseFloat(document.getElementById("ivertical").value),
        diagonalMaior: parseFloat(document.getElementById("idiagonalMaior").value),
        horizontal: parseFloat(document.getElementById("ihorizontal").value),
        ponte: parseFloat(document.getElementById("iponte").value),
        codigoArmacao: document.getElementById("icodigoArmacao").value,
        corArmacao: document.getElementById("icorArmacao").value,
        escolhaLenteOD: parseInt(document.getElementById("escolhaLenteOD").value),
        escolhaLenteOE: parseInt(document.getElementById("escolhaLenteOE").value),
    };

    const response = await fetch("/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert("Pedido criado com sucesso!");
        location.reload();
    } else {
        alert("Erro ao criar pedido.");
    }
});

