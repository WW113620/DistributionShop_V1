USE [DistributionShopDB]
GO

/****** Object:  Table [dbo].[ShoppingCart]    Script Date: 2020/4/16 22:33:51 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ShoppingCart](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NULL,
	[GoodsId] [bigint] NULL,
	[GoodNum] [int] NULL,
	[AddTime] [datetime] NULL,
	[UpdateTime] [datetime] NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_ShoppingCart] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'货物Id' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ShoppingCart', @level2type=N'COLUMN',@level2name=N'GoodsId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'货物数量' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ShoppingCart', @level2type=N'COLUMN',@level2name=N'GoodNum'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'0=已删除 1=未删除' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ShoppingCart', @level2type=N'COLUMN',@level2name=N'IsActive'
GO


