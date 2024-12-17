$(document).ready(function () {
    // Evento de abrir o menu
    $("#btn-menu").click(function () {
        // Exibindo os elementos com a classe .nav-btn-items
        $(".nav-btn-items").css({
            'display': 'block'
        });

        // Aplicando margem aos ícones
        $("#container-items div i").css({
            'margin-right': '10px'
        });

        // Alterando alinhamento dos itens
        $('#container-items div').css({
            'justify-content': 'flex-start'
        });

        // Ocultando o botão do menu
        $("#btn-menu").css({
            'display': 'none'
        });

        // Exibindo o botão de fechar
        $("#container-nav-end button").css({
            'display': 'block'
        });
    });

    // Evento de fechar o menu
    $("#icon-nav-end").click(function () {
        // Escondendo os elementos com a classe .nav-btn-items
        $(".nav-btn-items").css({
            'display': 'none'
        });

        // Removendo margem dos ícones
        $("#container-items div i").css({
            'margin-right': '0'
        });

        // Restaurando alinhamento dos itens
        $('#container-items div').css({
            'justify-content': 'center'
        });

        // Exibindo o botão do menu
        $("#btn-menu").css({
            'display': 'block'
        });

        // Ocultando o botão de fechar
        $("#container-nav-end button").css({
            'display': 'none'
        });
    });
});

// click botao criar pedido
$(document).ready(function () {
    // Função para resetar a cor de todos os ícones
    function resetIconColor() {
        $("#icon-plus, #icon-search, #icon-checklist, #icon-x").css('color', ''); // Reseta a cor
    }

    function resetContainer() {
        $("#container-receita, #container-pesquisa, #container-listagem, #container-listagem, #container-cancelar").css('display', 'none');
    }

    // Evento de clique no ícone e no botão "Criar Pedido"
    $("#create-order, #icon-plus").click(function () {
        resetIconColor(); // Reseta a cor de todos os ícones
        resetContainer(); //reseta os container
        $("#container-receita").css('display', 'block');
        $("#icon-plus").css('color', 'yellow'); // Altera a cor do ícone clicado
        $("#tituloPrimeiraPag").css('display', 'none');
    });

    // Evento de clique no ícone e no botão "Verificar Pedido"
    $("#check-order, #icon-search").click(function () {
        resetIconColor(); // Reseta a cor de todos os ícones
        resetContainer(); //reseta os container
        $("#container-pesquisa").css('display', 'block');
        $("#icon-search").css('color', 'yellow'); // Altera a cor do ícone clicado
        $("#tituloPrimeiraPag").css('display', 'none');
    });

    // Evento de clique no ícone e no botão "Listar Pedidos"
    $("#list-orders, #icon-checklist").click(function () {
        resetIconColor(); // Reseta a cor de todos os ícones
        resetContainer(); //reseta os container
        $("#container-listagem").css('display', 'block');
        $("#icon-checklist").css('color', 'yellow'); // Altera a cor do ícone clicado
        $("#tituloPrimeiraPag").css('display', 'none');
    });

    // Evento de clique no ícone e no botão "Cancelar Pedido"
    $("#cancel-order, #icon-x").click(function () {
        resetIconColor(); // Reseta a cor de todos os ícones
        resetContainer(); //reseta os container
        $("#container-cancelar").css('display', 'block');
        $("#icon-x").css('color', 'yellow'); // Altera a cor do ícone clicado
        $("#tituloPrimeiraPag").css('display', 'none');
    });
});



