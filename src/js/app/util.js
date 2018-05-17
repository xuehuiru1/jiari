define(['jquery', 'handlebars'], function($, hand) {
    var render = function(res, source, target) {
        var sources = source.html();
        var template = hand.compile(sources);
        var html = template(res);
        //console.log(html);
        target.append(html);
    }
    return render;
});