$(function() {
    var timer;
    timer = setInterval(function() {
        $(window).ready(function() {
            $('.bar').show();
            $('.bar').css({
                'width': $(document).width(),
                'height': $(document).height()
            })
            $('#show').show();
        })
        $('button').eq(0).click(function() {
            $('.bar').fadeOut();
            $('#show').fadeOut();

            clearInterval(timer);
        })
        $('button').eq(1).click(function() {
            $('.bar').show();
            $('#show').show();
        })
        $('button').eq(2).click(function() {
            $('.bar').fadeOut();
            $('#show').fadeOut();

            clearInterval(timer);
        })
        $('button').eq(3).click(function() {
            $('.bar').stop();
            $('#show').stop();
            clearInterval(timer);
        })
        $('button').eq(4).click(function() {
            // $('.bar').hide();
            // $('#show').hide();
            clearInterval(timer);
        })

    }, 1000)


    $('#show').mousedown(function(e) {
        $(this).css('cursor', 'move')

        var offset = $(this).offset();
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;

        $(document).mousemove(function(e) {
            var ll = e.pageX - x;
            var tt = e.pageY - y;

            if (ll <= 0) {
                ll = 0
            } else if (ll >= $('body').width() - $('#show').width()) {
                ll = $('body').width() - $('#show').width()
            }

            if (tt <= 0) {
                tt = 0
            } else if (tt >= $(document).height() - $('#show').height()) {
                tt = $(document).height() - $('#show').height()
            }
            $('#show').css({ left: ll + 'px', top: tt + 'px' });
        })

    })
    $(document).mouseup(function() {
        $(this).off('mousemove');
        $('#show').css('cursor', '')
    })

    $('#input-1').click(function() {
        $('span').eq(1).show();
        $('#ss').show();
        $('#hh').show();

    })
    $('#input-1').blur(function() {
        $('span').eq(1).hide();
        $('#ss').hide();
        $('#hh').hide();

    })

    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;


    $('button').click(function() {

        if ($('#input-1.phone').val().length == 0) {
            $('span').show();
            $('span').eq(0).html('请输入完整的手机号');
        } else if (reg.test($('.phone').val())) {
            $('span').hide();
            alert('当前号码可用');
        }
    })
    $('img').on('mousedown', function(e) {
        e.preventDefault()
    })
})