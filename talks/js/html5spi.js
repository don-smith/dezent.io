$('html').bind('newAction', function(e, id) {
    switch(id) {
        case 2:
            $('#NavFig').fadeOut('fast');
            break;
    }
});
