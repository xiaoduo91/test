define(['jquery', '../utils'], function ($, utils) {

    utils.setMenu('/teacher/index');
    $('#teacherManage').on('submit', function(){
    	alert(1);
    	var formData=$(this).serialize();
          $.ajax({
          	url:"/api/teacher/add",
          	type:'post',
          	success: function (info) {
                console.log(info);
            }
          })
    	
    	return false;
    })
 });  