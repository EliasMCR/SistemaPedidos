$(document).ready(function () {
    $("#form-pesquisar").on("submit", function (e) {
        e.preventDefault();

        // Obter o ID do pedido digitado pelo usuário
        const pedidoId = $("#ipesquisa").val();

        // Fazer a requisição AJAX
        $.ajax({
            url: `/pedido/pesquisar/${pedidoId}`, // Endpoint para buscar o pedido por ID
            method: "GET",
            dataType: "json",
            success: function (pedido) {
                // Limpar o tbody da tabela antes de inserir os novos dados
                $("#pesquisa-pedidos tbody").empty();

                // Adicionar a linha com os dados do pedido
                const row = `
                    <tr>
                        <td>${pedido.id}</td>
                        <td>${pedido.dataCriacao}</td>
                        <td>${pedido.dataPrevisaoEntrega}</td>
                        <td>${pedido.status}</td>
                    </tr>
                `;
                $("#pesquisa-pedidos tbody").append(row);
            },
            error: function (error) {
                console.error("Erro ao buscar pedido:", error);
                alert("Erro: Pedido não encontrado ou ocorreu um problema na requisição.");
            }
        });
    });
});


// apagar

$(document).ready(function () {
    $("#form-apagar").on("submit", function (e) {
        e.preventDefault();

        // Obter o ID do pedido digitado pelo usuário
        const pedidoId = $("#iapagar").val();

        // Confirmar a ação com o usuário antes de prosseguir
        if (!confirm(`Tem certeza que deseja apagar o pedido com ID ${pedidoId}?`)) {
            return;
        }

        // Fazer a requisição AJAX
        $.ajax({
            url: `/pedido/cancelar/${pedidoId}`, // Endpoint para apagar o pedido por ID
            method: "DELETE",
            success: function () {
                alert("Pedido cancelado com sucesso!");
                $("#iapagar").val(""); // Limpar o campo de entrada
            },
            error: function (error) {
                console.error("Erro ao cancelar pedido:", error);
                alert("Erro: Não foi possível cancelar o pedido. Verifique se o ID é válido.");
            }
        });
    });
});

