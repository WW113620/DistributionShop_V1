
www.maomaoyu.com.au

支付文档
https://mpay.royalpay.com.au/docs/cn/

--请使用sql 语句生成表 然后同步
CREATE TABLE [dbo].[TestUser](
	[Id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[UserName] [nvarchar](100) NULL,
	[Password] [nvarchar](100) NULL,
	
	[NickName] [nvarchar](100) NULL,
	[Phone] [nvarchar](20) NULL,
	[Email] [nvarchar](100) NULL,
	[AvatarUrl] [nvarchar](200) NULL,
	[RoleID] [int] NULL  DEFAULT ((0)),
	[State] [int] NULL DEFAULT ((0)),
	[AddTime] [datetime] NULL
) ON [PRIMARY]


CREATE TABLE [dbo].[Account](
	[Id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[UserName] [nvarchar](100) NULL,
	[Password] [nvarchar](100) NULL,
	[PasswordSalt] [nvarchar](50) NULL,
	[NickName] [nvarchar](100) NULL,
	[RealName] [nvarchar](100) NULL,
	[Phone] [nvarchar](20) NULL,
	[Email] [nvarchar](100) NULL,
	[IdCard] [nvarchar](100) NULL,	
	[QQ] [nvarchar](50) NULL,
	[Weixin] [nvarchar](100) NULL,
	[OpenId] [nvarchar](100) NULL,
	[AvatarUrl] [nvarchar](200) NULL,
	[RoleType] [int] NULL  DEFAULT ((0)),
	[State] [int] NULL DEFAULT ((0)),
	[AddTime] [datetime] NULL
) ON [PRIMARY]

/****************************ZhuangYu**********************************



/****** Object:  Table [dbo].[DistributionShopDB]    Script Date: 2020/4/16 14:25:35 ******/





/****** Object:  Table [dbo].[C_ScoreLeavel]    Script Date: 2020/4/16 14:25:35 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[C_ScoreLeavel](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[AddUserId] [bigint] NULL,
	[Score] [int] NULL,
	[Leavel] [int] NULL,
	[IsActive] [bit] NULL,
	[AddTime] [datetime] NULL,
 CONSTRAINT [PK_C_ScoreLeavel] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'添加人Id' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'C_ScoreLeavel', @level2type=N'COLUMN',@level2name=N'AddUserId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'所需要积分' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'C_ScoreLeavel', @level2type=N'COLUMN',@level2name=N'Score'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'积分等级' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'C_ScoreLeavel', @level2type=N'COLUMN',@level2name=N'Leavel'
GO



/****************************ZhuangYu**********************************




/******************************wangwei********************************
CREATE TABLE [dbo].[Order](
	[Id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[UserName] [nvarchar](100) NULL,
	[OrderSn] [nvarchar](100) NULL,--订单号
	[PayState] [int] NOT NULL, --支付状态
	[TotalPayPrice] decimal(18,2) NULL, --支付总金额
	[DiscountAmount] decimal(18,2) NULL, --折扣金额
	[Platform] [int] NULL,  --订单来源
	[PayChannel] [int] NULL, --支付方式
	[IsDel] [int] NULL DEFAULT ((0)),
	[AddTime] [datetime] NULL,
	[UpdateTime] [datetime] NULL,
	[PayTime] [datetime] NULL,
) ON [PRIMARY]


CREATE TABLE [dbo].[OrderDetail](
	[Id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[UserName] [nvarchar](100) NULL,
	[OrderSn] [nvarchar](100) NULL,--订单号
	[ProductId] [bigint] NULL, -- 商品Id
	[ProductName] [nvarchar](100) NULL, --商品名称
	[ShopId] [bigint] NULL, -- 商家Id
	[ShopName] [nvarchar](100) NULL, --商家名称
	[OriginalPrice] decimal(18,2) NULL, --产品原价
	[WebPrice]decimal(18,2) NULL, -- 产品web价格
	[OrderProductAmount] [int] NULL, --购买数量
	[IsDel] [int] NULL DEFAULT ((0)),
	[AddTime] [datetime] NULL,
) ON [PRIMARY]

/****************************chaokai**********************************


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[Category](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[Icon] [varchar](1000) NULL,
	[DisplaySequence] [bigint] NULL,
	[SupportVirtualProduct] [int] NULL,
	[ParentCategoryId] [bigint] NULL,
	[Depth] [int] NULL,
	[Path] [varchar](100) NULL,
	[RewriteName] [varchar](50) NULL,
	[HasChildren] [int] NULL,
	[TypeId] [bigint] NULL,
	[CommisRate] [decimal](8, 2) NULL,
	[Meta_Title] [varchar](1000) NULL,
	[Meta_Description] [varchar](1000) NULL,
	[Meta_Keywords] [varchar](1000) NULL,
	[IsDeleted] [int] NULL,
	[IsShow] [int] NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'分类名称' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'Name'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'分类图标' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'Icon'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否支持虚拟商品（0=否 ，1=是）' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'SupportVirtualProduct'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'分类深度' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'Depth'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'分类的路径（以|分离)' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'Path'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'未使用' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'RewriteName'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否有子分类（0没有，1有)' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'HasChildren'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'分佣比例' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'CommisRate'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否删除 0未删除' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'IsDeleted'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否显示' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Category', @level2type=N'COLUMN',@level2name=N'IsShow'
GO


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[Product](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ShopId] [bigint] NULL,
	[CategoryId] [bigint] NULL,
	[CategoryPath] [varchar](100) NULL,
	[ProductType] [int] NULL,
	[TypeId] [bigint] NULL,
	[BrandId] [bigint] NULL,
	[ProductName] [varchar](100) NULL,
	[ProductCode] [varchar](100) NULL,
	[ShortDescription] [varchar](4000) NULL,
	[SaleStatus] [int] NULL,
	[AuditStatus] [int] NULL,
	[AddedDate] [datetime] NULL,
	[DisplaySequence] [bigint] NULL,
	[ImagePath] [varchar](100) NULL,
	[MarketPrice] [decimal](18, 2) NULL,
	[MinSalePrice] [decimal](18, 2) NULL,
	[HasSKU] [int] NULL,
	[VistiCounts] [bigint] NULL,
	[SaleCounts] [bigint] NULL,
	[FreightTemplateId] [bigint] NULL,
	[Weight] [decimal](18, 2) NULL,
	[Volume] [decimal](18, 2) NULL,
	[Quantity] [int] NULL,
	[MeasureUnit] [varchar](20) NULL,
	[EditStatus] [int] NULL,
	[IsDeleted] [int] NULL,
	[MaxBuyCount] [int] NULL,
	[IsOpenLadder] [int] NULL,
	[ColorAlias] [varchar](50) NULL,
	[SizeAlias] [varchar](50) NULL,
	[VersionAlias] [varchar](50) NULL,
	[ShopDisplaySequence] [bigint] NULL,
	[VirtualSaleCounts] [bigint] NULL,
	[VideoPath] [varchar](200) NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'店铺ID' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'ShopId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'分类ID' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'CategoryId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'分类路径' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'CategoryPath'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'商品类型(0=实物商品，1=虚拟商品)' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'ProductType'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'类型ID' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'TypeId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'品牌ID' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'BrandId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'商品名称' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'ProductName'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'商品编号' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'ProductCode'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'广告词' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'ShortDescription'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'销售状态' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'SaleStatus'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'审核状态' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'AuditStatus'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'添加日期' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'AddedDate'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'显示顺序' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'DisplaySequence'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'存放图片的目录' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'ImagePath'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'市场价' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'MarketPrice'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'最小销售价' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'MinSalePrice'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否有SKU' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'HasSKU'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'浏览次数' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'VistiCounts'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'销售量' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'SaleCounts'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'运费模板ID' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'FreightTemplateId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'重量' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'Weight'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'体积' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'Volume'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'数量' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'Quantity'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'计量单位' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'MeasureUnit'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'修改状态 0 正常 1已修改 2待审核 3 已修改并待审核' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'EditStatus'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否已删除' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'IsDeleted'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'最大购买数' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'MaxBuyCount'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否开启阶梯价格' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'IsOpenLadder'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'颜色别名' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'ColorAlias'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'尺码别名' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'SizeAlias'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'版本别名' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'VersionAlias'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'商家商品序号' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'ShopDisplaySequence'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'虚拟销量' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'VirtualSaleCounts'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'商品主图视频' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Product', @level2type=N'COLUMN',@level2name=N'VideoPath'
GO

  CREATE TABLE [dbo].[SMSMessageLog](
    [Id] [bigint] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Message] [nvarchar](500) NULL,
    [SendTo] [nvarchar](100) NULL,
	[SendFromGuid] [nvarchar](100) NULL,
	[SendTime] [datetime] NULL,
	[Result] [nvarchar](200) NULL,
    [SendType] [int] NULL,
 )