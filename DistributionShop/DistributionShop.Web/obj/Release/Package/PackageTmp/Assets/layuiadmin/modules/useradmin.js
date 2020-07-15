

layui.define(['table', 'form'], function (exports) {
    var $ = layui.$
        , table = layui.table
        , form = layui.form;

    //用户列表
    table.render({
        elem: '#LAY-user-manage'
        , url: layui.setter.baseUrl + 'User/GetList'
        , cols: [[
              { field: 'Id', width: 80, title: 'ID', sort: true }
            , { field: 'UserName', minWidth: 200, title: '用户名' }
            , { field: 'NickName', title: '昵称' }
            , { field: 'PhoneValue', width: 130, title: '手机' }
            , { field: 'Email', minWidth: 190, title: '邮箱' }
            , { field: 'Weixin', width: 150, title: '微信' }
            , { field: 'RoleName', width: 120, title: '角色' }
            , { field: 'check', title: '审核状态', templet: '#buttonTpl', width: 120, align: 'center' }
            , { title: '操作', width: 250, align: 'center', fixed: 'right', toolbar: '#table-useradmin-webuser' }
        ]]
        , page: true
        , limit: 10
        , height: 'full-220'
        , text: {
            none: '暂无相关数据'
        }
    });

    //监听工具条
    table.on('tool(LAY-user-manage)', function (obj) {
        var data = obj.data;
        if (obj.event === 'del') {
            layer.confirm("是否删除此用户账号？", { title: false, closeBtn: 0 }, function (index) {
                layer.close(index);
                $ajaxLoadingFunc(layui.setter.baseUrl + 'Account/Delete', { Id: data.Id }, function (res) {
                    if (res.code === 0) {
                        layer.msg("删除成功", { time: 1000, offset: 'auto' }, function (index) {
                            layer.close(index);
                            table.reload('LAY-user-manage');
                        });
                    } else {
                        layer.msg(res.msg, { time: 1200, offset: 'auto' });
                    }
                });
            });
        } else if (obj.event === 'edit') {
            var tr = $(obj.tr);

            layer.open({
                type: 2
                , title: '编辑用户信息'
                , content: layui.setter.baseUrl + 'User/Edit/' + data.Id
                , maxmin: true
                , area: ['500px', '550px']
                , btn: ['确定', '取消']
                , yes: function (index, layero) {
                    var iframeWindow = window['layui-layer-iframe' + index]
                        , submitID = 'LAY-user-front-submit'
                        , submit = layero.find('iframe').contents().find('#' + submitID);

                    //监听提交
                    iframeWindow.layui.form.on('submit(' + submitID + ')', function (data) {
                        var field = data.field; //获取提交的字段
                        console.log(JSON.stringify(field));
                        $ajaxLoadingFunc(layui.setter.baseUrl + 'Account/SaveInfo', field, function (res) {
                            layer.close(index);
                            if (res.code === 0) {
                                layer.msg("操作成功", { time: 1000, offset: 'auto' }, function (index) {
                                    layer.close(index);
                                    table.reload('LAY-user-manage'); 
                                });
                            } else {
                                LayerAlert(res.msg);
                            }
                        });

                    });

                    submit.trigger('click');
                }
                , success: function (layero, index) {

                }
            });
        }
        else if (obj.event === 'password') {
            layer.confirm("确认重置该用户的密码么？<br/>请谨慎使用", { title: false, closeBtn: 0 }, function (index) {
                layer.close(index);
                $ajaxLoadingFunc(layui.setter.baseUrl + 'User/ResetPassword', { Id: data.Id }, function (res) {
                    if (res.code === 0) {
                        LayerAlert("此用户的新密码是：" + res.msg);
                    } else {
                        LayerAlert(res.msg);
                    }
                });
            });
        }
        else if (obj.event === 'checkState') {
            var state = 0;
            var message = "是否通过此用户的审核？";
            if (data.State === 1) {
                state = 0;
                message = "是否通过此用户的审核？";
            } else if (data.State === 0) {
                state = 2;
                message = "是否锁定此用户？";
            } else if (data.State === 2) {
                state = 0;
                message = "是否解除锁定此用户？";
            }
            layer.confirm(message, { title: false, closeBtn: 0 }, function (index) {
                layer.close(index);
                $ajaxLoadingFunc(layui.setter.baseUrl + 'Account/CheckState', { Id: data.Id, state: state }, function (res) {
                    if (res.code === 0) {
                        layer.msg("操作成功", { time: 1000, offset: 'auto' }, function (index) {
                            layer.close(index);
                            table.reload('LAY-user-manage');
                        });
                    } else {
                        LayerAlert(res.msg);
                    }
                });
            });
        }
    });

    //管理员管理
    table.render({
        elem: '#LAY-user-back-manage'
        , url: layui.setter.baseUrl + 'Account/GetList'
        , cols: [[
            { field: 'Id', width: 80, title: 'ID', sort: true }
            , { field: 'UserName', title: '登录名' }
            , { field: 'NickName', title: '昵称' }
            , { field: 'RealName', width: 120, title: '姓名' }
            , { field: 'Phone', width: 120, title: '手机' }
            , { field: 'Email', minWidth: 180, title: '邮箱' }
            , { field: 'Weixin', width: 150, title: '微信' }
            , { field: 'RoleName', width: 120, title: '角色' }
            , { field: 'AddTimeValue', title: '添加时间', sort: true }
            , { field: 'check', title: '审核状态', templet: '#buttonTpl', width: 120, align: 'center' }
            , { title: '操作', width: 260, align: 'center', fixed: 'right', toolbar: '#table-useradmin-admin' }
        ]]
        , text: {
            none: '暂无相关数据'
        }
    });

    //监听工具条
    table.on('tool(LAY-user-back-manage)', function (obj) {
        var data = obj.data;
        if (obj.event === 'del') {
            layer.confirm("是否删除此管理员账号？", { title: false, closeBtn: 0 }, function (index) {
                layer.close(index);
                $ajaxLoadingFunc(layui.setter.baseUrl + 'Account/Delete', { Id: data.Id }, function (res) {
                    if (res.code === 0) {
                        layer.msg("删除成功", { time: 1000, offset: 'auto' }, function (index) {
                            layer.close(index);
                            table.reload('LAY-user-back-manage');
                        });
                    } else {
                        LayerAlert(res.msg);
                    }
                });
            });
        } else if (obj.event === 'edit') {
            var accountId = data.Id;
            location.href = layui.setter.baseUrl + 'Account/Edit/' + accountId;
        }
        else if (obj.event === 'password') {
            var tr = $(obj.tr);
            var userName = data.UserName;
            layer.open({
                type: 2
                , title: '修改密码'
                , content: layui.setter.baseUrl + 'Account/AccountPwd'
                , maxmin: true
                , area: ['500px', '300px']
                , btn: ['确定', '取消']
                , yes: function (index, layero) {
                    var iframeWindow = window['layui-layer-iframe' + index]
                        , submitID = 'LAY-user-front-submit'
                        , submit = layero.find('iframe').contents().find('#' + submitID);

                    //监听提交
                    iframeWindow.layui.form.on('submit(' + submitID + ')', function (data) {
                        var field = data.field; //获取提交的字段
                        field.userName = userName;
                        console.log(field);
                        $ajaxLoadingFunc(layui.setter.baseUrl + 'Account/SaveChangePwd', field, function (res) {
                            if (res.code === 0) {
                                layer.msg("密码重置成功", { time: 1000, offset: 'auto' }, function (index) {
                                    layer.close(index);
                                    table.reload('LAY-user-back-manage');
                                });
                            } else if (res.code === 2) {
                                layer.msg(res.msg, { time: 1000, offset: 'auto' }, function (index) {
                                    layer.close(index);
                                    location.href = layui.setter.baseUrl + "Account/LoginOut";
                                });
                            }
                            else {
                                LayerAlert(res.msg);
                            }

                        });

                    });

                    submit.trigger('click');
                }
                , success: function (layero, index) {

                }
            });

        }
        else if (obj.event === 'checkState') {
            var state = 0;
            var message = "是否通过此管理员的审核？";
            if (data.State === 1) {
                state = 0;
                message = "是否通过此管理员的审核？";
            } else if (data.State === 0) {
                state = 2;
                message = "是否锁定此管理员？";
            } else if (data.State === 2) {
                state = 0;
                message = "是否解除锁定此管理员？";
            }
            layer.confirm(message, { title: false, closeBtn: 0 }, function (index) {
                layer.close(index);
                $ajaxLoadingFunc(layui.setter.baseUrl + 'Account/CheckState', { Id: data.Id, state: state }, function (res) {
                    if (res.code === 0) {
                        layer.msg("操作成功", { time: 1000, offset: 'auto' }, function (index) {
                            layer.close(index);
                            table.reload('LAY-user-back-manage'); //数据刷新
                        });
                    } else {
                        LayerAlert(res.msg);
                        
                    }
                });
            });
        }
    });

    //角色管理
    table.render({
        elem: '#LAY-user-back-role'
        , url: layui.setter.base + 'json/useradmin/role.js' //模拟接口
        , cols: [[
            { type: 'checkbox', fixed: 'left' }
            , { field: 'id', width: 80, title: 'ID', sort: true }
            , { field: 'rolename', title: '角色名' }
            , { field: 'limits', title: '拥有权限' }
            , { field: 'descr', title: '具体描述' }
            , { title: '操作', width: 150, align: 'center', fixed: 'right', toolbar: '#table-useradmin-admin' }
        ]]
        , text: '对不起，加载出现异常！'
    });

    //监听工具条
    table.on('tool(LAY-user-back-role)', function (obj) {
        var data = obj.data;
        if (obj.event === 'del') {
            layer.confirm('确定删除此角色？', function (index) {
                obj.del();
                layer.close(index);
            });
        } else if (obj.event === 'edit') {
            var tr = $(obj.tr);

            layer.open({
                type: 2
                , title: '编辑角色信息'
                , content: '../../../views/user/administrators/roleform.html'
                , area: ['500px', '480px']
                , btn: ['确定', '取消']
                , yes: function (index, layero) {
                    var iframeWindow = window['layui-layer-iframe' + index]
                        , submit = layero.find('iframe').contents().find("#LAY-user-role-submit");

                    //监听提交
                    iframeWindow.layui.form.on('submit(LAY-user-role-submit)', function (data) {
                        var field = data.field; //获取提交的字段
                        
                        //提交 Ajax 成功后，静态更新表格中的数据
                        //$.ajax({});
                        table.reload('LAY-user-back-role'); //数据刷新
                        layer.close(index); //关闭弹层
                    });

                    submit.trigger('click');
                }
                , success: function (layero, index) {

                }
            });
        }
    });

    exports('useradmin', {});
});