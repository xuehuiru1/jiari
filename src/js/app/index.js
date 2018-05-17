require(['jquery', "bscroll", 'util', 'swiper', 'getUrl'], function($, bscroll, util, swiper, getUrl) {
    initpage();

    function loadSwiper() {
        $.ajax({
            url: "/api",
            dataType: "json",
            success: function(res) {
                if (res.code == 1) {
                    // console.log(res)
                    util(res.data, $('#swiper-tpl'), $('.banner'));
                    new swiper('.box', {
                        loop: true,
                        autoplay: 2000,
                        pagination: '.page'
                    })
                }
            },
            error: function(error) {
                console.wran(error);
            }
        })
    }

    function loadList(pathNum) {
        $.ajax({
            url: "/list",
            dataType: "json",
            success: function(res) {
                if (res.code == 1) {
                    // console.log(res)
                    util(res.data, $('#list-tpl'), $('.list'));
                }
            },
            error: function(error) {
                console.wran(error);
            }
        })
    }

    var listIscroll = new bscroll('.cont', {
        scrollY: true,
        probeType: 2,
        click: true
    });
    listIscroll.on('scroll', function() {
        if (this.y < this.maxScrollY - 80) {
            $('.login>span').html("释放加载更多....");

        } else if (this.y < this.maxScrollY - 40) {
            $('.login>span').html("上拉加载更多....");
        }
    })
    listIscroll.on('scrollEnd', function() {
        $('.login>span').html("上拉加载更多....");

    })
    listIscroll.on('touchEnd', function() {
        if ($('.login>span').html() === '上拉加载更多....') {
            loadList();
        }
    })

    function initpage() {
        loadSwiper();
        loadList();
    }
})