
 CREATE TABLE [dbo].[OrderPayRecord](
	[Id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[OrderSn] [nvarchar](100) NULL,
	[NewOrderSn] [nvarchar](100) NULL,
	[PartnerOrderId] [nvarchar](200) NULL, --商户订单ID
	[ChannelOrderId] [nvarchar](200) NULL, --渠道方(支付宝、微信)交易流水号
	[TotalFee]  decimal(18,2) NULL, --订单金额
	[RealFee]  decimal(18,2) NULL, --支付金额
	[PayState] [int] NOT NULL DEFAULT ((0)), --支付状态
	[PayChannel] [int] NULL, --支付方式
	[AddTime] [datetime] NULL,
	[PayTime] [datetime] NULL
) ON [PRIMARY]