
GO
/****** Object:  Table [dbo].[OrderReFund]    Script Date: 2020/5/7 18:09:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[OrderReFund](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[OrderSn] [varchar](50) NULL,
	[OrderDetailId] [varchar](200) NULL,
	[ReFundType] [int] NULL,
	[ReFundMethod] [int] NULL,
	[ReFundReason] [int] NULL,
	[ReFundPrice] [decimal](18, 2) NULL,
	[Description] [varchar](200) NULL,
	[IsDel] [int] NULL,
	[AddTme] [datetime] NULL,
	[UpdateTime] [datetime] NULL,
	[OpUserName] [varchar](50) NULL,
 CONSTRAINT [PK_OrderReFund] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ordersn_isdel]    Script Date: 2020/5/7 18:09:17 ******/
CREATE NONCLUSTERED INDEX [ordersn_isdel] ON [dbo].[OrderReFund]
(
	[OrderSn] ASC,
	[IsDel] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'订单号 ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'OrderReFund', @level2type=N'COLUMN',@level2name=N'OrderSn'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'退款退货 = 0,  仅退款 = 1, 仅退货 = 2' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'OrderReFund', @level2type=N'COLUMN',@level2name=N'ReFundType'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N' 支付宝 = 0,微信 = 1' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'OrderReFund', @level2type=N'COLUMN',@level2name=N'ReFundMethod'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'订单信息拍错 = 0, 我不想要了 = 1,地址电话信息填写错误=2,缺货=3' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'OrderReFund', @level2type=N'COLUMN',@level2name=N'ReFundReason'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'退款金额' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'OrderReFund', @level2type=N'COLUMN',@level2name=N'ReFundPrice'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'退款 说明 ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'OrderReFund', @level2type=N'COLUMN',@level2name=N'Description'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'0未删除 1 已删除 ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'OrderReFund', @level2type=N'COLUMN',@level2name=N'IsDel'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'操作人 ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'OrderReFund', @level2type=N'COLUMN',@level2name=N'OpUserName'
GO
