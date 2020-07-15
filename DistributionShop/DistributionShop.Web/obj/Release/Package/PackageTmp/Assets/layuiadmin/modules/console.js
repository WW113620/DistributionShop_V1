/**

 @Name：layuiAdmin 主页控制台
 @Author：贤心
 @Site：http://www.layui.com/admin/
 @License：GPL-2
    
 */


layui.define(function (exports) {

    /*
      下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
    */


    //区块轮播切换
    layui.use(['admin', 'carousel'], function () {
        var $ = layui.$
            , admin = layui.admin
            , carousel = layui.carousel
            , element = layui.element
            , device = layui.device();

        //轮播切换
        $('.layadmin-carousel').each(function () {
            var othis = $(this);
            carousel.render({
                elem: this
                , width: '100%'
                , arrow: 'none'
                , interval: othis.data('interval')
                , autoplay: othis.data('autoplay') === true
                , trigger: (device.ios || device.android) ? 'click' : 'hover'
                , anim: othis.data('anim')
            });
        });

        element.render('progress');

    });

    //数据概览
    layui.use(['admin', 'carousel', 'echarts'], function () {
        var $ = layui.$
            , admin = layui.admin
            , carousel = layui.carousel
            , echarts = layui.echarts;


        function initChart() {
            $ajaxFunc(layui.setter.baseUrl + "Home/GetChartData", {}, function (res) {
                if (res.code === 0) {
                    console.log(res.data);
                    bindChart(res.data);
                }
            });
        }

        initChart();

        function bindChart(data) {
            var orderLine = data.OrderLineData;
            var productPie = data.ProductPieData;
            var userLine = data.UserLineData;
            var echartsApp = [];
            var options = [
                //今日流量趋势
                {
                    title: {
                        text: orderLine.name,
                        x: 'center',
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['', '']
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: orderLine.xAxisData
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '订单数'
                    }],
                    series: orderLine.series                  
                },

                //访客浏览器分布
                {
                    title: {
                        text: productPie.name,
                        x: 'center',
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: productPie.xAxisData
                    },
                    series: [{
                        name: '线上分类商品',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: productPie.series
                    }]
                },

                //新增的用户量
                {
                    title: {
                        text: userLine.name,
                        x: 'center',
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [{ //X轴
                        type: 'category',
                        data: userLine.xAxisData
                    }],
                    yAxis: [{  //Y轴
                        type: 'value',
                        name: '新增用户数'
                    }],
                    series: userLine.series
                }
            ];

            var elemDataView = $('#LAY-index-dataview').children('div')
                , renderDataView = function (index) {
                    echartsApp[index] = echarts.init(elemDataView[index], layui.echartsTheme);
                    echartsApp[index].setOption(options[index]);
                    //window.onresize = echartsApp[index].resize;
                    admin.resize(function () {
                        echartsApp[index].resize();
                    });
                };


            //没找到DOM，终止执行
            if (!elemDataView[0]) return;



            renderDataView(0);

            //监听数据概览轮播
            var carouselIndex = 0;
            carousel.on('change(LAY-index-dataview)', function (obj) {
                renderDataView(carouselIndex = obj.index);
            });

            //监听侧边伸缩
            layui.admin.on('side', function () {
                setTimeout(function () {
                    renderDataView(carouselIndex);
                }, 300);
            });

            //监听路由
            layui.admin.on('hash(tab)', function () {
                layui.router().path.join('') || renderDataView(carouselIndex);
            });

        }

 });

    //最新订单
    layui.use('table', function () {
        var $ = layui.$
            , table = layui.table;

        //待发货
        table.render({
            elem: '#LAY-index-topSearch'
            , url: layui.setter.baseUrl + 'Order/GetNoSendList'
            , page: true
            , cols: [[
                { field: '_row_number_', width: 60, align: 'center', title: '序号' }
                , { field: 'OrderSn', width: 200, title: '订单号' }
                , { field: 'PlatformName', title: '订单来源', width: 120 }
                , { field: 'UserName', title: '用户名', minWidth: 100 }
                , {
                    field: 'PayStateName', title: '支付状态', width: 120, templet: function (d) {
                        if (d.PayState === 0) {
                            return '<span style="color:#FF4500;">' + d.PayStateName + '</span>';
                        }
                        else if (d.PayState === 4) {
                            return '<span style="color:#008000;">' + d.PayStateName + '</span>';
                        }
                        else if (d.PayState === 5) {
                            return '<span style="color:#c00;">' + d.PayStateName + '</span>';
                        }
                        else if (d.PayState === 6) {
                            return '<span style="color:#c3b0b0;">' + d.PayStateName + '</span>';
                        }
                        else {
                            return '<span style="color:#30614d;">' + d.PayStateName + '</span>';
                        }

                    }
                }
                , { field: 'PayChannelName', title: '支付方式', width: 120 }
                , { field: 'AddTimeValue', title: '下单时间' }
                , { field: 'PayTimeValue', title: '支付时间' }
                , { field: 'TotalAccount', width: 120, title: '订单金额' }
                , {
                    field: 'PayAccount', width: 180, title: '支付金额', templet: function (d) {
                        if (d.PayState === 0) {
                            return '<span style="color:#FF4500;">' + d.PayAccount + '</span>';
                        }
                        else if (d.PayState === 4) {
                            return '<span style="color:#008000;">' + d.PayAccount + '</span>';
                        }
                        else if (d.PayState === 5) {
                            return '<span style="color:#c00;">' + d.PayAccount + '</span>';
                        }
                        else if (d.PayState === 6) {
                            return '<span style="color:#c3b0b0;">' + d.PayAccount + '</span>';
                        }
                        else {
                            return '<span style="color:#30614d;">' + d.PayAccount + '</span>';
                        }
                    }
                }
                , { title: '操作', width: 180, align: 'center', fixed: 'right', toolbar: '#table-useradmin-webuser' }
            ]]
            , skin: 'line'
        });
        //监听工具条
        table.on('tool(LAY-index-topSearch)', function (obj) {
            var data = obj.data;
            var orderSn = data.OrderSn;
            if (obj.event === 'detail') {
                var win = window.open();
                win.location.href = layui.setter.baseUrl + 'Order/Detail/' + orderSn;
            }
        });

        //待退款
        table.render({
            elem: '#LAY-index-topCard'
            , url: layui.setter.baseUrl + 'Order/GetOrderReFundHomeList'
            , page: true
            , cellMinWidth: 120
            , cols: [[
                { field: 'zizeng', width: 80, title: '序号', align: 'center', templet: '#zizeng' }
                , {
                    field: 'OrderSn', minWidth: 150, title: '订单编号', templet: function (d) {
                        return '<a href="/Admin/Order/Detail/' + d.OrderSn + '" target="_blank">' + d.OrderSn + '</a>';
                    }
                }
                , { field: 'ProductName', title: '退款商品', minWidth: 300 }
                , { field: 'ReUserName', title: '退款人', width: 100 }
                , { field: 'ReApplyFee', title: '退款金额(元)', width: 100 }
                , {
                    field: 'Status', title: '退款状态', width: 100, templet: function (d) {
                        var status = d.Status;
                        var rtnVal = "";
                        switch (status) {
                            default:
                            case 1:
                                rtnVal = "<span style='color:#FF4500;'>申请中</span>";
                                break;
                            case 2:
                                rtnVal = "<span style='color:#008000;'>已退款</span>";
                                break;
                            case 3:
                                rtnVal = "<span style='color:#c00;'>退款失败</span>";
                                break;
                            case 4:
                                rtnVal = "<span style='color:#c00;'>已拒绝</span>";
                                break;
                        }
                        return rtnVal;
                    }
                }
                , {
                    field: 'ReFundMethod', title: '退款方式', width: 100, templet: function (d) {
                        var ReFundMethod = d.ReFundMethod;
                        var rtnVal = "";
                        switch (ReFundMethod) {
                            default:
                            case 1:
                                rtnVal = "全部退款";
                                break;
                            case 2:
                                rtnVal = "部分退款";
                                break;
                        }
                        return rtnVal;
                    }
                }
                , {
                    field: 'ReFundReason', title: '退款原因', width: 150, templet: function (d) {
                        var ReFundReason = d.ReFundReason;
                        var rtnVal = "";
                        switch (ReFundReason) {
                            default:
                            case 0:
                                rtnVal = "订单信息拍错";
                                break;
                            case 1:
                                rtnVal = "我不想要了";
                                break;
                            case 2:
                                rtnVal = "地址电话信息填写错误";
                                break;
                            case 3:
                                rtnVal = "缺货";
                                break;
                        }
                        return rtnVal;
                    }
                }

                , { field: 'AddTimeValue', width: 150, title: '申请时间' }
                , { title: '操作', minWidth: 200, align: 'center', fixed: 'right', toolbar: '#tb-operate' }
            ]]
            , skin: 'line'
        });

        //监听工具条
        table.on('tool(LAY-index-topCard)', function (obj) {
            var data = obj.data;
            if (obj.event === 'preview') {
                var winp = window.open();
                winp.location.href = layui.setter.baseUrl + "order/orderrefunddetail/" + data.Id;
            }
            else if (obj.event === 'agree') {
                layer.open({
                    type: 2
                    , title: '同意退款'
                    , content: layui.setter.baseUrl + 'Order/OrderReFundAuditIndex?id=' + data.Id + '&status=0'
                    , maxmin: true
                    , area: ['450px', '280px']

                });
            }
            else if (obj.event === 'refuse') {
                layer.open({
                    type: 2
                    , title: '拒绝退款'
                    , content: layui.setter.baseUrl + 'Order/OrderReFundAuditIndex?id=' + data.Id + '&status=1'
                    , maxmin: true
                    , area: ['450px', '280px']

                });

            }
        });


    });



    exports('console', {});
});