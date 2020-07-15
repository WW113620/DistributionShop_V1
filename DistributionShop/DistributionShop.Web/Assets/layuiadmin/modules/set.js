

layui.define(['form', 'upload'], function (exports) {
    var $ = layui.$
        , layer = layui.layer
        , laytpl = layui.laytpl
        , setter = layui.setter
        , view = layui.view
        , admin = layui.admin
        , form = layui.form
        , upload = layui.upload;

    var $body = $('body');

    //自定义验证
    form.verify({
        username: function (value) {
            if ($.trim(value) === "") {
                return '用户名不能为空';
            }
            if ((/^[a-zA-Z0-9_]{2,20}$/.test(value) === false) && (/^[a-z0-9]+([._\\-]*[a-z0-9])*@@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){2,20}[a-z0-9]+$/.test(value) === false)) {
                return "用户名由2-20位英文字母、数字或下划线";
            }
            var domainUrl = layui.setter.baseUrl + "Account/Exist";
            var isExistEmail = isExistValue(value, domainUrl);
            if (isExistEmail === true) {
                return "该用户名已存在";
            }


        }
        , nickname: function (value, item) { //value：表单的值、item：表单的DOM对象
            if ($.trim(value) === "") {
                return '昵称不能为空';
            }
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '昵称不能有特殊字符';
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '昵称首尾不能出现下划线\'_\'';
            }
            if (/^[0-9]+$/.test(value)) {
                return '昵称不能全为数字';
            }
        }

        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        , pass: [
            /^[\S]{6,20}$/
            , '密码必须6到20位，且不能出现空格'
        ]

        //确认密码
        , repass: function (value) {
            if (value !== $('#LAY_password').val()) {
                return '两次密码输入不一致';
            }
        }
        , realname: function (value) {
            if (value) {
                if (value.length < 2) {
                    return '姓名至少为2个字符长度';
                }
                if (/^[0-9]+$/.test(value)) {
                    return '姓名不能是数字';
                }
            }
        }
        , newPhone: function (value) {
            value = StrTrim(value);
            if (!new RegExp("^[0-9]{9,11}$").test(value)) {
                return '请输入正确的手机号格式';
            }
        }
        , weixin: function (value) {
            if (value) {
                if (!new RegExp("^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$").test(value)) {
                    return '请输入正确的微信号';
                }
            }
        }
    });

    //网站设置
    form.on('submit(set_website)', function (obj) {
        layer.msg(JSON.stringify(obj.field));

        //提交修改
        /*
        admin.req({
          url: ''
          ,data: obj.field
          ,success: function(){
            
          }
        });
        */
        return false;
    });

    //邮件服务
    form.on('submit(set_system_email)', function (obj) {
        layer.msg(JSON.stringify(obj.field));

        //提交修改
        /*
        admin.req({
          url: ''
          ,data: obj.field
          ,success: function(){
            
          }
        });
        */
        return false;
    });


    //设置我的资料
    form.on('submit(setmyinfo)', function (obj) {
        $ajaxLoadingFunc(layui.setter.baseUrl + "Account/SaveInfo", obj.field, function (res) {
            if (res.code === 0) {
                layer.msg("保存成功", { time: 1000, offset: 'auto' }, function (index) {
                    layer.close(index);
                    location.href = layui.setter.baseUrl + "Account/Info";
                });
            } else if (res.code === 2) {
                location.href = layui.setter.baseUrl + "Account/LoginOut";
            }
            else {
                LayerMsg(res.msg);
            }
        });

        return false;
    });

    //添加管理员
    form.on('submit(addAccount)', function (obj) {
        if (obj.field.State && obj.field.State === "on") {
            obj.field.State = "0";
        } else {
            obj.field.State = "1";
        }

        $ajaxLoadingFunc(layui.setter.baseUrl + "Account/AddAccount", obj.field, function (res) {
            if (res.code === 0) {
                layer.msg("添加成功", { time: 1000, offset: 'auto' }, function (index) {
                    layer.close(index);
                    location.href = layui.setter.baseUrl + "Account/List";
                });
            }
            else {
                LayerMsg(res.msg);
            }
        });

        return false;
    });

    //上传头像
    var avatarSrc = $('#LAY_avatarSrc');
    upload.render({
        url: '/api/upload/'
        , elem: '#LAY_avatarUpload'
        , done: function (res) {
            if (res.status == 0) {
                avatarSrc.val(res.url);
            } else {
                layer.msg(res.msg, { icon: 5 });
            }
        }
    });

    //查看头像
    admin.events.avartatPreview = function (othis) {
        var src = avatarSrc.val();
        layer.photos({
            photos: {
                "title": "查看头像" //相册标题
                , "data": [{
                    "src": src //原图地址
                }]
            }
            , shade: 0.01
            , closeBtn: 1
            , anim: 5
        });
    };


    //设置密码
    form.on('submit(setmypass)', function (obj) {
        $.ajax({
            url: layui.setter.baseUrl + "Account/ChangePassword",
            type: "post",
            data: obj.field,
            dataType: "json",
            success: function (res) {
                if (res.code === 0) {
                    layer.msg("密码重置成功", { time: 1000, offset: 'auto' }, function (index) {
                        layer.close(index);
                        location.href = layui.setter.baseUrl + "Account/LoginOut";
                    });
                } else if (res.code === 2) {
                    location.href = layui.setter.baseUrl + "Account/LoginOut";
                }
                else {
                    LayerMsg(res.msg);
                }
            }
        });

        return false;
    });

    //对外暴露的接口
    exports('set', {});
});