$(document).ready(function () {

    search();

});
function search(){
    var input = $('.search input'),
        current = $('.search .current'),
        option = $('.search .option'),
        oLi = $('.search .option li'),
        onOff = true;
    input.hover(function(){
        if(onOff){
            current.fadeIn(300);
        }
    },function(){
        current.fadeOut(300);
    });
    input.focus(function(){
        onOff = false;
        current.fadeOut(300);
        option.fadeIn(300);
    });
    input.blur(function(){
        onOff = true;
    });
    oLi.click(function(){
        input.val($(this).text());
        $(this).parent().fadeOut(300);
    });
}