$(function(){
    $('#btn').click(function(){
        var link1 = $('#link1').val();
        var link2 = $('#link2').val();
        var link3 = $('#link3').val();
        var link4 = $('#link4').val();
        var link4 = $('#link5').val();
        var link4 = $('#link6').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link1==null || link1=="",content==null || content=="")
        if (link2==null || link2=="",content==null || content=="")
        if (link3==null || link3=="",content==null || content=="")
        if (link4==null || link4=="",content==null || content=="")
        if (link5==null || link5=="",content==null || content=="")
        if (link6==null || link6=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        $.post(link1, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link1, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link1, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link1, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link1, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link2, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link2, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link2, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link2, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link2, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link3, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link3, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link3, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link3, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link3, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link4, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link4, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link4, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link4, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link4, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link5, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link5, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link5, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link5, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link5, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link6, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link6, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link6, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link6, {"content": content, "username": username, "avatar_url": avatar,});
        $.post(link6, {"content": content, "username": username, "avatar_url": avatar,});
    });
});
