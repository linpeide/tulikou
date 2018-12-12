$(function() {

    $('#sm').click(function() {
        $('.ewm').css('display', 'block');
        $('#l').css('display', 'block');
        console.log($('ul>div>dl'));
        $('#q').css('display', 'block');
        $('#b').css('display', 'none');

    })

    $('#dl').click(function() {
        // console.log($(this));
        $('.ewm').css('display', 'none');
        $('#l').css('display', 'none');
        $('#q').css('display', 'none');
        $('#b').css('display', 'block');

    })
    var input = document.getElementsByTagName('input-1')[0];
    var span = document.getElementsByTagName('span')[0];
    // console.log(span);
    // 通过失去焦点事件 进行ajax请求
    $('#input-1').blur(function() {
        // 获取input的value值
        var uname = this.value;
        // console.log(uname);

        // 将获取的值发送到服务器文件
        Ajax().post('1.php', 'value=' + uname, function(msg) {
            console.log(msg);

            if (msg == 'y') {
                // 不能注册
                span.innerHTML = '对不起用户名已存在无法注册!'
            } else {
                // 能注册
                span.innerHTML = '恭喜！用户名可以使用'
            }
        });

    })
    $('img').on('mousedown', function(e) {
        e.preventDefault()
    })


})