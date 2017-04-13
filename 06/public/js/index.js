var l = function (n) {
    console.log(n);
}
$(function(){
    $("#regist").submit(function(){
        $.ajax({
            url:'/regist',
            type:'post',
            data:{
                username: $("#rUsername").val(),
                passrod: md5(md5($("#rPassword").val()).substr(1,5)+md5($("#rPassword").val()))
            },
            beforeSend:function(jqXHR,setting){

            },
            success:function(result){

            },
            complete : function(XMLHttpRequest,textStatus){

            },
            error:function(result){

            }
        });
        return false;
    });
});

