/**
 * Created by syarif on 5/17/16.
 */
$(function(){
    $("#link-register").click(function(){
        $("#login").hide();
        $("#register").show();
        $(".login").find(".title").html("SILAHKAN REGISTER");
        return false;
    });
    $("#link-login").click(function(){
        $("#login").show();
        $("#register").hide();
        $(".login").find(".title").html("SILAHKAN LOGIN");
        return false;
    });

    $(".sortnfilter").click(function(){
        var boxId = $(this).attr('def');
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(".sortnfilter").removeClass('active');
            $(this).addClass('active');
        }
        if($("#"+boxId).is(":visible")){
            $("#"+boxId).hide();
        }else{
            $(".tool-box").hide();
            $("#"+boxId).show();
        }
    });

    $(".filter-point h1").click(function () {
        $('.filter-point h1').parent().find('ul').slideUp();
        $('.filter-point h1').find("i").addClass('fa-plus-circle');
        $('.filter-point h1').find("i").removeClass('fa-minus-circle');
        if ($(this).parent().find('ul').is(":visible")) {
            $(this).removeClass('active');
        } else {
            $(this).parent().find('ul').slideDown();
            $(".filter-point h1").removeClass('active');
            $(this).addClass('active');
        }
    });

    /*$(".sort").click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(".sort").addClass('active');
        }
        $("#sort-box").toggle();
        return false;
    });

    $(".filter").click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(".filter").addClass('active');
        }
        $("#filter-box").toggle();
        return false;
    });*/

    $("#sort-box li a").click(function(){
        $("#sort-box li a").removeClass("active");
        $(this).addClass('active');
        return false;
    });

});