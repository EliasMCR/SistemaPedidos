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
            'display': 'flex'
        });

        // Ocultando o botão de fechar
        $("#container-nav-end button").css({
            'display': 'none'
        });
    });
});
