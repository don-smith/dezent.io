(function ($) {

    var offsetX = 20,
        offsetY = 20,
        mouseOverBox = false,
        leftSideAdjustment = -270;

    $.widget('qs.infobox', {

        options: {
            dataUrl: '',
            maxItems: 10
        },

        _create: function () {
            var that = this,
                name = that.name;
            that.infoboxElement = $('<div class="qs-infobox" />');
            that.infoboxElement.appendTo('body')
            .bind('mouseenter.' + name, function () {
                    mouseOverBox = true;
                })
            .bind('mouseleave.' + name, function () {
                    mouseOverBox = false;
                    that.hideTagLinks();
                });
        },

        hideTagLinks: function () {
            !mouseOverBox && this.infoboxElement.hide();
        },
        
        displayTagLinks: function (event, tagName) {
            var i,
                html,
                that = this,
                options = that.options,
                elem = that.infoboxElement,
                top = event.pageY + offsetY,
                left = event.pageX + offsetX,
                url = options.dataUrl + tagName + '?count=' + options.maxItems,
                displayResult = function () {
                    elem.html(html);
                    elem.css({top: top, left: left});
                    elem.show();
                };
            
            if (event.pageX > window.screenWidth / 2) {
                left = event.pageX + leftSideAdjustment; 
            }

            $.ajax({
                url: url,
                dataType: 'jsonp',
                success: function (data) {
                    if (data != null) {
                        html = '<h1>Popular Links for ' + tagName + '</h1><ul>';
                        for (i = 0; i < data.length - 1; i += 1) {
                            html += '<li><a href="' + data[i].u + '" target="_blank">' + data[i].d + '</a></li>';
                        }
                        html += '</ul>';
                    } else {
                        html = '<h1>Data Error</h1><p>The AJAX call returned null. This happens when using non-Internet Explorer browsers and is the expected behavior when viewing file based HTML files.</p><p>Please use Internet Explorer 9 and click the "Allow Blocked Content" button to run this QuickStart.</p>';
                    }
                    displayResult();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    html = '<h1>AJAX Error</h1><p>The AJAX call returned the following error: ' + jqXHR.statusText + '.</p>';
                    displayResult();
                }
            });
        },

        destroy: function () {
            $.Widget.prototype.destroy.call(this);
            this.infoboxElement.remove();
        }

    });
} (jQuery));
