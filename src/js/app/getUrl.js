define(function() {
    function getUrl() {
        var url = location.search;
        var prams = {};
        if (url.indexOf('?') != -1) {
            url = url.substr(1);
            var arr = url.split('&');
            arr.forEach(function(item) {
                var objArr = item.split('=');
                prams[objArr[0]] = objArr[1]
            })
        }
        return prams;
    }
    return getUrl;
});