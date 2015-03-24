(function ($, undefined) {

    $(document).ready(function () {

        var infobox = $('body').infobox();

        $('[data-tag]').tagger()
        .bind('activate', function (evnt, data) {
            infobox.infobox('displayTagLinks', data);
        })
        .bind('deactivate', function() {
            infobox.infobox('hideTagLinks');
        });

        $('#container').append('<i>version: plugins</i>');

    });

} (jQuery));
