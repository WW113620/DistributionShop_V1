using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.Utils
{
    public enum UserStatusEnums
    {
        已通过 = 0,
        待审核 = 1,
        已锁定 = 2,

    }
    public enum RoleEnums
    {
        超级管理员 = 1,
        管理员 = 2,
        代理用户 = 3,
        普通用户 = 4,
        游客 = 5,
    }


    public enum AgentRoleEnums
    {
        一级代理 = 1,
        二级代理 = 2,
        三级代理 = 3,
        四级代理 = 4,
    }

    public enum UserRoleEnums
    {
        VIP1 = 1,
        VIP2 = 2,
        VIP3 = 3,
        VIP4 = 4,
    }

    /// <summary>
    /// 前台查询订单列表使用，跟后台状态有区别
    /// </summary>
    public enum WebPayStateEnums
    {
        //全部订单 = -1,
        [Description("待付款")]
        待付款 = 0,

        [Description("待发货")]
        待发货 = 1,

        [Description("已完成")]
        已完成 = 3,

        [Description("退款/售后")]
        退货退款 = 4,
    }

    /// <summary>
    /// 后台和庄总用
    /// </summary>
    public enum PayStateEnums
    {
        未支付 = 0,
        已支付未发货 = 1,
        已支付已发货 = 2,
        已收货 = 3,
        已完成 = 4,
        已退款 = 5,
        已拒绝 = 9,
        已取消 = 6,
        支付失败 = 7
    }

    /// <summary>
    /// 后台用
    /// </summary>
    public enum OrderPayStateEnums
    {
        未支付 = 0,
        已支付 = 1,
        已退款 = 5,
        已取消 = 6,
        支付失败 = 7
    }


    public enum PlatformEnums
    {
        PC订单 = 0,
        APP订单 = 1,
        WAP订单 = 2,
        小程序订单 = 3,
        公众号订单 = 4,
    }

    public enum PayChannelEnums
    {
        未知 = 0,

        [Description("Wechat")]
        微信 = 1,

        [Description("Alipay")]
        支付宝 = 2,

        银行卡 = 3
    }


    public enum OrderPayRecordStateEnums
    {
        [Description("等待支付")]
        PAYING = 0,

        [Description("支付成功")]
        PAY_SUCCESS = 1,

        [Description("订单创建失败")]
        CREATE_FAIL = 2,

        [Description("支付失败")]
        PAY_FAIL = 3,

        [Description("部分退款")]
        PARTIAL_REFUND = 4,

        [Description("全额退款")]
        FULL_REFUND = 5,

        [Description("已关闭")]
        CLOSED = 6,

    }

    public enum PayCurrencyEnums
    {
        [Description("澳元")]
        AUD = 1,

        [Description("人民币")]
        CNY = 2
    }


    public enum SysMessageEnums
    {
        用户注册 = 0
    }

    public enum PhoneTypeEnums
    {
        [Description("+86")]
        中国 = 1,

        [Description("+61")]
        澳洲 = 2
    }

    public enum SendMessageEnums
    {
        发送成功 = 0,
        发送失败 = 1,
        无此用户 = 101,
        密码错 = 102,
        提交过快 = 103,
        系统忙 = 104,
        敏感短信 = 105,
        消息长度错 = 106,
        包含错误的手机号码 = 107,
        手机号码个数错 = 108,
        无发送额度 = 109,
        不在发送时间内 = 110,
        超出该账户当月发送额度限制 = 111,
        无此产品 = 112,
        extno格式错 = 113,
        签名不合法 = 116,
        用户没有相应的发送权限 = 118,
        用户已过期 = 119,
        内容不在白名单模板中 = 120
    }
    /// <summary>
    /// 产品的审批状态
    /// </summary>
    public enum AuditStatusEnums
    {
        待审核 = 0,
        销售中 = 1,
        已下架 = 2
    }

    /// <summary>
    /// 产品多媒体类型
    /// </summary>
    public enum MediaTypeEnums
    {
        图片 = 0,
        视频 = 1,
        封面图片 = 2,
        音频 = 3

    }

    /// <summary>
    /// 产品类型
    /// </summary>
    public enum ProductTypeEnums
    {
        实物商品 = 0,
        虚拟商品 = 1
    }

    public enum PostTypeEnums
    {
        /// <summary>
        /// 产品为单位，1件就包邮
        /// </summary>
        [Description("包邮")]
        第一类 = 0,

        /// <summary>
        /// 5件或500元包邮时
        /// </summary>
        [Description("满5件或满500元包邮")]
        第二类 = 1,
        /// <summary>
        /// 套餐类商品，此类商品包邮，且订单中含有套餐类商品的订单一律包邮；即套餐类商品混合第二类第一类商品整单包邮
        /// </summary>
        [Description("混合套餐包邮")]
        第三类 = 2,

        //[Description("不包邮")]
        //第四类 = 10
    }

    public enum SendTypeEnums
    {
        [Description("产品充足，随时发货")]
        第一类 = 0,

        [Description("产品不缺货情况下，1-3个工作日发货")]
        第二类 = 1,

        [Description("产品不缺货情况下，3-5个工作日发货")]
        第三类 = 3,

        [Description("货源不足，10个工作日内发货")]
        第四类 = 4,

        [Description("疯狂进货中，最晚14个工作日发货")]
        第五类 = 5,

        [Description("缺货中，请耐心等待")]
        第六类 = 6,
    }

    public enum ProductTopEnums
    {
        正常 = 0,
        置顶 = 1
    }


    public enum ProductNewEnums
    {
        普通 = 0,
        新品 = 1
    }

    public enum ProductDiscountEnums
    {
        平价 = 0,
        折扣 = 1
    }

    public enum UploadImageEnums
    {
        产品封面 = 0,
        身份证 = 1,
        用户头像 = 2
    }
    public enum ShowHomePageEnums
    {
        不显示 = 0,
        显示 = 1
    }

    /// <summary>
    /// 个人中心侧边栏
    /// </summary>
    public enum PageTypeEnums
    {
        个人中心 = 0,
        我的订单 = 1,
        优惠券,
        我的钱包,
        收货人管理,
        我的邀请,
        我的代理,
        个人资料,
        安全中心,
    }

    public enum OrderSearchMonthTypeEnums
    {
        近3个月订单 = 0,
        近2个月订单 = 1,
    }
    /// <summary>
    /// 退款类别
    /// </summary>
    public enum ReFundTypeEnums
    {
        退款退货 = 0,
        仅退款 = 1,
        仅退货 = 2
    }

    public enum ReFundMethodEnums
    {
        全部退款 = 1,
        部分退款 = 2
    }

    public enum RefundDeviceEnums
    {
        Web = 1,
        部分退款 = 2
    }

    /// <summary>
    /// 退款原因
    /// </summary>
    public enum ReFundReasonEnums
    {
        订单信息拍错 = 0,
        我不想要了 = 1,
        地址电话信息填写错误 = 2,
        缺货 = 3

    }
    /// WAITING:正在提交
    /// CREATE_FAILED:提交失败
    /// SUCCESS:提交成功
    /// FAILED:退款失败
    /// FINISHED:退款成功
    /// CHANGE:退款无法到账，需要人工介入
    public enum ReFundStatusEnums
    {
        [Description("正在提交")]
        WAITING = 0,

        [Description("提交失败")]
        CREATE_FAILED,

        [Description("提交成功")]
        SUCCESS,

        [Description("退款失败")]
        FAILED,

        [Description("退款成功")]
        FINISHED,

        [Description("退款无法到账，需要人工介入")]
        CHANGE
    }

    /// <summary>
    /// 晁总申请退款用（OrderReFund--Status）
    /// </summary>
    public enum WebReFundStatusEnums
    {
        未退款 = 0,
        申请中 = 1,
        已退款 = 2,
        退款失败 = 3,
        已拒绝 = 4
    }

    /// <summary>
    /// 订单详情商品用（OrderDetail--Status）
    /// </summary>
    public enum WebOrderDetailStatusEnums
    {
        默认 = 0,
        退款申请中 = 1,
        已退款 = 2,
    }



}
