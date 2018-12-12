$(function() {
    $('#gd').mouseover(function() {
        $('.gg').show();
    }).mouseout(function() {
        $('.gg').hide();
    })

    $('td').mouseover(function() {
        $(this).css({
            background: '#999',
            color: 'red',
            opacity: '0.7',
        }).siblings('td').css({
            color: '',
            background: '',
        })
    })

    $('td').click(function() {
        $(this).css({
            background: 'red',
            color: 'white',
            opacity: '0.7',
        })
        $('.gg').fadeOut(500).delay(800);
    })

    $('#wdj').mouseover(function() {
        $('.wdj-1').show();
    }).mouseout(function() {
        $('.wdj-1').hide();
    })
    $('.tt').mouseover(function() {
        $(this).css({
            background: '',
            color: 'red',
            opacity: '0.7',
        })
    })

    $('#qy').mouseover(function() {
        $('.qy-1').show();
    }).mouseout(function() {
        $('.qy-1').hide();
    })


    $('#kh').mouseover(function() {
        $('.kh-1').show();
    }).mouseout(function() {
        $('.kh-1').hide();
    })

    $('#li').mouseover(function() {
        $('#yc').show();
    })
    $('#li').mouseout(function() {
        $('#yc').hide();
    })
    //轮播图
    var m = 0;

    function sh() {

        $('.img li').eq(m).show().siblings('li').hide();

        $('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
    }


    function piao() {

        s = setInterval(function() {

            m++;

            if (m > 7) {
                m = 0;
            }
            sh(m);
        }, 1000)
    }


    piao();


    $('.box').mouseover(function() {

        clearInterval(s);

        $('.left,.right').show();
    }).mouseout(function() {

        piao();
        $('.left,.right').hide();

    })


    $('.num li').mouseover(function() {
        m = $(this).index();
        sh(m);
    })


    $('.right').click(function() {

        m++;

        if (m > 7) {
            m = 0;
        }
        sh(m);
    })


    $('.left').click(function() {

        m--;

        if (m < 0) {
            m = 7;
        }
        sh(m);
    })
    var timer,
        index = 1,
        liWidth = $('.cont li:first').width(),
        total = $('.cont li').length, //总个数12
        visible = Math.floor($('.cont').innerWidth() / liWidth), // 可视个数4
        max = Math.ceil(total / visible), // 页数 
        lis = $('.cont li'),
        ul = $('.cont ul');

    function play(nums) {

        if (nums > max) {
            nums = 1;
        } else if (nums <= 0) {
            nums = max;
        }
        index = nums;
        ul.stop().animate({ marginLeft: -(index - 1) * liWidth * visible }, 300);

    }

    $('#next').click(function() {
        play(index + 1);
    });
    $('#left').click(function() {
        play(index - 1);
    });


    $('#yd-1').click(function() {
        $('#img-1').hide();
    })

    var n = 0;
    $('.tab-head div').click(function() {
        n = $(this).index();
        sh(n);
 

        function aa() {

            $('.tab-head div').eq(n).show();

            $('#box-img img').eq(n).show().siblings('img').hide();
        }

        aa();
    })


    // 获取对象
    var pbl = document.getElementById('pbl');

    // 滚动事件
    window.onscroll = function() {
        // 每次滚到到底部 就请求数据

        // 文档总高度
        var aHeight = document.documentElement.offsetHeight;
        //console.log(aHeight);
        // 可视区域高度
        var cHeight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
        //console.log(cHeight);
        // 滚动高度
        var sHeight = document.documentElement.scrollTop || document.body.scrollTop;
        //console.log(sHeight);

        // 每次滚到到底部=总高度-可视区域高度
        if (aHeight - cHeight <= sHeight) {
            // 建立ajax请求数据
            Ajax('JSON').get('5.php', function(msg) {
                //console.log(msg);
                // console.log(msg[0]["pic"]);
                // console.log(msg[1]["pic"]);
                // console.log(msg[2]["pic"]);
                // console.log(msg[3]["pic"]);

                // 声明空格字符串
                var str = '';

                //for in 遍历对象 遍历4次 
                for (var i in msg) {
                    // console.log(msg[i]["pic"]);
                    str += '<img src="' + msg[i]["pic"] + '">';
                }
                //输出
                //console.log(str);

                // 如果加载到高度为20000
                if (aHeight >= 21000) {
                    //pbl.innerHTML=pbl.innerHTML;

                } else {
                    // 原有的图片加上闲情请求的图片
                    pbl.innerHTML += str;
                }


            });

        }

    }



    $(window).scroll(function() {
        var top = $(window).scrollTop();
        //console.log(top);
        if (top < 1000) {
            $('#search').css('display', 'none');
        } else {
            $('#search').css('display', 'block').css('position', 'fixed').css('z-index', '10000');
        }
        //console.log($('#search'));
    })

    $('img').on('mousedown', function(e) {
        e.preventDefault()
    })
    $('#goTop').on('click', function() {
        $('body,html').animate({ "scrollTop": 0 }, 500)

    });
})