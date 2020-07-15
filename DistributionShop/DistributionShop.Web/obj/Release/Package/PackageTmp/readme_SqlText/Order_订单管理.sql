USE [DistributionShopDB]
GO
/****** Object:  Table [dbo].[Order]    Script Date: 2020/4/25 20:29:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NULL,
	[UserName] [nvarchar](100) NULL,
	[RealName] [nvarchar](100) NULL,
	[OrderSn] [nvarchar](100) NULL,
	[PayState] [int] NOT NULL,
	[TotalPayPrice] [decimal](18, 2) NULL,
	[DiscountAmount] [decimal](18, 2) NULL,
	[Postage] [decimal](18, 2) NULL,
	[Platform] [int] NULL,
	[PayChannel] [int] NULL,
	[IsDel] [int] NULL CONSTRAINT [DF__Order__IsDel__52593CB8]  DEFAULT ((0)),
	[Remark] [nvarchar](500) NULL,
	[AddTime] [datetime] NULL,
	[UpdateTime] [datetime] NULL,
	[PayTime] [datetime] NULL,
 CONSTRAINT [PK__Order__3214EC078FDF15A5] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Order] ON 

GO
INSERT [dbo].[Order] ([Id], [UserId], [UserName], [OrderSn], [PayState], [TotalPayPrice], [DiscountAmount], [Platform], [PayChannel], [IsDel], [Remark], [AddTime], [UpdateTime], [PayTime]) VALUES (1, 4, N'chaokaikai', N'T637228069436025871', 2, CAST(200.00 AS Decimal(18, 2)), CAST(20.00 AS Decimal(18, 2)), 1, 1, 0, NULL, CAST(N'2020-04-18 13:12:20.000' AS DateTime), NULL, CAST(N'2020-04-21 14:24:46.203' AS DateTime))
GO
INSERT [dbo].[Order] ([Id], [UserId], [UserName], [OrderSn], [PayState], [TotalPayPrice], [DiscountAmount], [Platform], [PayChannel], [IsDel], [Remark], [AddTime], [UpdateTime], [PayTime]) VALUES (2, 3, N'wangwei', N'T637228070391355845', 5, CAST(500.20 AS Decimal(18, 2)), CAST(30.60 AS Decimal(18, 2)), 2, 1, 0, NULL, CAST(N'2020-04-10 13:12:20.000' AS DateTime), NULL, CAST(N'2020-04-10 13:12:20.000' AS DateTime))
GO
INSERT [dbo].[Order] ([Id], [UserId], [UserName], [OrderSn], [PayState], [TotalPayPrice], [DiscountAmount], [Platform], [PayChannel], [IsDel], [Remark], [AddTime], [UpdateTime], [PayTime]) VALUES (6, 3, N'wangwei', N'T637228070391355840', 6, CAST(399.20 AS Decimal(18, 2)), CAST(10.00 AS Decimal(18, 2)), 1, 2, 0, NULL, CAST(N'2020-04-10 13:12:20.000' AS DateTime), NULL, CAST(N'2020-04-10 13:12:20.000' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Order] OFF
GO
