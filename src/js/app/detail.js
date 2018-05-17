define(["jquery", "getUrl", "util", "handlebars"], function($, getUrl, util, handlebars) {
    $.ajax({
        url: "/api/detail",
        dataType: "json",
        success: function(res) {
            if (res.code == 1) {
                console.log(res);
                util(res.data[0], $('#detail-tpl'), $('.wrap'));
            }
        },
        error: function(error) {
            console.log(error);
        }
    })
});