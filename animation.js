$(function(){
    $('#slide').click(function(){
        if($('#slide').hasClass('off')){
            $(this).removeClass('off').addClass('on');
            $('#menu').animate({'right':'0px'},500);
        }else{
            $(this).removeClass('on').addClass('off');
            $('#menu').animate({'right':'-200px'},500);
        }
    });

    $('#login').click(function(){
        $('#login-modal').fadeIn();
    });

    $('#login-btn').click(function(){
        $('#login-modal').fadeIn();
    });
    $('#close-btn').click(function(){
        $('#login-modal').fadeOut();
    });
});