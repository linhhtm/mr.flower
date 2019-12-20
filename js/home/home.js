$(document).ready(function(){
    if($(document).scrollTop() > 0){
        $('.navbar-home').addClass('scroll');
    }
    $(document).on('scroll',function(){
        if($(this).scrollTop() > 0){
            $('.navbar-home').addClass('scroll');
        }
        else{
            $('.navbar-home').removeClass('scroll');
        }
    });
})