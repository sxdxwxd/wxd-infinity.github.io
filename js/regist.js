$(document).ready(function() {  
    $('#regist-form').on('submit', function(event) {  
        event.preventDefault(); // 防止表单的默认提交行为  

        var username = $('#username').val();  
        var password = $('#password').val();  
        var confirmPassword = $('#confirm-password').val();  

        // 简单的表单验证  
        if (username === '' || password === '' || confirmPassword === '') {  
            alert('请输入用户名和密码');  
            return;  
        }  

        // 验证密码是否匹配  
        if (password !== confirmPassword) {  
            alert('密码不匹配，请重新输入');  
            return;  
        }  

        // 在实际情况下，您可以将用户名和密码发送到后端进行注册  
        alert('注册成功！'); // 这里可以替换为后续处理  
        // 假设注册成功后，跳转到登录页面  
        window.location.href = 'login.html'; // 或者跳转到您希望的页面  
    });  
});