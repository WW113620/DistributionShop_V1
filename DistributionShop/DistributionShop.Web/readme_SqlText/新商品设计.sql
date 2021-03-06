USE [DistributionShopDB]

CREATE TABLE [dbo].[Brand](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[Description] [varchar](1000) NULL,
	[AddTime] [datetime] NULL,
 CONSTRAINT [PK_Brand] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]


CREATE TABLE [dbo].[Attribute](
	[Id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[Name] [varchar](100) NULL,
	[ParentId] [bigint]NULL,
	[Level] [int]NULL,
	[Description] [varchar](1000) NULL,
	[AddTime] [datetime] NULL,
) ON [PRIMARY]
CREATE TABLE [dbo].[ProductMedia](
	[Id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[ProductId][bigint] NULL,
	[MediaType] [int] NOT NULL DEFAULT ((0)),
	[NewFileName] [nvarchar](100) NULL,
	[OriginalFileName][nvarchar](200) NULL,
	[MediaSort] [int] NOT NULL DEFAULT ((0)),
	[MediaCloudId] [nvarchar](100) NULL,
	[AddTime] [datetime] NULL
) ON [PRIMARY]

CREATE TABLE [dbo].[ProductAttribute](
	[Id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[ProductId] [bigint]NULL,
	[Description] [nvarchar](500) NULL,
	[AttributeId] [bigint]NULL,
	[AttributeName] [nvarchar](50) NULL,
	[AttributeParentId] [bigint]NULL,
	[AttributeParentName] [nvarchar](50) NULL,
	[AddTime] [datetime] NULL,
) ON [PRIMARY]