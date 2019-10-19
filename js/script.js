$(document).ready(function() {

    //EFEITO DE FUMAÇA NO BANNER PRINCIPAL
    $(".row-bn, .info").ripples({
        dropRadius: 100,
        perturbance: 0,
    });

    // BOTÃO TOGGLER
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('change')
    });

    //MAGNIFIC POPUP PARA QUANDO CLICAR NA IMAGEM
    $("#menuFood").magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true
        }
    });

    //MAGNIFIC POPUP PARA QUANDO CLICAR NA IMAGEM
    $("#menuDrink").magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true
        }
    });

    //SLICK CARROSSEL PARA SLIDE NO CARDÁPIO
    $(".carrosel").slick({
        centerMode: true,
        mobileFist: true,
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]

    });

    //CARROSSEL DE IMAGENS DA CHURRASCARIA E DA COZINHA
    $('.fotos-churrascaria, .fotos-cozinha').slick({
        autoplay: true,
        autoplaySpeed: 700,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'Linear'
    });



    //FIXAR O MENU DE NAVEGAÇÃO NO TOPO DA PÁGINA
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        console.log(position);

        if (position >= 718) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    });



    //BOTÃO VOLTAR AO TOPO
    $(window).scroll(function() {
        let position = $(this).scrollTop();

        if (position >= 718) {
            $('#voltar-topo').addClass('scrollTop');
        } else {
            $('#voltar-topo').removeClass('scrollTop');
        }
    });


    //SUAVIZAÇÃO DO SCROLL PARA NAVEGAÇÃO 
    $('header-link, .btn-adiante, .navbar-brand, .nav-item a, #voltar-topo').click(function(link) {
        link.preventDefault(); // usado para cancelar o comportamento padrão do link ( tentar abrir uma nova página);
        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 1000); // TAXA EM MILISEGUNDOS. 


    });





})