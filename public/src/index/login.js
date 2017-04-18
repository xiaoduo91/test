//登录功能
define(['jquery','cookie'], function($){
    // 要将
      $("#loginForm").on("submit",function(){
        var  formData=$(this).serialize();
        
        $.ajax({

            url:'/api/login',
            type:'post',
            data:formData,
            success:function(info){

                if(info.code==200){

                    alert("登录成功");

                        $.cookie('loginfo', JSON.stringify(info.result));
                        location.href ='/';

                      

                }
            }

        });
        return false;

      });
})
     