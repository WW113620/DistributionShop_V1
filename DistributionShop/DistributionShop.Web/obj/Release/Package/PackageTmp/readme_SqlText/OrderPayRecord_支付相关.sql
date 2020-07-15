
 CREATE TABLE [dbo].[OrderPayRecord](
	[Id] [bigint] IDENTITY(1,1) NOT NULL primary key,
	[OrderSn] [nvarchar](100) NULL,
	[NewOrderSn] [nvarchar](100) NULL,
	[PartnerOrderId] [nvarchar](200) NULL, --�̻�����ID
	[ChannelOrderId] [nvarchar](200) NULL, --������(֧������΢��)������ˮ��
	[TotalFee]  decimal(18,2) NULL, --�������
	[RealFee]  decimal(18,2) NULL, --֧�����
	[PayState] [int] NOT NULL DEFAULT ((0)), --֧��״̬
	[PayChannel] [int] NULL, --֧����ʽ
	[AddTime] [datetime] NULL,
	[PayTime] [datetime] NULL
) ON [PRIMARY]