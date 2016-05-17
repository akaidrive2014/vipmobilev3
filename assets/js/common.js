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
});