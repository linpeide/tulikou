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

    //轮播图
    var lis = document.getElementById('img').getElementsByTagName('li');
    var num_lis = document.getElementById('num').getElementsByTagName('li');
    var i = 0;

    function show(a, b) {
        lis[i].className = a;
        num_lis[i].className = b;
    }

    function autoRun() {
        run = setInterval(function() {
            show('', '');
            i++;
            if (i == lis.length) {
                i = 0;
            }
            show('active', 'active_num'); //0
        }, 1000)
    }
    autoRun();
    for (var j = 0; j < lis.length; j++) {
        lis[j].onmouseover = function() {
            clearInterval(run)
        }
        lis[j].onmouseout = function() {
            autoRun();
        }
    }
    for (var k = 0; k < num_lis.length; k++) {
        num_lis[k].index = k;
        num_lis[k].onmouseover = function() {
            clearInterval(run);
            show('', '');
            i = this.index;
            show('active', 'active_num');
        }
        num_lis[k].onmouseout = function() {
            autoRun();
        }
    }
    //选项卡
    $('span').eq(0).click(function() {
        $('.mt-1').show();
        $('#mt-1').hide();
    })
    $('span').eq(1).click(function() {
        $('.mt-1').hide();
        $('#mt-1').show();
    })
    
    // 楼层
    $('.floor').each(function() {})

    $('#lc dt').click(function() {
        var index = $(this).index();
        //console.log(index);
        //console.log($('.floor').eq(index).offset());
        var top = $('.floor').eq(index).offset().top;

        $('html').animate({ scrollTop: top }, 500);


        var heights = [];

        $('.floor').each(function() {
            heights.push($(this).offset().top)
        })
        //console.log(heights);

        $(window).scroll(function() {
            var top = $(window).scrollTop();
            //console.log(top);
            if (top < 1000) {
                $('#lc').hide();
            } else {
                $('#lc').show();
            }

            for (var i = 0; i < heights.length; i++) {

                if (top >= heights[i] && top < heights[i + 1]) {

                    var index = i;

                    $('#lc dt').eq(index).css('background', '#894099').css('color', 'white').siblings().css('background', '').css('color', 'black')
                } else if (top >= heights[heights.length - 1]) {
                    index = heights.length - 1;
                    $('#lc dt').eq(index).css('background', '#894099').siblings().css('background', '').css('color', 'black')
                }

            }
        })

    })

    $('#goTop').on('click', function() {
        $('body,html').animate({ "scrollTop": 0 }, 500)

    });
    $('img').on('mousedown', function(e) {
        e.preventDefault()
    })
})