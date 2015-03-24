(function ($, undefined) {

    var timer,
        hideAfter = 1000; // ms
        // could've been an option

    $.fn.tagger = function () {

        return this.each(function () {
            var $this = $(this),
                tagName = $this.text();

            // If we needed to store element specific data,
            // we can just do something like this
            // $this.data['tagger'] = {name: $this.text()};
            // and pull it out the same way when needed.

            $this
            .addClass('qs-tagged')
            .bind('mouseenter', function (evnt) {
                clearTimeout(timer);
                $this.trigger('activate', {
                    pageX: evnt.pageX,
                    pageY: evnt.pageY,
                    tagName: tagName
                });
            })
            .bind('mouseleave', function () {
                timer = setTimeout(function () {
                    $this.trigger('deactivate');
                }, hideAfter);
            });
        });

    };

} (jQuery));