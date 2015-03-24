(function (qs, $) {

    $(document).ready(function () {

        var infobox = qs.infobox.init();

        qs.tagger.init('[data-tag]', {
            infobox: infobox 
            // should be changed to event handlers
            // activate: infobox.displayTagLinks,
            // deactivate: infobox.hideTagLinks
        });

        $('#container').append('<i>version: objects</i>');
    
    });

} (this.qs = this.qs || {}, jQuery));