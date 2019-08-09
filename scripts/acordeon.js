$(document).ready(function(){
    initMenu();
});

function initMenu() {

    $('#menu ul').hide();
    $('#menu ul:eq(0)').show();

    $('#menu li a').click(
        function() {
            var iselemnt = $(this).next();
            if((iselemnt.is('ul')) && (iselemnt.is(':visible'))) {
                return false;
            }

            if((iselemnt.is('ul')) && (!iselemnt.is(':visible'))) {
                $('#menu ul:visible').slideUp('normal');
                iselemnt.slideDown('normal');
                return false;
            }
        }
    );
};