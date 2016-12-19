$(document).ready(function(){
        alert("O site está em construção. Conclusão em 02/01/2017. Obrigado pela compreensão.");
        
        $(".job1").click(function(){
            $("#job1").slideToggle();     
        });
        $(".job2").click(function(){
            $("#job2").slideToggle();
        });
        $(".job3").click(function(){
            $("#job3").slideToggle();
        });
        $(".job4").click(function(){
            $("#job4").slideToggle();
        });
        $(".job5").click(function(){
            $("#job5").slideToggle();
        });
        $(".job6").click(function(){
            $("#job6").slideToggle();
        });
        
        $("#scrollPortfolio").click(function() {
            $('html, body').animate({
                scrollTop: $("#Portfolio").offset().top
            }, 600);
        });
        $("#scrollInicio").click(function() {
            $('html, body').animate({
                scrollTop: $("#Inicio").offset().top
            }, 600);
        });
    });