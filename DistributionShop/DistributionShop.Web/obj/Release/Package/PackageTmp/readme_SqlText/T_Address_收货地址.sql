USE [DistributionShopDB]
GO

/****** Object:  Table [dbo].[T_Address]    Script Date: 2020/4/20 9:10:27 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[T_Address](
	[Id] [bigint] NOT NULL,
	[UserId] [bigint] NULL,
	[UserName] [nvarchar](100) NULL,
	[RealName] [nvarchar](100) NULL,
	[CountyId] [bigint] NULL,
	[CountyName] [nvarchar](200) NULL,
	[ProvinceId] [bigint] NULL,
	[ProvinceName] [nvarchar](200) NULL,
	[CityId] [bigint] NULL,
	[CityName] [nvarchar](200) NULL,
	[DistrictId] [bigint] NULL,
	[DistrictName] [nvarchar](200) NULL,
	[PrePhoneType] [int] NULL DEFAULT ((0)),
	[TelPhone] [nvarchar](20) NULL,
	[Address] [nvarchar](max) NULL,
	[Contact] [nvarchar](200) NULL,
	[IsDefault] [bit] NULL,
	[Notes] [nvarchar](max) NULL,
	[PostCode] [nvarchar](50) NULL,
	[IdentityCard] [nvarchar](200) NULL,
	[IDPhotoNegative] [nvarchar](200) NULL,
	[IDPhotoPositive] [nvarchar](200) NULL,
	[AddTime] [datetime] NULL,
	[IsActive] [bit] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'区县Id' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'T_Address', @level2type=N'COLUMN',@level2name=N'CountyId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'区县Name' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'T_Address', @level2type=N'COLUMN',@level2name=N'CountyName'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'收货人手机号' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'T_Address', @level2type=N'COLUMN',@level2name=N'TelPhone'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'详细地址' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'T_Address', @level2type=N'COLUMN',@level2name=N'Address'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'联系人' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'T_Address', @level2type=N'COLUMN',@level2name=N'Contact'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否是默认 1默认 0否' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'T_Address', @level2type=N'COLUMN',@level2name=N'IsDefault'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'真实姓名' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'T_Address', @level2type=N'COLUMN',@level2name=N'RealName'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'是否删除 0=未删除 1=已删除' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'T_Address', @level2type=N'COLUMN',@level2name=N'IsActive'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'电话前缀 0=中国 1=澳洲' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'T_Address', @level2type=N'COLUMN',@level2name=N'PrePhoneType'
GO
