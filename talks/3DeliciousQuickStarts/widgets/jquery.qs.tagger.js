(function ($) {

    var timer,
        hideAfter = 1000; // ms
    // could've been an option

    $.widget('qs.tagger', {

        widgetEventPrefix: 'tag',

        options: {
            activated: null,
            deactivated: null
        },

        _create: function () {
            var that = this,
                name = that.name,
                tag = that.element.text();

            that.element
            .addClass('qs-tagged')
            .bind('mouseenter.' + name, function (event) {
                clearTimeout(timer);
                that._trigger('activated', event, {name: tag});
            })
            .bind('mouseleave.' + name, function () {
                timer = setTimeout(function () {
                    that._trigger('deactivated');
                }, hideAfter);
            });
        },

        destroy: function () {
            $.Widget.prototype.destroy.apply(this, arguments);
            this.element.removeClass('qs-tagged');
        }

    });

} (jQuery));
