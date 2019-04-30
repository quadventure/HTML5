$(document).ready(function () {
    alert("jquery loaded");

    $(".FirstDivID").click (function (event){
        event.preventDefault();
        $(this).addClass("test");
//        $(this).removeClass("test");
        $(this).hide("slow");
        $(this).toggle("slow");
        $(this).show("slow");
        $(this).append('<p>append</p>');
        $(this).before('<p>before</p>');
        $(this).after('<p>after</p>');
        $(this).prepend('<p>prepend</p>');
//???        $(this).replaceAll('p');
//???        $(this).wrap('<em></em>');
        alert("before remove");
        $(this).remove();
    });

    $(".SecondDivID").click (function (event){
        event.preventDefault();
        $(this).addClass("test");
//        $(this).removeClass("test");
        $(this).hide("slow");
        $(this).toggle("slow");
        $(this).show("slow");
        $(this).append('<p>append</p>');
        $(this).before('<p>before</p>');
        $(this).after('<p>after</p>');
        $(this).prepend('<p>prepend</p>');
//???        $(this).replaceAll('p');
//???        $(this).wrap('<em></em>');
        alert("before remove");
        $(this).remove();
    });
    $(function() {
        $(".SecondDivID").load("htmlpage2.html");
    });
 
});
