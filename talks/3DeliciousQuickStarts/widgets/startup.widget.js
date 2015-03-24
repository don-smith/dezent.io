(function ($) {

    var infobox = $('body').infobox({
        dataUrl: 'http://feeds.delicious.com/v2/json/popular/'
    });

    $('span[data-tag]').tagger({
        activated: function (event, data) {
            infobox.infobox('displayTagLinks', event, data.name);
        },
        deactivated: function () {
            infobox.infobox('hideTagLinks');
        }
    });

    $('#container').append('<i>version: widgets</i>');

} (jQuery));