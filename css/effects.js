$(document).ready(function(){
        
        alert("O site ainda está em construção. Conclusão em 02/01/2017.\nAlgumas das funções já estão ativas.\nVisite minha página nas rede sociais! :D \nObrigado pela compreensão.");
        
        $(".job1").click(function(){
            $(".overlay").slideDown();
        });
        $(".job2").click(function(){
            $(".overlay2").slideDown();
        });
        $(".job3").click(function(){
            $(".overlay3").slideDown();
        });
        $(".job4").click(function(){
            $(".overlay4").slideDown();
        });
        $(".job5").click(function(){
            $(".overlay5").slideDown();
        });
        $(".job6").click(function(){
            $(".overlay6").slideDown();
        });
        $(".overlay").click(function(){
            $(".overlay").slideUp();
        }); 
        $(".overlay2").click(function(){
            $(".overlay2").slideUp();
        }); 
        $(".overlay3").click(function(){
            $(".overlay3").slideUp();
        }); 
        $(".overlay4").click(function(){
            $(".overlay4").slideUp();
        }); 
        $(".overlay5").click(function(){
            $(".overlay5").slideUp();
        }); 
        $(".overlay6").click(function(){
            $(".overlay6").slideUp();
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