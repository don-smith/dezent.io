// usage: log('inside coolFunc', this, arguments); // paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function () {
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if (this.console) {
        arguments.callee = arguments.callee.caller;
        console.log(Array.prototype.slice.call(arguments));
    }
};
// make it safe to use console.log always
(function (b) { function c() { } for (var d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), a; a = d.pop(); ) b[a] = b[a] || c })(window.console = window.console || {});

// Initialize the slideshow plug-in.
(function ($) {

    // Changes the background to the CSS class specified
    // in the data-bg attribute of the section element
    // or the default content class: content-bg
    var changeBackgroundCssClass = function(id) {
        var newClass = $('#slide'+id).data('bg') || 'content-bg';
        $('body').toggleClass(function(id, oldClass, addClass) {
            $(this).removeClass(oldClass); // removes the current class
            return newClass;  // the class to add: defined in site.css
        }, true); // true means the class will be added
    };

    var ok = function ok(value, msg, results) {
        var result = value ? 'pass' : 'fail';
        $('<div class="test-result">').text(msg)
            .addClass(result)
            .appendTo(results);
    };

    $('.run-button').click(function(){
        var codeElemId = '#' + $(this).data('code');
        eval( $(codeElemId).text() );
    });

    //You can trigger Javascript based on the slide number like this:
    $('html').bind('newSlide', function (e, id) {
        changeBackgroundCssClass(id);
        switch (id) {
            case 4:
                break;
            default:
                log('slide: ' + id);
                break;
        }
    });

    $('html').bind('newAction', function(e, id) {
        log('Action: ' + id);
    });

    SyntaxHighlighter.all({'smart-tabs': true});
    htmlSlides.init();

})(jQuery);
