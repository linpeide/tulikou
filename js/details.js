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
    $('.menu-list>li').mouseover(function() {
        $(this).css({
            background: 'black',
            color: 'white',
        }).siblings('li').css({
            color: '',
            background: '',
        })
    }).mouseout(function() {
        $(this).css({
            color: '',
            background: '',
        })

    })
    //放大镜
    $("#small").mousemove(function(e) {
        // move big显示
        $("#move,#big").show();

        // 获取移动的值
        var x = e.pageX - $(this).offset().left - $("#move").width() / 2;
        var y = e.pageY - $(this).offset().top - $("#move").height() / 2;
        // 判断边距
        if (x <= 0) {
            x = 0
        } else if (x >= $(this).width() - $("#move").width()) {
            x = $(this).width() - $("#move").width()
        }

        if (y <= 0) {
            y = 0
        } else if (y >= $(this).height() - $("#move").height()) {
            y = $(this).height() - $("#move").height()
        }
        // 赋值
        $("#move").css({ left: x + 'px', top: y + 'px' });

        // big img 移动

        //大图与小图的比例
        var scale = $("#big>img").width() / $("#small>img").width();
        

        //大图的运动距离=小图移动*scale
        // $("#big>img").css({left:-x*scale+'px',top:-y*scale+'px'}) 

        // 大图的容器 元素的滚动
        $("#big").scrollTop(y * scale);
        $("#big").scrollLeft(x * scale);


    }).mouseout(function() {
        // move big隐藏
        $("#move,#big").hide();
    })

    // 点击更换图片
    $('#dian li img').click(function() {
        // small big src=当前
        console.log($(this).attr("src"));
        $('#small>img,#big>img').attr("src", $(this).attr("src"));

    })

})