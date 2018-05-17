var gulp = require('gulp');
var server = require('gulp-webserver');
var dataIndex = require('./src/data/json.json');
var dataDetail = require('./src/data/detail.json');
var url = require('url');

gulp.task('server', function() {
    gulp.src("src")
        .pipe(server({
            port: 8888,
            open: true,
            middleware: function(req, res, next) {
                var pathName = url.parse(req.url, true).pathname;
                if (pathName === '/api') {
                    var data = {
                        code: 1,
                        data: dataIndex.swiper
                    }
                    res.end(JSON.stringify(data));
                } else if (pathName === "/list") {
                    var data = {
                        code: 1,
                        data: dataIndex.list
                    }
                    res.end(JSON.stringify(data));
                } else if (pathName === '/api/detail') {
                    var data = {
                        code: 1,
                        data: dataDetail
                    }
                    res.end(JSON.stringify(data));
                }
                next();
            }
        }))
})


gulp.task('default', ['server']);