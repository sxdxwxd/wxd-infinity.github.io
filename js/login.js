$(document).ready(function() {  
    $('#login-form').on('submit', function(event) {  
        event.preventDefault(); // 防止表单的默认提交行为  

        var username = $('#username').val();  
        var password = $('#password').val();  

        // 简单的表单验证  
        if (username === '' || password === '') {  
            alert('请输入用户名和密码');  
            return;  
        }  

        // 简单的登录验证  
        // 假设在实际情况下，您会将用户名和密码与数据库中的记录比较  
        if (username === 'admin' && password === '123') {  
            // 登录成功，跳转到首页  
            window.location.href = 'index.html';  
        } else {  
            // 登录失败，显示错误信息  
            alert('用户名或密码不正确');  
        }  
    });  
});  
