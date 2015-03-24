(function (qs, $) {

    var timer,
        hideAfter = 1000; // ms
        // could've been an option

    qs.tagger = {

        options: {
            infobox: null // could've been hardcoded in this 
                          // file or passed into init
        },

        init: function (selector, overrides) {

            var tags = $(selector),
                options = $.extend(this.options, overrides),
                infobox = options.infobox;

            // This example leans to the trivial side. If we
            // need to store element specific data, which is
            // common, we could do something similar to this
            //
            // tags.each(function() {
            //     var $this = $(this);
            //     $this.data['tagger'] = {name: $this.text()};
            // });
            //
            // so it can be pulled out when needed. But here, we
            // only need to add a class and some hover handlers.

            tags
            .addClass('qs-tagged')
            .hover(
                function(event) { // mouseenter
                    clearTimeout(timer);
                    if(options.infobox) {
                        infobox.displayTagLinks($(this).text(), event);
                    }
                },
                function() { // mouseleave
                    timer = setTimeout(function () {
                        infobox.hideTagLinks();
                    }, hideAfter);
                }
            );
        },

    };

} (this.qs = this.qs || {}, jQuery));
