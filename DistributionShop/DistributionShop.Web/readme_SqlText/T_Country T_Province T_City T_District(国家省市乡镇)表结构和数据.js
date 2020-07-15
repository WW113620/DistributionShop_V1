
/****** Object:  Table [dbo].[T_City]    Script Date: 2020/4/24 21:21:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[T_City](
	[CityID][int] IDENTITY(1, 1) NOT NULL,
	[CityName][nvarchar](50) NOT NULL,
	[ProID][int] NULL,
	[CitySort][int] NULL,
	PRIMARY KEY CLUSTERED
	(
		[CityID] ASC
	)WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY]
) ON[PRIMARY]

GO
/****** Object:  Table [dbo].[T_Country]    Script Date: 2020/4/24 21:21:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[T_Country](
	[Id][bigint] IDENTITY(1, 1) NOT NULL,
	[CountryId][int] NULL,
	[CountryName][nvarchar](200) NULL,
	[IsActive][bit] NULL,
	CONSTRAINT[PK_T_Country] PRIMARY KEY CLUSTERED
	(
		[Id] ASC
	)WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY]
) ON[PRIMARY]

GO
/****** Object:  Table [dbo].[T_District]    Script Date: 2020/4/24 21:21:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[T_District](
	[Id][int] IDENTITY(1, 1) NOT NULL,
	[DisName][nvarchar](30) NOT NULL,
	[CityID][int] NOT NULL,
	[DisSort][int] NULL,
	PRIMARY KEY CLUSTERED
	(
		[Id] ASC
	)WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY]
) ON[PRIMARY]

GO
/****** Object:  Table [dbo].[T_Province]    Script Date: 2020/4/24 21:21:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE[dbo].[T_Province](
	[ProID][int] IDENTITY(1, 1) NOT NULL,
	[ProName][nvarchar](50) NOT NULL,
	[ProSort][int] NULL,
	[ProRemark][nvarchar](50) NULL,
	PRIMARY KEY CLUSTERED
	(
		[ProID] ASC
	)WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY]
) ON[PRIMARY]

GO
SET IDENTITY_INSERT[dbo].[T_City] ON

GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(1, N'北京市', 1, 1)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(2, N'天津市', 2, 2)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(3, N'上海市', 9, 3)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(4, N'重庆市', 27, 4)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(5, N'邯郸市', 3, 5)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(6, N'石家庄市', 3, 6)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(7, N'保定市', 3, 7)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(8, N'张家口市', 3, 8)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(9, N'承德市', 3, 9)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(10, N'唐山市', 3, 10)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(11, N'廊坊市', 3, 11)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(12, N'沧州市', 3, 12)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(13, N'衡水市', 3, 13)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(14, N'邢台市', 3, 14)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(15, N'秦皇岛市', 3, 15)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(16, N'朔州市', 4, 16)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(17, N'忻州市', 4, 17)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(18, N'太原市', 4, 18)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(19, N'大同市', 4, 19)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(20, N'阳泉市', 4, 20)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(21, N'晋中市', 4, 21)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(22, N'长治市', 4, 22)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(23, N'晋城市', 4, 23)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(24, N'临汾市', 4, 24)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(25, N'吕梁市', 4, 25)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(26, N'运城市', 4, 26)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(27, N'沈阳市', 6, 27)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(28, N'铁岭市', 6, 28)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(29, N'大连市', 6, 29)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(30, N'鞍山市', 6, 30)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(31, N'抚顺市', 6, 31)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(32, N'本溪市', 6, 32)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(33, N'丹东市', 6, 33)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(34, N'锦州市', 6, 34)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(35, N'营口市', 6, 35)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(36, N'阜新市', 6, 36)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(37, N'辽阳市', 6, 37)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(38, N'朝阳市', 6, 38)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(39, N'盘锦市', 6, 39)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(40, N'葫芦岛市', 6, 40)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(41, N'长春市', 7, 41)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(42, N'吉林市', 7, 42)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(43, N'延边朝鲜族自治州', 7, 43)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(44, N'四平市', 7, 44)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(45, N'通化市', 7, 45)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(46, N'白城市', 7, 46)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(47, N'辽源市', 7, 47)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(48, N'松原市', 7, 48)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(49, N'白山市', 7, 49)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(50, N'哈尔滨市', 8, 50)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(51, N'齐齐哈尔市', 8, 51)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(52, N'鸡西市', 8, 52)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(53, N'牡丹江市', 8, 53)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(54, N'七台河市', 8, 54)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(55, N'佳木斯市', 8, 55)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(56, N'鹤岗市', 8, 56)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(57, N'双鸭山市', 8, 57)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(58, N'绥化市', 8, 58)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(59, N'黑河市', 8, 59)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(60, N'大兴安岭地区', 8, 60)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(61, N'伊春市', 8, 61)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(62, N'大庆市', 8, 62)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(63, N'南京市', 10, 63)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(64, N'无锡市', 10, 64)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(65, N'镇江市', 10, 65)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(66, N'苏州市', 10, 66)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(67, N'南通市', 10, 67)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(68, N'扬州市', 10, 68)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(69, N'盐城市', 10, 69)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(70, N'徐州市', 10, 70)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(71, N'淮安市', 10, 71)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(72, N'连云港市', 10, 72)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(73, N'常州市', 10, 73)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(74, N'泰州市', 10, 74)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(75, N'宿迁市', 10, 75)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(76, N'舟山市', 11, 76)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(77, N'衢州市', 11, 77)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(78, N'杭州市', 11, 78)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(79, N'湖州市', 11, 79)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(80, N'嘉兴市', 11, 80)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(81, N'宁波市', 11, 81)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(82, N'绍兴市', 11, 82)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(83, N'温州市', 11, 83)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(84, N'丽水市', 11, 84)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(85, N'金华市', 11, 85)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(86, N'台州市', 11, 86)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(87, N'合肥市', 12, 87)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(88, N'芜湖市', 12, 88)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(89, N'蚌埠市', 12, 89)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(90, N'淮南市', 12, 90)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(91, N'马鞍山市', 12, 91)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(92, N'淮北市', 12, 92)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(93, N'铜陵市', 12, 93)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(94, N'安庆市', 12, 94)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(95, N'黄山市', 12, 95)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(96, N'滁州市', 12, 96)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(97, N'阜阳市', 12, 97)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(98, N'宿州市', 12, 98)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(99, N'巢湖市', 12, 99)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(100, N'六安市', 12, 100)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(101, N'亳州市', 12, 101)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(102, N'池州市', 12, 102)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(103, N'宣城市', 12, 103)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(104, N'福州市', 13, 104)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(105, N'厦门市', 13, 105)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(106, N'宁德市', 13, 106)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(107, N'莆田市', 13, 107)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(108, N'泉州市', 13, 108)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(109, N'漳州市', 13, 109)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(110, N'龙岩市', 13, 110)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(111, N'三明市', 13, 111)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(112, N'南平市', 13, 112)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(113, N'鹰潭市', 14, 113)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(114, N'新余市', 14, 114)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(115, N'南昌市', 14, 115)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(116, N'九江市', 14, 116)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(117, N'上饶市', 14, 117)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(118, N'抚州市', 14, 118)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(119, N'宜春市', 14, 119)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(120, N'吉安市', 14, 120)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(121, N'赣州市', 14, 121)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(122, N'景德镇市', 14, 122)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(123, N'萍乡市', 14, 123)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(124, N'菏泽市', 15, 124)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(125, N'济南市', 15, 125)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(126, N'青岛市', 15, 126)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(127, N'淄博市', 15, 127)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(128, N'德州市', 15, 128)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(129, N'烟台市', 15, 129)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(130, N'潍坊市', 15, 130)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(131, N'济宁市', 15, 131)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(132, N'泰安市', 15, 132)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(133, N'临沂市', 15, 133)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(134, N'滨州市', 15, 134)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(135, N'东营市', 15, 135)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(136, N'威海市', 15, 136)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(137, N'枣庄市', 15, 137)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(138, N'日照市', 15, 138)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(139, N'莱芜市', 15, 139)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(140, N'聊城市', 15, 140)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(141, N'商丘市', 16, 141)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(142, N'郑州市', 16, 142)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(143, N'安阳市', 16, 143)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(144, N'新乡市', 16, 144)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(145, N'许昌市', 16, 145)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(146, N'平顶山市', 16, 146)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(147, N'信阳市', 16, 147)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(148, N'南阳市', 16, 148)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(149, N'开封市', 16, 149)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(150, N'洛阳市', 16, 150)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(151, N'济源市', 16, 151)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(152, N'焦作市', 16, 152)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(153, N'鹤壁市', 16, 153)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(154, N'濮阳市', 16, 154)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(155, N'周口市', 16, 155)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(156, N'漯河市', 16, 156)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(157, N'驻马店市', 16, 157)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(158, N'三门峡市', 16, 158)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(159, N'武汉市', 17, 159)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(160, N'襄樊市', 17, 160)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(161, N'鄂州市', 17, 161)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(162, N'孝感市', 17, 162)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(163, N'黄冈市', 17, 163)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(164, N'黄石市', 17, 164)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(165, N'咸宁市', 17, 165)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(166, N'荆州市', 17, 166)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(167, N'宜昌市', 17, 167)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(168, N'恩施土家族苗族自治州', 17, 168)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(169, N'神农架林区', 17, 169)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(170, N'十堰市', 17, 170)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(171, N'随州市', 17, 171)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(172, N'荆门市', 17, 172)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(173, N'仙桃市', 17, 173)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(174, N'天门市', 17, 174)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(175, N'潜江市', 17, 175)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(176, N'岳阳市', 18, 176)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(177, N'长沙市', 18, 177)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(178, N'湘潭市', 18, 178)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(179, N'株洲市', 18, 179)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(180, N'衡阳市', 18, 180)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(181, N'郴州市', 18, 181)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(182, N'常德市', 18, 182)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(183, N'益阳市', 18, 183)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(184, N'娄底市', 18, 184)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(185, N'邵阳市', 18, 185)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(186, N'湘西土家族苗族自治州', 18, 186)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(187, N'张家界市', 18, 187)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(188, N'怀化市', 18, 188)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(189, N'永州市', 18, 189)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(190, N'广州市', 19, 190)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(191, N'汕尾市', 19, 191)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(192, N'阳江市', 19, 192)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(193, N'揭阳市', 19, 193)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(194, N'茂名市', 19, 194)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(195, N'惠州市', 19, 195)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(196, N'江门市', 19, 196)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(197, N'韶关市', 19, 197)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(198, N'梅州市', 19, 198)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(199, N'汕头市', 19, 199)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(200, N'深圳市', 19, 200)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(201, N'珠海市', 19, 201)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(202, N'佛山市', 19, 202)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(203, N'肇庆市', 19, 203)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(204, N'湛江市', 19, 204)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(205, N'中山市', 19, 205)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(206, N'河源市', 19, 206)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(207, N'清远市', 19, 207)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(208, N'云浮市', 19, 208)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(209, N'潮州市', 19, 209)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(210, N'东莞市', 19, 210)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(211, N'兰州市', 22, 211)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(212, N'金昌市', 22, 212)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(213, N'白银市', 22, 213)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(214, N'天水市', 22, 214)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(215, N'嘉峪关市', 22, 215)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(216, N'武威市', 22, 216)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(217, N'张掖市', 22, 217)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(218, N'平凉市', 22, 218)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(219, N'酒泉市', 22, 219)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(220, N'庆阳市', 22, 220)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(221, N'定西市', 22, 221)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(222, N'陇南市', 22, 222)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(223, N'临夏回族自治州', 22, 223)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(224, N'甘南藏族自治州', 22, 224)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(225, N'成都市', 28, 225)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(226, N'攀枝花市', 28, 226)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(227, N'自贡市', 28, 227)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(228, N'绵阳市', 28, 228)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(229, N'南充市', 28, 229)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(230, N'达州市', 28, 230)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(231, N'遂宁市', 28, 231)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(232, N'广安市', 28, 232)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(233, N'巴中市', 28, 233)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(234, N'泸州市', 28, 234)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(235, N'宜宾市', 28, 235)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(236, N'资阳市', 28, 236)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(237, N'内江市', 28, 237)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(238, N'乐山市', 28, 238)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(239, N'眉山市', 28, 239)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(240, N'凉山彝族自治州', 28, 240)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(241, N'雅安市', 28, 241)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(242, N'甘孜藏族自治州', 28, 242)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(243, N'阿坝藏族羌族自治州', 28, 243)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(244, N'德阳市', 28, 244)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(245, N'广元市', 28, 245)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(246, N'贵阳市', 29, 246)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(247, N'遵义市', 29, 247)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(248, N'安顺市', 29, 248)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(249, N'黔南布依族苗族自治州', 29, 249)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(250, N'黔东南苗族侗族自治州', 29, 250)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(251, N'铜仁地区', 29, 251)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(252, N'毕节地区', 29, 252)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(253, N'六盘水市', 29, 253)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(254, N'黔西南布依族苗族自治州', 29, 254)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(255, N'海口市', 20, 255)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(256, N'三亚市', 20, 256)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(257, N'五指山市', 20, 257)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(258, N'琼海市', 20, 258)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(259, N'儋州市', 20, 259)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(260, N'文昌市', 20, 260)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(261, N'万宁市', 20, 261)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(262, N'东方市', 20, 262)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(263, N'澄迈县', 20, 263)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(264, N'定安县', 20, 264)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(265, N'屯昌县', 20, 265)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(266, N'临高县', 20, 266)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(267, N'白沙黎族自治县', 20, 267)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(268, N'昌江黎族自治县', 20, 268)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(269, N'乐东黎族自治县', 20, 269)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(270, N'陵水黎族自治县', 20, 270)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(271, N'保亭黎族苗族自治县', 20, 271)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(272, N'琼中黎族苗族自治县', 20, 272)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(273, N'西双版纳傣族自治州', 30, 273)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(274, N'德宏傣族景颇族自治州', 30, 274)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(275, N'昭通市', 30, 275)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(276, N'昆明市', 30, 276)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(277, N'大理白族自治州', 30, 277)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(278, N'红河哈尼族彝族自治州', 30, 278)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(279, N'曲靖市', 30, 279)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(280, N'保山市', 30, 280)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(281, N'文山壮族苗族自治州', 30, 281)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(282, N'玉溪市', 30, 282)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(283, N'楚雄彝族自治州', 30, 283)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(284, N'普洱市', 30, 284)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(285, N'临沧市', 30, 285)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(286, N'怒江傈傈族自治州', 30, 286)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(287, N'迪庆藏族自治州', 30, 287)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(288, N'丽江市', 30, 288)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(289, N'海北藏族自治州', 25, 289)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(290, N'西宁市', 25, 290)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(291, N'海东地区', 25, 291)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(292, N'黄南藏族自治州', 25, 292)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(293, N'海南藏族自治州', 25, 293)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(294, N'果洛藏族自治州', 25, 294)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(295, N'玉树藏族自治州', 25, 295)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(296, N'海西蒙古族藏族自治州', 25, 296)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(297, N'西安市', 23, 297)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(298, N'咸阳市', 23, 298)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(299, N'延安市', 23, 299)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(300, N'榆林市', 23, 300)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(301, N'渭南市', 23, 301)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(302, N'商洛市', 23, 302)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(303, N'安康市', 23, 303)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(304, N'汉中市', 23, 304)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(305, N'宝鸡市', 23, 305)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(306, N'铜川市', 23, 306)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(307, N'防城港市', 21, 307)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(308, N'南宁市', 21, 308)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(309, N'崇左市', 21, 309)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(310, N'来宾市', 21, 310)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(311, N'柳州市', 21, 311)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(312, N'桂林市', 21, 312)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(313, N'梧州市', 21, 313)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(314, N'贺州市', 21, 314)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(315, N'贵港市', 21, 315)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(316, N'玉林市', 21, 316)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(317, N'百色市', 21, 317)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(318, N'钦州市', 21, 318)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(319, N'河池市', 21, 319)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(320, N'北海市', 21, 320)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(321, N'拉萨市', 31, 321)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(322, N'日喀则地区', 31, 322)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(323, N'山南地区', 31, 323)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(324, N'林芝地区', 31, 324)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(325, N'昌都地区', 31, 325)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(326, N'那曲地区', 31, 326)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(327, N'阿里地区', 31, 327)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(328, N'银川市', 26, 328)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(329, N'石嘴山市', 26, 329)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(330, N'吴忠市', 26, 330)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(331, N'固原市', 26, 331)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(332, N'中卫市', 26, 332)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(333, N'塔城地区', 24, 333)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(334, N'哈密地区', 24, 334)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(335, N'和田地区', 24, 335)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(336, N'阿勒泰地区', 24, 336)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(337, N'克孜勒苏柯尔克孜自治州', 24, 337)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(338, N'博尔塔拉蒙古自治州', 24, 338)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(339, N'克拉玛依市', 24, 339)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(340, N'乌鲁木齐市', 24, 340)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(341, N'石河子市', 24, 341)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(342, N'昌吉回族自治州', 24, 342)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(343, N'五家渠市', 24, 343)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(344, N'吐鲁番地区', 24, 344)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(345, N'巴音郭楞蒙古自治州', 24, 345)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(346, N'阿克苏地区', 24, 346)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(347, N'阿拉尔市', 24, 347)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(348, N'喀什地区', 24, 348)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(349, N'图木舒克市', 24, 349)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(350, N'伊犁哈萨克自治州', 24, 350)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(351, N'呼伦贝尔市', 5, 351)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(352, N'呼和浩特市', 5, 352)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(353, N'包头市', 5, 353)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(354, N'乌海市', 5, 354)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(355, N'乌兰察布市', 5, 355)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(356, N'通辽市', 5, 356)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(357, N'赤峰市', 5, 357)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(358, N'鄂尔多斯市', 5, 358)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(359, N'巴彦淖尔市', 5, 359)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(360, N'锡林郭勒盟', 5, 360)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(361, N'兴安盟', 5, 361)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(362, N'阿拉善盟', 5, 362)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(363, N'台北市', 32, 363)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(364, N'高雄市', 32, 364)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(365, N'基隆市', 32, 365)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(366, N'台中市', 32, 366)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(367, N'台南市', 32, 367)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(368, N'新竹市', 32, 368)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(369, N'嘉义市', 32, 369)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(370, N'澳门特别行政区', 33, 370)
GO
INSERT[dbo].[T_City]([CityID], [CityName], [ProID], [CitySort]) VALUES(371, N'香港特别行政区', 34, 371)
GO
SET IDENTITY_INSERT[dbo].[T_City] OFF
GO
SET IDENTITY_INSERT[dbo].[T_Country] ON

GO
INSERT[dbo].[T_Country]([Id], [CountryName], [CountryId], [IsActive]) VALUES(1, N'中国大陆', 0, 1)
GO
INSERT[dbo].[T_Country]([Id], [CountryName], [CountryId], [IsActive]) VALUES(2, N'澳洲', 1, 1)
GO
SET IDENTITY_INSERT[dbo].[T_Country] OFF
GO
SET IDENTITY_INSERT[dbo].[T_District] ON

GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1, N'东城区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2, N'西城区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(3, N'崇文区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(4, N'宣武区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(5, N'朝阳区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(6, N'丰台区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(7, N'石景山区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(8, N'海淀区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(9, N'门头沟区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(10, N'房山区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(11, N'通州区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(12, N'顺义区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(13, N'昌平区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(14, N'大兴区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(15, N'怀柔区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(16, N'平谷区', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(17, N'密云县', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(18, N'延庆县', 1, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(19, N'和平区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(20, N'河东区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(21, N'河西区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(22, N'南开区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(23, N'河北区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(24, N'红桥区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(25, N'塘沽区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(26, N'汉沽区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(27, N'大港区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(28, N'东丽区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(29, N'西青区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(30, N'津南区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(31, N'北辰区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(32, N'武清区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(33, N'宝坻区', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(34, N'宁河县', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(35, N'静海县', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(36, N'蓟县', 2, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(37, N'黄浦区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(38, N'卢湾区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(39, N'徐汇区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(40, N'长宁区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(41, N'静安区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(42, N'普陀区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(43, N'闸北区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(44, N'虹口区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(45, N'杨浦区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(46, N'闵行区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(47, N'宝山区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(48, N'嘉定区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(49, N'浦东新区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(50, N'金山区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(51, N'松江区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(52, N'青浦区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(53, N'南汇区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(54, N'奉贤区', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(55, N'崇明县', 3, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(56, N'万州区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(57, N'涪陵区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(58, N'渝中区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(59, N'大渡口区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(60, N'江北区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(61, N'沙坪坝区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(62, N'九龙坡区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(63, N'南岸区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(64, N'北碚区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(65, N'万盛区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(66, N'双桥区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(67, N'渝北区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(68, N'巴南区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(69, N'黔江区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(70, N'长寿区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(71, N'江津区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(72, N'合川区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(73, N'永川区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(74, N'南川区', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(75, N'綦江县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(76, N'潼南县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(77, N'铜梁县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(78, N'大足县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(79, N'荣昌县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(80, N'璧山县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(81, N'梁平县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(82, N'城口县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(83, N'丰都县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(84, N'垫江县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(85, N'武隆县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(86, N'忠县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(87, N'开县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(88, N'云阳县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(89, N'奉节县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(90, N'巫山县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(91, N'巫溪县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(92, N'石柱土家族自治县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(93, N'秀山土家族苗族自治县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(94, N'酉阳土家族苗族自治县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(95, N'彭水苗族土家族自治县', 4, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(96, N'邯山区', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(97, N'丛台区', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(98, N'复兴区', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(99, N'峰峰矿区', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(100, N'邯郸县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(101, N'临漳县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(102, N'成安县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(103, N'大名县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(104, N'涉县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(105, N'磁县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(106, N'肥乡县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(107, N'永年县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(108, N'邱县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(109, N'鸡泽县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(110, N'广平县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(111, N'馆陶县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(112, N'魏县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(113, N'曲周县', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(114, N'武安市', 5, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(115, N'长安区', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(116, N'桥东区', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(117, N'桥西区', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(118, N'新华区', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(119, N'井陉矿区', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(120, N'裕华区', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(121, N'井陉县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(122, N'正定县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(123, N'栾城县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(124, N'行唐县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(125, N'灵寿县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(126, N'高邑县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(127, N'深泽县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(128, N'赞皇县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(129, N'无极县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(130, N'平山县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(131, N'元氏县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(132, N'赵县', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(133, N'辛集市', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(134, N'藁城市', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(135, N'晋州市', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(136, N'新乐市', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(137, N'鹿泉市', 6, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(138, N'新市区', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(139, N'北市区', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(140, N'南市区', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(141, N'满城县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(142, N'清苑县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(143, N'涞水县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(144, N'阜平县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(145, N'徐水县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(146, N'定兴县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(147, N'唐县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(148, N'高阳县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(149, N'容城县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(150, N'涞源县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(151, N'望都县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(152, N'安新县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(153, N'易县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(154, N'曲阳县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(155, N'蠡县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(156, N'顺平县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(157, N'博野县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(158, N'雄县', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(159, N'涿州市', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(160, N'定州市', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(161, N'安国市', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(162, N'高碑店市', 7, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(163, N'桥东区', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(164, N'桥西区', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(165, N'宣化区', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(166, N'下花园区', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(167, N'宣化县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(168, N'张北县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(169, N'康保县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(170, N'沽源县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(171, N'尚义县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(172, N'蔚县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(173, N'阳原县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(174, N'怀安县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(175, N'万全县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(176, N'怀来县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(177, N'涿鹿县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(178, N'赤城县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(179, N'崇礼县', 8, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(180, N'双桥区', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(181, N'双滦区', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(182, N'鹰手营子矿区', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(183, N'承德县', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(184, N'兴隆县', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(185, N'平泉县', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(186, N'滦平县', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(187, N'隆化县', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(188, N'丰宁满族自治县', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(189, N'宽城满族自治县', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(190, N'围场满族蒙古族自治县', 9, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(191, N'路南区', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(192, N'路北区', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(193, N'古冶区', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(194, N'开平区', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(195, N'丰南区', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(196, N'丰润区', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(197, N'滦县', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(198, N'滦南县', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(199, N'乐亭县', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(200, N'迁西县', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(201, N'玉田县', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(202, N'唐海县', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(203, N'遵化市', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(204, N'迁安市', 10, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(205, N'安次区', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(206, N'广阳区', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(207, N'固安县', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(208, N'永清县', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(209, N'香河县', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(210, N'大城县', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(211, N'文安县', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(212, N'大厂回族自治县', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(213, N'霸州市', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(214, N'三河市', 11, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(215, N'新华区', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(216, N'运河区', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(217, N'沧县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(218, N'青县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(219, N'东光县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(220, N'海兴县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(221, N'盐山县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(222, N'肃宁县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(223, N'南皮县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(224, N'吴桥县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(225, N'献县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(226, N'孟村回族自治县', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(227, N'泊头市', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(228, N'任丘市', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(229, N'黄骅市', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(230, N'河间市', 12, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(231, N'桃城区', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(232, N'枣强县', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(233, N'武邑县', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(234, N'武强县', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(235, N'饶阳县', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(236, N'安平县', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(237, N'故城县', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(238, N'景县', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(239, N'阜城县', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(240, N'冀州市', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(241, N'深州市', 13, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(242, N'桥东区', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(243, N'桥西区', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(244, N'邢台县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(245, N'临城县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(246, N'内丘县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(247, N'柏乡县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(248, N'隆尧县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(249, N'任县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(250, N'南和县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(251, N'宁晋县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(252, N'巨鹿县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(253, N'新河县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(254, N'广宗县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(255, N'平乡县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(256, N'威县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(257, N'清河县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(258, N'临西县', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(259, N'南宫市', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(260, N'沙河市', 14, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(261, N'海港区', 15, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(262, N'山海关区', 15, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(263, N'北戴河区', 15, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(264, N'青龙满族自治县', 15, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(265, N'昌黎县', 15, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(266, N'抚宁县', 15, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(267, N'卢龙县', 15, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(268, N'朔城区', 16, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(269, N'平鲁区', 16, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(270, N'山阴县', 16, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(271, N'应县', 16, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(272, N'右玉县', 16, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(273, N'怀仁县', 16, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(274, N'忻府区', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(275, N'定襄县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(276, N'五台县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(277, N'代县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(278, N'繁峙县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(279, N'宁武县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(280, N'静乐县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(281, N'神池县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(282, N'五寨县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(283, N'岢岚县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(284, N'河曲县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(285, N'保德县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(286, N'偏关县', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(287, N'原平市', 17, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(288, N'小店区', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(289, N'迎泽区', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(290, N'杏花岭区', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(291, N'尖草坪区', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(292, N'万柏林区', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(293, N'晋源区', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(294, N'清徐县', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(295, N'阳曲县', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(296, N'娄烦县', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(297, N'古交市', 18, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(298, N'矿区', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(299, N'南郊区', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(300, N'新荣区', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(301, N'阳高县', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(302, N'天镇县', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(303, N'广灵县', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(304, N'灵丘县', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(305, N'浑源县', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(306, N'左云县', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(307, N'大同县', 19, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(308, N'矿区', 20, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(309, N'平定县', 20, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(310, N'盂县', 20, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(311, N'榆次区', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(312, N'榆社县', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(313, N'左权县', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(314, N'和顺县', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(315, N'昔阳县', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(316, N'寿阳县', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(317, N'太谷县', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(318, N'祁县', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(319, N'平遥县', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(320, N'灵石县', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(321, N'介休市', 21, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(322, N'长治县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(323, N'襄垣县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(324, N'屯留县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(325, N'平顺县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(326, N'黎城县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(327, N'壶关县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(328, N'长子县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(329, N'武乡县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(330, N'沁县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(331, N'沁源县', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(332, N'潞城市', 22, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(333, N'沁水县', 23, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(334, N'阳城县', 23, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(335, N'陵川县', 23, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(336, N'泽州县', 23, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(337, N'高平市', 23, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(338, N'尧都区', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(339, N'曲沃县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(340, N'翼城县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(341, N'襄汾县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(342, N'洪洞县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(343, N'古县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(344, N'安泽县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(345, N'浮山县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(346, N'吉县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(347, N'乡宁县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(348, N'大宁县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(349, N'隰县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(350, N'永和县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(351, N'蒲县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(352, N'汾西县', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(353, N'侯马市', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(354, N'霍州市', 24, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(355, N'离石区', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(356, N'文水县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(357, N'交城县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(358, N'兴县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(359, N'临县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(360, N'柳林县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(361, N'石楼县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(362, N'岚县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(363, N'方山县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(364, N'中阳县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(365, N'交口县', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(366, N'孝义市', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(367, N'汾阳市', 25, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(368, N'盐湖区', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(369, N'临猗县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(370, N'万荣县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(371, N'闻喜县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(372, N'稷山县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(373, N'新绛县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(374, N'绛县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(375, N'垣曲县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(376, N'夏县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(377, N'平陆县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(378, N'芮城县', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(379, N'永济市', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(380, N'河津市', 26, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(381, N'和平区', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(382, N'沈河区', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(383, N'大东区', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(384, N'皇姑区', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(385, N'铁西区', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(386, N'苏家屯区', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(387, N'东陵区', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(388, N'沈北新区', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(389, N'于洪区', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(390, N'辽中县', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(391, N'康平县', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(392, N'法库县', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(393, N'新民市', 27, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(394, N'银州区', 28, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(395, N'清河区', 28, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(396, N'铁岭县', 28, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(397, N'西丰县', 28, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(398, N'昌图县', 28, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(399, N'调兵山市', 28, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(400, N'开原市', 28, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(401, N'长海县', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(402, N'旅顺口区', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(403, N'中山区', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(404, N'西岗区', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(405, N'沙河口区', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(406, N'甘井子区', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(407, N'金州区', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(408, N'普兰店市', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(409, N'瓦房店市', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(410, N'庄河市', 29, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(411, N'铁东区', 30, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(412, N'铁西区', 30, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(413, N'立山区', 30, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(414, N'千山区', 30, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(415, N'台安县', 30, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(416, N'岫岩满族自治县', 30, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(417, N'海城市', 30, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(418, N'新抚区', 31, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(419, N'东洲区', 31, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(420, N'望花区', 31, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(421, N'顺城区', 31, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(422, N'抚顺县', 31, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(423, N'新宾满族自治县', 31, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(424, N'清原满族自治县', 31, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(425, N'平山区', 32, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(426, N'溪湖区', 32, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(427, N'明山区', 32, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(428, N'南芬区', 32, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(429, N'本溪满族自治县', 32, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(430, N'桓仁满族自治县', 32, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(431, N'元宝区', 33, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(432, N'振兴区', 33, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(433, N'振安区', 33, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(434, N'宽甸满族自治县', 33, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(435, N'东港市', 33, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(436, N'凤城市', 33, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(437, N'古塔区', 34, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(438, N'凌河区', 34, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(439, N'太和区', 34, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(440, N'黑山县', 34, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(441, N'义县', 34, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(442, N'凌海市', 34, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(443, N'北镇市', 34, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(444, N'站前区', 35, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(445, N'西市区', 35, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(446, N'鮁鱼圈区', 35, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(447, N'老边区', 35, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(448, N'盖州市', 35, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(449, N'大石桥市', 35, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(450, N'海州区', 36, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(451, N'新邱区', 36, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(452, N'太平区', 36, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(453, N'清河门区', 36, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(454, N'细河区', 36, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(455, N'阜新蒙古族自治县', 36, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(456, N'彰武县', 36, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(457, N'白塔区', 37, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(458, N'文圣区', 37, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(459, N'宏伟区', 37, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(460, N'弓长岭区', 37, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(461, N'太子河区', 37, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(462, N'辽阳县', 37, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(463, N'灯塔市', 37, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(464, N'双塔区', 38, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(465, N'龙城区', 38, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(466, N'朝阳县', 38, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(467, N'建平县', 38, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(468, N'喀喇沁左翼蒙古族自治县', 38, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(469, N'北票市', 38, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(470, N'凌源市', 38, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(471, N'双台子区', 39, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(472, N'兴隆台区', 39, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(473, N'大洼县', 39, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(474, N'盘山县', 39, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(475, N'连山区', 40, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(476, N'龙港区', 40, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(477, N'南票区', 40, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(478, N'绥中县', 40, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(479, N'建昌县', 40, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(480, N'兴城市', 40, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(481, N'南关区', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(482, N'宽城区', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(483, N'朝阳区', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(484, N'二道区', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(485, N'绿园区', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(486, N'双阳区', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(487, N'农安县', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(488, N'九台市', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(489, N'榆树市', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(490, N'德惠市', 41, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(491, N'昌邑区', 42, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(492, N'龙潭区', 42, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(493, N'船营区', 42, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(494, N'丰满区', 42, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(495, N'永吉县', 42, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(496, N'蛟河市', 42, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(497, N'桦甸市', 42, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(498, N'舒兰市', 42, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(499, N'磐石市', 42, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(500, N'延吉市', 43, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(501, N'图们市', 43, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(502, N'敦化市', 43, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(503, N'珲春市', 43, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(504, N'龙井市', 43, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(505, N'和龙市', 43, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(506, N'汪清县', 43, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(507, N'安图县', 43, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(508, N'铁西区', 44, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(509, N'铁东区', 44, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(510, N'梨树县', 44, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(511, N'伊通满族自治县', 44, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(512, N'公主岭市', 44, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(513, N'双辽市', 44, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(514, N'东昌区', 45, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(515, N'二道江区', 45, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(516, N'通化县', 45, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(517, N'辉南县', 45, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(518, N'柳河县', 45, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(519, N'梅河口市', 45, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(520, N'集安市', 45, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(521, N'洮北区', 46, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(522, N'镇赉县', 46, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(523, N'通榆县', 46, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(524, N'洮南市', 46, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(525, N'大安市', 46, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(526, N'龙山区', 47, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(527, N'西安区', 47, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(528, N'东丰县', 47, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(529, N'东辽县', 47, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(530, N'宁江区', 48, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(531, N'前郭尔罗斯蒙古族自治县', 48, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(532, N'长岭县', 48, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(533, N'乾安县', 48, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(534, N'扶余县', 48, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(535, N'八道江区', 49, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(536, N'江源区', 49, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(537, N'抚松县', 49, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(538, N'靖宇县', 49, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(539, N'长白朝鲜族自治县', 49, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(540, N'临江市', 49, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(541, N'道里区', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(542, N'南岗区', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(543, N'道外区', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(544, N'平房区', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(545, N'松北区', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(546, N'香坊区', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(547, N'呼兰区', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(548, N'阿城区', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(549, N'依兰县', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(550, N'方正县', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(551, N'宾县', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(552, N'巴彦县', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(553, N'木兰县', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(554, N'通河县', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(555, N'延寿县', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(556, N'双城市', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(557, N'尚志市', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(558, N'五常市', 50, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(559, N'龙沙区', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(560, N'建华区', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(561, N'铁锋区', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(562, N'昂昂溪区', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(563, N'富拉尔基区', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(564, N'碾子山区', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(565, N'梅里斯达翰尔族区', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(566, N'龙江县', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(567, N'依安县', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(568, N'泰来县', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(569, N'甘南县', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(570, N'富裕县', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(571, N'克山县', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(572, N'克东县', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(573, N'拜泉县', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(574, N'讷河市', 51, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(575, N'鸡冠区', 52, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(576, N'恒山区', 52, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(577, N'滴道区', 52, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(578, N'梨树区', 52, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(579, N'城子河区', 52, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(580, N'麻山区', 52, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(581, N'鸡东县', 52, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(582, N'虎林市', 52, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(583, N'密山市', 52, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(584, N'东安区', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(585, N'阳明区', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(586, N'爱民区', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(587, N'西安区', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(588, N'东宁县', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(589, N'林口县', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(590, N'绥芬河市', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(591, N'海林市', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(592, N'宁安市', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(593, N'穆棱市', 53, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(594, N'新兴区', 54, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(595, N'桃山区', 54, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(596, N'茄子河区', 54, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(597, N'勃利县', 54, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(598, N'向阳区', 55, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(599, N'前进区', 55, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(600, N'东风区', 55, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(601, N'桦南县', 55, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(602, N'桦川县', 55, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(603, N'汤原县', 55, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(604, N'抚远县', 55, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(605, N'同江市', 55, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(606, N'富锦市', 55, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(607, N'向阳区', 56, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(608, N'工农区', 56, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(609, N'南山区', 56, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(610, N'兴安区', 56, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(611, N'东山区', 56, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(612, N'兴山区', 56, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(613, N'萝北县', 56, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(614, N'绥滨县', 56, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(615, N'尖山区', 57, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(616, N'岭东区', 57, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(617, N'四方台区', 57, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(618, N'宝山区', 57, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(619, N'集贤县', 57, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(620, N'友谊县', 57, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(621, N'宝清县', 57, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(622, N'饶河县', 57, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(623, N'北林区', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(624, N'望奎县', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(625, N'兰西县', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(626, N'青冈县', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(627, N'庆安县', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(628, N'明水县', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(629, N'绥棱县', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(630, N'安达市', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(631, N'肇东市', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(632, N'海伦市', 58, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(633, N'爱辉区', 59, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(634, N'嫩江县', 59, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(635, N'逊克县', 59, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(636, N'孙吴县', 59, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(637, N'北安市', 59, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(638, N'五大连池市', 59, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(639, N'呼玛县', 60, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(640, N'塔河县', 60, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(641, N'漠河县', 60, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(642, N'伊春区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(643, N'南岔区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(644, N'友好区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(645, N'西林区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(646, N'翠峦区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(647, N'新青区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(648, N'美溪区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(649, N'金山屯区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(650, N'五营区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(651, N'乌马河区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(652, N'汤旺河区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(653, N'带岭区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(654, N'乌伊岭区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(655, N'红星区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(656, N'上甘岭区', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(657, N'嘉荫县', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(658, N'铁力市', 61, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(659, N'萨尔图区', 62, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(660, N'龙凤区', 62, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(661, N'让胡路区', 62, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(662, N'红岗区', 62, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(663, N'大同区', 62, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(664, N'肇州县', 62, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(665, N'肇源县', 62, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(666, N'林甸县', 62, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(667, N'杜尔伯特蒙古族自治县', 62, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(668, N'江宁区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(669, N'浦口区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(670, N'玄武区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(671, N'白下区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(672, N'秦淮区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(673, N'建邺区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(674, N'鼓楼区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(675, N'下关区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(676, N'栖霞区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(677, N'雨花台区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(678, N'六合区', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(679, N'溧水县', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(680, N'高淳县', 63, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(681, N'崇安区', 64, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(682, N'南长区', 64, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(683, N'北塘区', 64, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(684, N'锡山区', 64, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(685, N'惠山区', 64, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(686, N'滨湖区', 64, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(687, N'江阴市', 64, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(688, N'宜兴市', 64, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(689, N'京口区', 65, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(690, N'润州区', 65, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(691, N'丹徒区', 65, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(692, N'丹阳市', 65, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(693, N'扬中市', 65, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(694, N'句容市', 65, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(695, N'沧浪区', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(696, N'常熟市', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(697, N'平江区', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(698, N'金阊区', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(699, N'虎丘区', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(700, N'昆山市', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(701, N'太仓市', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(702, N'吴江市', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(703, N'吴中区', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(704, N'相城区', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(705, N'张家港市', 66, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(706, N'崇川区', 67, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(707, N'港闸区', 67, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(708, N'海安县', 67, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(709, N'如东县', 67, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(710, N'启东市', 67, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(711, N'如皋市', 67, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(712, N'通州市', 67, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(713, N'海门市', 67, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(714, N'高邮市', 68, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(715, N'广陵区', 68, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(716, N'邗江区', 68, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(717, N'维扬区', 68, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(718, N'宝应县', 68, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(719, N'江都市', 68, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(720, N'仪征市', 68, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(721, N'亭湖区', 69, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(722, N'盐都区', 69, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(723, N'响水县', 69, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(724, N'滨海县', 69, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(725, N'阜宁县', 69, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(726, N'射阳县', 69, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(727, N'建湖县', 69, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(728, N'东台市', 69, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(729, N'大丰市', 69, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(730, N'鼓楼区', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(731, N'云龙区', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(732, N'九里区', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(733, N'贾汪区', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(734, N'泉山区', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(735, N'丰县', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(736, N'沛县', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(737, N'铜山县', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(738, N'睢宁县', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(739, N'新沂市', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(740, N'邳州市', 70, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(741, N'清河区', 71, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(742, N'楚州区', 71, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(743, N'淮阴区', 71, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(744, N'清浦区', 71, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(745, N'涟水县', 71, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(746, N'洪泽县', 71, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(747, N'盱眙县', 71, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(748, N'金湖县', 71, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(749, N'连云区', 72, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(750, N'新浦区', 72, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(751, N'海州区', 72, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(752, N'赣榆县', 72, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(753, N'东海县', 72, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(754, N'灌云县', 72, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(755, N'灌南县', 72, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(756, N'天宁区', 73, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(757, N'钟楼区', 73, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(758, N'戚墅堰区', 73, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(759, N'新北区', 73, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(760, N'武进区', 73, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(761, N'溧阳市', 73, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(762, N'金坛市', 73, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(763, N'海陵区', 74, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(764, N'高港区', 74, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(765, N'兴化市', 74, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(766, N'靖江市', 74, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(767, N'泰兴市', 74, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(768, N'姜堰市', 74, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(769, N'宿城区', 75, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(770, N'宿豫区', 75, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(771, N'沭阳县', 75, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(772, N'泗阳县', 75, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(773, N'泗洪县', 75, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(774, N'定海区', 76, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(775, N'普陀区', 76, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(776, N'岱山县', 76, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(777, N'嵊泗县', 76, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(778, N'柯城区', 77, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(779, N'衢江区', 77, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(780, N'常山县', 77, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(781, N'开化县', 77, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(782, N'龙游县', 77, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(783, N'江山市', 77, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(784, N'上城区', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(785, N'下城区', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(786, N'江干区', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(787, N'拱墅区', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(788, N'西湖区', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(789, N'滨江区', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(790, N'余杭区', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(791, N'桐庐县', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(792, N'淳安县', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(793, N'建德市', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(794, N'富阳市', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(795, N'临安市', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(796, N'萧山区', 78, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(797, N'吴兴区', 79, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(798, N'南浔区', 79, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(799, N'德清县', 79, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(800, N'长兴县', 79, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(801, N'安吉县', 79, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(802, N' 南湖区', 80, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(803, N' 秀洲区', 80, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(804, N' 嘉善县', 80, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(805, N' 海盐县', 80, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(806, N' 海宁市', 80, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(807, N' 平湖市', 80, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(808, N' 桐乡市 ', 80, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(809, N'海曙区', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(810, N'江东区', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(811, N'江北区', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(812, N'北仑区', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(813, N'镇海区', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(814, N'鄞州区', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(815, N'象山县', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(816, N'宁海县', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(817, N'余姚市', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(818, N'慈溪市', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(819, N'奉化市', 81, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(820, N'越城区', 82, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(821, N'绍兴县', 82, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(822, N'新昌县', 82, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(823, N'诸暨市', 82, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(824, N'上虞市', 82, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(825, N'嵊州市', 82, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(826, N'鹿城区', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(827, N'龙湾区', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(828, N'瓯海区', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(829, N'洞头县', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(830, N'永嘉县', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(831, N'平阳县', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(832, N'苍南县', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(833, N'文成县', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(834, N'泰顺县', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(835, N'瑞安市', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(836, N'乐清市', 83, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(837, N'莲都区', 84, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(838, N'青田县', 84, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(839, N'缙云县', 84, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(840, N'遂昌县', 84, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(841, N'松阳县', 84, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(842, N'云和县', 84, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(843, N'庆元县', 84, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(844, N'景宁畲族自治县', 84, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(845, N'龙泉市', 84, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(846, N'婺城区', 85, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(847, N'金东区', 85, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(848, N'武义县', 85, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(849, N'浦江县', 85, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(850, N'磐安县', 85, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(851, N'兰溪市', 85, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(852, N'义乌市', 85, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(853, N'东阳市', 85, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(854, N'永康市', 85, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(855, N'椒江区', 86, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(856, N'黄岩区', 86, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(857, N'路桥区', 86, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(858, N'玉环县', 86, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(859, N'三门县', 86, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(860, N'天台县', 86, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(861, N'仙居县', 86, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(862, N'温岭市', 86, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(863, N'临海市', 86, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(864, N'瑶海区', 87, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(865, N'庐阳区', 87, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(866, N'蜀山区', 87, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(867, N'包河区', 87, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(868, N'长丰县', 87, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(869, N'肥东县', 87, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(870, N'肥西县', 87, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(871, N'镜湖区', 88, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(872, N'弋江区', 88, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(873, N'鸠江区', 88, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(874, N'三山区', 88, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(875, N'芜湖县', 88, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(876, N'繁昌县', 88, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(877, N'南陵县', 88, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(878, N'龙子湖区', 89, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(879, N'蚌山区', 89, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(880, N'禹会区', 89, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(881, N'淮上区', 89, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(882, N'怀远县', 89, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(883, N'五河县', 89, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(884, N'固镇县', 89, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(885, N'大通区', 90, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(886, N'田家庵区', 90, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(887, N'谢家集区', 90, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(888, N'八公山区', 90, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(889, N'潘集区', 90, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(890, N'凤台县', 90, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(891, N'金家庄区', 91, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(892, N'花山区', 91, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(893, N'雨山区', 91, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(894, N'当涂县', 91, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(895, N'杜集区', 92, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(896, N'相山区', 92, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(897, N'烈山区', 92, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(898, N'濉溪县 ', 92, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(899, N'铜官山区', 93, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(900, N'狮子山区', 93, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(901, N'铜陵县', 93, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(902, N'迎江区', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(903, N'大观区', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(904, N'宜秀区', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(905, N'怀宁县', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(906, N'枞阳县', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(907, N'潜山县', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(908, N'太湖县', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(909, N'宿松县', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(910, N'望江县', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(911, N'岳西县', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(912, N'桐城市', 94, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(913, N'屯溪区', 95, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(914, N'黄山区', 95, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(915, N'徽州区', 95, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(916, N'歙县', 95, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(917, N'休宁县', 95, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(918, N'黟县', 95, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(919, N'祁门县', 95, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(920, N'琅琊区', 96, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(921, N'南谯区', 96, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(922, N'来安县', 96, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(923, N'全椒县', 96, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(924, N'定远县', 96, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(925, N'凤阳县', 96, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(926, N'天长市', 96, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(927, N'明光市', 96, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(928, N'颍州区', 97, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(929, N'颍东区', 97, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(930, N'颍泉区', 97, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(931, N'临泉县', 97, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(932, N'太和县', 97, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(933, N'阜南县', 97, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(934, N'颍上县', 97, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(935, N'界首市', 97, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(936, N'埇桥区', 98, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(937, N'砀山县', 98, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(938, N'萧县', 98, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(939, N'灵璧县', 98, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(940, N'泗县 ', 98, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(941, N'居巢区', 99, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(942, N'庐江县', 99, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(943, N'无为县', 99, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(944, N'含山县', 99, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(945, N'和县 ', 99, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(946, N'金安区', 100, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(947, N'裕安区', 100, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(948, N'寿县', 100, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(949, N'霍邱县', 100, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(950, N'舒城县', 100, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(951, N'金寨县', 100, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(952, N'霍山县', 100, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(953, N'谯城区', 101, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(954, N'涡阳县', 101, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(955, N'蒙城县', 101, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(956, N'利辛县', 101, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(957, N'贵池区', 102, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(958, N'东至县', 102, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(959, N'石台县', 102, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(960, N'青阳县', 102, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(961, N'宣州区', 103, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(962, N'郎溪县', 103, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(963, N'广德县', 103, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(964, N'泾县', 103, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(965, N'绩溪县', 103, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(966, N'旌德县', 103, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(967, N'宁国市', 103, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(968, N'鼓楼区', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(969, N'台江区', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(970, N'仓山区', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(971, N'马尾区', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(972, N'晋安区', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(973, N'闽侯县', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(974, N'连江县', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(975, N'罗源县', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(976, N'闽清县', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(977, N'永泰县', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(978, N'平潭县', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(979, N'福清市', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(980, N'长乐市', 104, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(981, N'思明区', 105, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(982, N'海沧区', 105, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(983, N'湖里区', 105, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(984, N'集美区', 105, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(985, N'同安区', 105, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(986, N'翔安区', 105, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(987, N'蕉城区', 106, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(988, N'霞浦县', 106, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(989, N'古田县', 106, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(990, N'屏南县', 106, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(991, N'寿宁县', 106, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(992, N'周宁县', 106, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(993, N'柘荣县', 106, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(994, N'福安市', 106, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(995, N'福鼎市', 106, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(996, N'城厢区', 107, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(997, N'涵江区', 107, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(998, N'荔城区', 107, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(999, N'秀屿区', 107, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1000, N'仙游县', 107, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1001, N'鲤城区', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1002, N'丰泽区', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1003, N'洛江区', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1004, N'泉港区', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1005, N'惠安县', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1006, N'安溪县', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1007, N'永春县', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1008, N'德化县', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1009, N'石狮市', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1010, N'晋江市', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1011, N'南安市', 108, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1012, N'芗城区', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1013, N'龙文区', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1014, N'云霄县', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1015, N'漳浦县', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1016, N'诏安县', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1017, N'长泰县', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1018, N'东山县', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1019, N'南靖县', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1020, N'平和县', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1021, N'华安县', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1022, N'龙海市', 109, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1023, N'新罗区', 110, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1024, N'长汀县', 110, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1025, N'永定县', 110, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1026, N'上杭县', 110, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1027, N'武平县', 110, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1028, N'连城县', 110, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1029, N'漳平市', 110, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1030, N'梅列区', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1031, N'三元区', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1032, N'明溪县', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1033, N'清流县', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1034, N'宁化县', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1035, N'大田县', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1036, N'尤溪县', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1037, N'沙县', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1038, N'将乐县', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1039, N'泰宁县', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1040, N'建宁县', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1041, N'永安市', 111, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1042, N'延平区', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1043, N'顺昌县', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1044, N'浦城县', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1045, N'光泽县', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1046, N'松溪县', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1047, N'政和县', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1048, N'邵武市', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1049, N'武夷山市', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1050, N'建瓯市', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1051, N'建阳市', 112, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1052, N'月湖区', 113, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1053, N'余江县', 113, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1054, N'贵溪市', 113, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1055, N'渝水区', 114, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1056, N'分宜县', 114, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1057, N'东湖区', 115, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1058, N'西湖区', 115, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1059, N'青云谱区', 115, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1060, N'湾里区', 115, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1061, N'青山湖区', 115, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1062, N'南昌县', 115, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1063, N'新建县', 115, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1064, N'安义县', 115, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1065, N'进贤县', 115, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1066, N'庐山区', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1067, N'浔阳区', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1068, N'九江县', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1069, N'武宁县', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1070, N'修水县', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1071, N'永修县', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1072, N'德安县', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1073, N'星子县', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1074, N'都昌县', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1075, N'湖口县', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1076, N'彭泽县', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1077, N'瑞昌市', 116, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1078, N'信州区', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1079, N'上饶县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1080, N'广丰县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1081, N'玉山县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1082, N'铅山县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1083, N'横峰县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1084, N'弋阳县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1085, N'余干县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1086, N'鄱阳县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1087, N'万年县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1088, N'婺源县', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1089, N'德兴市', 117, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1090, N'临川区', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1091, N'南城县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1092, N'黎川县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1093, N'南丰县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1094, N'崇仁县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1095, N'乐安县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1096, N'宜黄县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1097, N'金溪县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1098, N'资溪县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1099, N'东乡县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1100, N'广昌县', 118, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1101, N'袁州区', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1102, N'奉新县', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1103, N'万载县', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1104, N'上高县', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1105, N'宜丰县', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1106, N'靖安县', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1107, N'铜鼓县', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1108, N'丰城市', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1109, N'樟树市', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1110, N'高安市', 119, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1111, N'吉州区', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1112, N'青原区', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1113, N'吉安县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1114, N'吉水县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1115, N'峡江县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1116, N'新干县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1117, N'永丰县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1118, N'泰和县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1119, N'遂川县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1120, N'万安县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1121, N'安福县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1122, N'永新县', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1123, N'井冈山市', 120, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1124, N'章贡区', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1125, N'赣县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1126, N'信丰县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1127, N'大余县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1128, N'上犹县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1129, N'崇义县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1130, N'安远县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1131, N'龙南县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1132, N'定南县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1133, N'全南县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1134, N'宁都县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1135, N'于都县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1136, N'兴国县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1137, N'会昌县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1138, N'寻乌县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1139, N'石城县', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1140, N'瑞金市', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1141, N'南康市', 121, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1142, N'昌江区', 122, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1143, N'珠山区', 122, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1144, N'浮梁县', 122, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1145, N'乐平市', 122, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1146, N'安源区', 123, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1147, N'湘东区', 123, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1148, N'莲花县', 123, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1149, N'上栗县', 123, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1150, N'芦溪县', 123, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1151, N'牡丹区', 124, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1152, N'曹县', 124, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1153, N'单县', 124, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1154, N'成武县', 124, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1155, N'巨野县', 124, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1156, N'郓城县', 124, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1157, N'鄄城县', 124, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1158, N'定陶县', 124, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1159, N'东明县', 124, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1160, N'历下区', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1161, N'市中区', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1162, N'槐荫区', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1163, N'天桥区', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1164, N'历城区', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1165, N'长清区', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1166, N'平阴县', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1167, N'济阳县', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1168, N'商河县', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1169, N'章丘市', 125, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1170, N'市南区', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1171, N'市北区', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1172, N'四方区', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1173, N'黄岛区', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1174, N'崂山区', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1175, N'李沧区', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1176, N'城阳区', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1177, N'胶州市', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1178, N'即墨市', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1179, N'平度市', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1180, N'胶南市', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1181, N'莱西市', 126, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1182, N'淄川区', 127, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1183, N'张店区', 127, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1184, N'博山区', 127, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1185, N'临淄区', 127, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1186, N'周村区', 127, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1187, N'桓台县', 127, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1188, N'高青县', 127, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1189, N'沂源县', 127, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1190, N'德城区', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1191, N'陵县', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1192, N'宁津县', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1193, N'庆云县', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1194, N'临邑县', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1195, N'齐河县', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1196, N'平原县', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1197, N'夏津县', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1198, N'武城县', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1199, N'乐陵市', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1200, N'禹城市', 128, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1201, N'芝罘区', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1202, N'福山区', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1203, N'牟平区', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1204, N'莱山区', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1205, N'长岛县', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1206, N'龙口市', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1207, N'莱阳市', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1208, N'莱州市', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1209, N'蓬莱市', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1210, N'招远市', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1211, N'栖霞市', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1212, N'海阳市', 129, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1213, N'潍城区', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1214, N'寒亭区', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1215, N'坊子区', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1216, N'奎文区', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1217, N'临朐县', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1218, N'昌乐县', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1219, N'青州市', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1220, N'诸城市', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1221, N'寿光市', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1222, N'安丘市', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1223, N'高密市', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1224, N'昌邑市', 130, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1225, N'市中区', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1226, N'任城区', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1227, N'微山县', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1228, N'鱼台县', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1229, N'金乡县', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1230, N'嘉祥县', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1231, N'汶上县', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1232, N'泗水县', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1233, N'梁山县', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1234, N'曲阜市', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1235, N'兖州市', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1236, N'邹城市', 131, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1237, N'泰山区', 132, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1238, N'岱岳区', 132, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1239, N'宁阳县', 132, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1240, N'东平县', 132, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1241, N'新泰市', 132, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1242, N'肥城市', 132, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1243, N'兰山区', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1244, N'罗庄区', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1245, N'河东区', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1246, N'沂南县', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1247, N'郯城县', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1248, N'沂水县', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1249, N'苍山县', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1250, N'费县', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1251, N'平邑县', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1252, N'莒南县', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1253, N'蒙阴县', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1254, N'临沭县', 133, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1255, N'滨城区', 134, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1256, N'惠民县', 134, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1257, N'阳信县', 134, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1258, N'无棣县', 134, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1259, N'沾化县', 134, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1260, N'博兴县', 134, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1261, N'邹平县', 134, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1262, N'东营区', 135, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1263, N'河口区', 135, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1264, N'垦利县', 135, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1265, N'利津县', 135, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1266, N'广饶县', 135, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1267, N'环翠区', 136, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1268, N'文登市', 136, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1269, N'荣成市', 136, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1270, N'乳山市', 136, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1271, N'市中区', 137, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1272, N'薛城区', 137, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1273, N'峄城区', 137, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1274, N'台儿庄区', 137, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1275, N'山亭区', 137, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1276, N'滕州市', 137, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1277, N'东港区', 138, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1278, N'岚山区', 138, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1279, N'五莲县', 138, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1280, N'莒县', 138, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1281, N'莱城区', 139, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1282, N'钢城区', 139, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1283, N'东昌府区', 140, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1284, N'阳谷县', 140, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1285, N'莘县', 140, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1286, N'茌平县', 140, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1287, N'东阿县', 140, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1288, N'冠县', 140, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1289, N'高唐县', 140, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1290, N'临清市', 140, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1291, N'梁园区', 141, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1292, N'睢阳区', 141, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1293, N'民权县', 141, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1294, N'睢县', 141, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1295, N'宁陵县', 141, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1296, N'柘城县', 141, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1297, N'虞城县', 141, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1298, N'夏邑县', 141, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1299, N'永城市', 141, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1300, N'中原区', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1301, N'二七区', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1302, N'管城回族区', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1303, N'金水区', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1304, N'上街区', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1305, N'惠济区', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1306, N'中牟县', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1307, N'巩义市', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1308, N'荥阳市', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1309, N'新密市', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1310, N'新郑市', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1311, N'登封市', 142, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1312, N'文峰区', 143, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1313, N'北关区', 143, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1314, N'殷都区', 143, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1315, N'龙安区', 143, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1316, N'安阳县', 143, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1317, N'汤阴县', 143, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1318, N'滑县', 143, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1319, N'内黄县', 143, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1320, N'林州市', 143, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1321, N'红旗区', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1322, N'卫滨区', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1323, N'凤泉区', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1324, N'牧野区', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1325, N'新乡县', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1326, N'获嘉县', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1327, N'原阳县', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1328, N'延津县', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1329, N'封丘县', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1330, N'长垣县', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1331, N'卫辉市', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1332, N'辉县市', 144, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1333, N'魏都区', 145, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1334, N'许昌县', 145, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1335, N'鄢陵县', 145, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1336, N'襄城县', 145, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1337, N'禹州市', 145, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1338, N'长葛市', 145, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1339, N'新华区', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1340, N'卫东区', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1341, N'石龙区', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1342, N'湛河区', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1343, N'宝丰县', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1344, N'叶县', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1345, N'鲁山县', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1346, N'郏县', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1347, N'舞钢市', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1348, N'汝州市', 146, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1349, N'浉河区', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1350, N'平桥区', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1351, N'罗山县', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1352, N'光山县', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1353, N'新县', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1354, N'商城县', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1355, N'固始县', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1356, N'潢川县', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1357, N'淮滨县', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1358, N'息县', 147, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1359, N'宛城区', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1360, N'卧龙区', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1361, N'南召县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1362, N'方城县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1363, N'西峡县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1364, N'镇平县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1365, N'内乡县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1366, N'淅川县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1367, N'社旗县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1368, N'唐河县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1369, N'新野县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1370, N'桐柏县', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1371, N'邓州市', 148, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1372, N'龙亭区', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1373, N'顺河回族区', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1374, N'鼓楼区', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1375, N'禹王台区', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1376, N'金明区', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1377, N'杞县', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1378, N'通许县', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1379, N'尉氏县', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1380, N'开封县', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1381, N'兰考县', 149, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1382, N'老城区', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1383, N'西工区', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1384, N'瀍河回族区', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1385, N'涧西区', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1386, N'吉利区', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1387, N'洛龙区', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1388, N'孟津县', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1389, N'新安县', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1390, N'栾川县', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1391, N'嵩县', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1392, N'汝阳县', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1393, N'宜阳县', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1394, N'洛宁县', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1395, N'伊川县', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1396, N'偃师市', 150, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1397, N'解放区', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1398, N'中站区', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1399, N'马村区', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1400, N'山阳区', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1401, N'修武县', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1402, N'博爱县', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1403, N'武陟县', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1404, N'温县', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1405, N'沁阳市', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1406, N'孟州市', 152, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1407, N'鹤山区', 153, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1408, N'山城区', 153, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1409, N'淇滨区', 153, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1410, N'浚县', 153, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1411, N'淇县', 153, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1412, N'华龙区', 154, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1413, N'清丰县', 154, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1414, N'南乐县', 154, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1415, N'范县', 154, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1416, N'台前县', 154, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1417, N'濮阳县', 154, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1418, N'川汇区', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1419, N'扶沟县', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1420, N'西华县', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1421, N'商水县', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1422, N'沈丘县', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1423, N'郸城县', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1424, N'淮阳县', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1425, N'太康县', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1426, N'鹿邑县', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1427, N'项城市', 155, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1428, N'源汇区', 156, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1429, N'郾城区', 156, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1430, N'召陵区', 156, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1431, N'舞阳县', 156, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1432, N'临颍县', 156, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1433, N'驿城区', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1434, N'西平县', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1435, N'上蔡县', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1436, N'平舆县', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1437, N'正阳县', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1438, N'确山县', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1439, N'泌阳县', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1440, N'汝南县', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1441, N'遂平县', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1442, N'新蔡县', 157, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1443, N'湖滨区', 158, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1444, N'渑池县', 158, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1445, N'陕县', 158, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1446, N'卢氏县', 158, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1447, N'义马市', 158, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1448, N'灵宝市', 158, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1449, N'江岸区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1450, N'江汉区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1451, N'硚口区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1452, N'汉阳区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1453, N'武昌区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1454, N'青山区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1455, N'洪山区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1456, N'东西湖区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1457, N'汉南区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1458, N'蔡甸区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1459, N'江夏区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1460, N'黄陂区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1461, N'新洲区', 159, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1462, N'襄城区', 160, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1463, N'樊城区', 160, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1464, N'襄阳区', 160, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1465, N'南漳县', 160, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1466, N'谷城县', 160, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1467, N'保康县', 160, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1468, N'老河口市', 160, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1469, N'枣阳市', 160, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1470, N'宜城市', 160, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1471, N'梁子湖区', 161, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1472, N'华容区', 161, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1473, N'鄂城区', 161, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1474, N'孝南区', 162, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1475, N'孝昌县', 162, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1476, N'大悟县', 162, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1477, N'云梦县', 162, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1478, N'应城市', 162, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1479, N'安陆市', 162, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1480, N'汉川市', 162, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1481, N'黄州区', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1482, N'团风县', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1483, N'红安县', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1484, N'罗田县', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1485, N'英山县', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1486, N'浠水县', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1487, N'蕲春县', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1488, N'黄梅县', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1489, N'麻城市', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1490, N'武穴市', 163, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1491, N'黄石港区', 164, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1492, N'西塞山区', 164, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1493, N'下陆区', 164, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1494, N'铁山区', 164, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1495, N'阳新县', 164, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1496, N'大冶市', 164, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1497, N'咸安区', 165, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1498, N'嘉鱼县', 165, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1499, N'通城县', 165, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1500, N'崇阳县', 165, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1501, N'通山县', 165, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1502, N'赤壁市', 165, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1503, N'沙市区', 166, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1504, N'荆州区', 166, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1505, N'公安县', 166, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1506, N'监利县', 166, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1507, N'江陵县', 166, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1508, N'石首市', 166, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1509, N'洪湖市', 166, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1510, N'松滋市', 166, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1511, N'西陵区', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1512, N'伍家岗区', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1513, N'点军区', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1514, N'猇亭区', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1515, N'夷陵区', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1516, N'远安县', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1517, N'兴山县', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1518, N'秭归县', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1519, N'长阳土家族自治县', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1520, N'五峰土家族自治县', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1521, N'宜都市', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1522, N'当阳市', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1523, N'枝江市', 167, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1524, N'恩施市', 168, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1525, N'利川市', 168, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1526, N'建始县', 168, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1527, N'巴东县', 168, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1528, N'宣恩县', 168, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1529, N'咸丰县', 168, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1530, N'来凤县', 168, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1531, N'鹤峰县', 168, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1532, N'茅箭区', 170, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1533, N'张湾区', 170, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1534, N'郧县', 170, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1535, N'郧西县', 170, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1536, N'竹山县', 170, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1537, N'竹溪县', 170, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1538, N'房县', 170, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1539, N'丹江口市', 170, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1540, N'曾都区', 171, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1541, N'广水市', 171, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1542, N'东宝区', 172, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1543, N'掇刀区', 172, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1544, N'京山县', 172, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1545, N'沙洋县', 172, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1546, N'钟祥市', 172, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1547, N'岳阳楼区', 176, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1548, N'云溪区', 176, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1549, N'君山区', 176, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1550, N'岳阳县', 176, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1551, N'华容县', 176, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1552, N'湘阴县', 176, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1553, N'平江县', 176, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1554, N'汨罗市', 176, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1555, N'临湘市', 176, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1556, N'芙蓉区', 177, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1557, N'天心区', 177, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1558, N'岳麓区', 177, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1559, N'开福区', 177, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1560, N'雨花区', 177, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1561, N'长沙县', 177, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1562, N'望城县', 177, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1563, N'宁乡县', 177, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1564, N'浏阳市', 177, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1565, N'雨湖区', 178, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1566, N'岳塘区', 178, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1567, N'湘潭县', 178, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1568, N'湘乡市', 178, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1569, N'韶山市', 178, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1570, N'荷塘区', 179, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1571, N'芦淞区', 179, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1572, N'石峰区', 179, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1573, N'天元区', 179, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1574, N'株洲县', 179, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1575, N'攸县', 179, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1576, N'茶陵县', 179, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1577, N'炎陵县', 179, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1578, N'醴陵市', 179, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1579, N'珠晖区', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1580, N'雁峰区', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1581, N'石鼓区', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1582, N'蒸湘区', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1583, N'南岳区', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1584, N'衡阳县', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1585, N'衡南县', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1586, N'衡山县', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1587, N'衡东县', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1588, N'祁东县', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1589, N'耒阳市', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1590, N'常宁市', 180, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1591, N'北湖区', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1592, N'苏仙区', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1593, N'桂阳县', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1594, N'宜章县', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1595, N'永兴县', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1596, N'嘉禾县', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1597, N'临武县', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1598, N'汝城县', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1599, N'桂东县', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1600, N'安仁县', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1601, N'资兴市', 181, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1602, N'武陵区', 182, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1603, N'鼎城区', 182, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1604, N'安乡县', 182, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1605, N'汉寿县', 182, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1606, N'澧县', 182, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1607, N'临澧县', 182, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1608, N'桃源县', 182, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1609, N'石门县', 182, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1610, N'津市市', 182, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1611, N'资阳区', 183, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1612, N'赫山区', 183, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1613, N'南县', 183, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1614, N'桃江县', 183, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1615, N'安化县', 183, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1616, N'沅江市', 183, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1617, N'娄星区', 184, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1618, N'双峰县', 184, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1619, N'新化县', 184, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1620, N'冷水江市', 184, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1621, N'涟源市', 184, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1622, N'双清区', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1623, N'大祥区', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1624, N'北塔区', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1625, N'邵东县', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1626, N'新邵县', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1627, N'邵阳县', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1628, N'隆回县', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1629, N'洞口县', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1630, N'绥宁县', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1631, N'新宁县', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1632, N'城步苗族自治县', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1633, N'武冈市', 185, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1634, N'吉首市', 186, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1635, N'泸溪县', 186, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1636, N'凤凰县', 186, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1637, N'花垣县', 186, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1638, N'保靖县', 186, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1639, N'古丈县', 186, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1640, N'永顺县', 186, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1641, N'龙山县', 186, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1642, N'永定区', 187, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1643, N'武陵源区', 187, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1644, N'慈利县', 187, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1645, N'桑植县', 187, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1646, N'鹤城区', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1647, N'中方县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1648, N'沅陵县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1649, N'辰溪县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1650, N'溆浦县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1651, N'会同县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1652, N'麻阳苗族自治县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1653, N'新晃侗族自治县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1654, N'芷江侗族自治县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1655, N'靖州苗族侗族自治县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1656, N'通道侗族自治县', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1657, N'洪江市', 188, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1658, N'零陵区', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1659, N'冷水滩区', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1660, N'祁阳县', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1661, N'东安县', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1662, N'双牌县', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1663, N'道县', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1664, N'江永县', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1665, N'宁远县', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1666, N'蓝山县', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1667, N'新田县', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1668, N'江华瑶族自治县', 189, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1669, N'从化市', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1670, N'荔湾区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1671, N'越秀区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1672, N'海珠区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1673, N'天河区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1674, N'白云区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1675, N'花都区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1676, N'黄埔区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1677, N'萝岗区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1678, N'南沙区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1679, N'番禺区', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1680, N'增城市', 190, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1681, N'海丰县', 191, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1682, N'陆河县', 191, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1683, N'陆丰市', 191, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1684, N'江城区', 192, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1685, N'阳西县', 192, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1686, N'阳东县', 192, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1687, N'阳春市', 192, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1688, N'榕城区', 193, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1689, N'揭东县', 193, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1690, N'揭西县', 193, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1691, N'惠来县', 193, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1692, N'普宁市', 193, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1693, N'茂南区', 194, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1694, N'茂港区', 194, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1695, N'电白县', 194, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1696, N'高州市', 194, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1697, N'化州市', 194, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1698, N'信宜市', 194, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1699, N'惠城区', 195, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1700, N'惠阳区', 195, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1701, N'博罗县', 195, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1702, N'惠东县', 195, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1703, N'龙门县', 195, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1704, N'蓬江区', 196, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1705, N'江海区', 196, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1706, N'新会区', 196, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1707, N'台山市', 196, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1708, N'开平市', 196, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1709, N'鹤山市', 196, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1710, N'恩平市', 196, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1711, N'武江区', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1712, N'浈江区', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1713, N'曲江区', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1714, N'始兴县', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1715, N'仁化县', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1716, N'翁源县', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1717, N'乳源瑶族自治县', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1718, N'新丰县', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1719, N'乐昌市', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1720, N'南雄市', 197, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1721, N'梅江区', 198, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1722, N'梅县', 198, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1723, N'大埔县', 198, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1724, N'丰顺县', 198, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1725, N'五华县', 198, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1726, N'平远县', 198, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1727, N'蕉岭县', 198, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1728, N'兴宁市', 198, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1729, N'龙湖区', 199, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1730, N'金平区', 199, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1731, N'濠江区', 199, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1732, N'潮阳区', 199, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1733, N'潮南区', 199, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1734, N'澄海区', 199, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1735, N'南澳县', 199, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1736, N'罗湖区', 200, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1737, N'福田区', 200, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1738, N'南山区', 200, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1739, N'宝安区', 200, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1740, N'龙岗区', 200, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1741, N'盐田区', 200, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1742, N'香洲区', 201, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1743, N'斗门区', 201, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1744, N'金湾区', 201, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1745, N'禅城区', 202, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1746, N'南海区', 202, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1747, N'顺德区', 202, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1748, N'三水区', 202, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1749, N'高明区', 202, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1750, N'端州区', 203, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1751, N'鼎湖区', 203, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1752, N'广宁县', 203, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1753, N'怀集县', 203, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1754, N'封开县', 203, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1755, N'德庆县', 203, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1756, N'高要市', 203, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1757, N'四会市', 203, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1758, N'赤坎区', 204, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1759, N'霞山区', 204, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1760, N'坡头区', 204, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1761, N'麻章区', 204, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1762, N'遂溪县', 204, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1763, N'徐闻县', 204, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1764, N'廉江市', 204, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1765, N'雷州市', 204, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1766, N'吴川市', 204, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1767, N'源城区', 206, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1768, N'紫金县', 206, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1769, N'龙川县', 206, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1770, N'连平县', 206, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1771, N'和平县', 206, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1772, N'东源县', 206, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1773, N'清城区', 207, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1774, N'佛冈县', 207, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1775, N'阳山县', 207, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1776, N'连山壮族瑶族自治县', 207, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1777, N'连南瑶族自治县', 207, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1778, N'清新县', 207, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1779, N'英德市', 207, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1780, N'连州市', 207, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1781, N'云城区', 208, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1782, N'新兴县', 208, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1783, N'郁南县', 208, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1784, N'云安县', 208, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1785, N'罗定市', 208, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1786, N'湘桥区', 209, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1787, N'潮安县', 209, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1788, N'饶平县', 209, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1789, N'城关区', 211, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1790, N'七里河区', 211, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1791, N'西固区', 211, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1792, N'安宁区', 211, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1793, N'红古区', 211, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1794, N'永登县', 211, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1795, N'皋兰县', 211, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1796, N'榆中县', 211, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1797, N'金川区', 212, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1798, N'永昌县', 212, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1799, N'白银区', 213, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1800, N'平川区', 213, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1801, N'靖远县', 213, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1802, N'会宁县', 213, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1803, N'景泰县', 213, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1804, N'秦州区', 214, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1805, N'麦积区', 214, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1806, N'清水县', 214, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1807, N'秦安县', 214, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1808, N'甘谷县', 214, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1809, N'武山县', 214, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1810, N'张家川回族自治县', 214, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1811, N'凉州区', 216, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1812, N'民勤县', 216, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1813, N'古浪县', 216, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1814, N'天祝藏族自治县', 216, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1815, N'甘州区', 217, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1816, N'肃南裕固族自治县', 217, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1817, N'民乐县', 217, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1818, N'临泽县', 217, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1819, N'高台县', 217, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1820, N'山丹县', 217, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1821, N'崆峒区', 218, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1822, N'泾川县', 218, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1823, N'灵台县', 218, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1824, N'崇信县', 218, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1825, N'华亭县', 218, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1826, N'庄浪县', 218, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1827, N'静宁县', 218, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1828, N'肃州区', 219, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1829, N'金塔县', 219, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1830, N'瓜州县', 219, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1831, N'肃北蒙古族自治县', 219, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1832, N'阿克塞哈萨克族自治县', 219, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1833, N'玉门市', 219, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1834, N'敦煌市', 219, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1835, N'西峰区', 220, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1836, N'庆城县', 220, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1837, N'环县', 220, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1838, N'华池县', 220, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1839, N'合水县', 220, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1840, N'正宁县', 220, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1841, N'宁县', 220, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1842, N'镇原县', 220, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1843, N'安定区', 221, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1844, N'通渭县', 221, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1845, N'陇西县', 221, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1846, N'渭源县', 221, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1847, N'临洮县', 221, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1848, N'漳县', 221, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1849, N'岷县', 221, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1850, N'武都区', 222, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1851, N'成县', 222, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1852, N'文县', 222, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1853, N'宕昌县', 222, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1854, N'康县', 222, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1855, N'西和县', 222, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1856, N'礼县', 222, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1857, N'徽县', 222, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1858, N'两当县', 222, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1859, N'临夏市', 223, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1860, N'临夏县', 223, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1861, N'康乐县', 223, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1862, N'永靖县', 223, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1863, N'广河县', 223, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1864, N'和政县', 223, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1865, N'东乡族自治县', 223, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1866, N'积石山保安族东乡族撒拉族自治县', 223, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1867, N'合作市', 224, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1868, N'临潭县', 224, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1869, N'卓尼县', 224, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1870, N'舟曲县', 224, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1871, N'迭部县', 224, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1872, N'玛曲县', 224, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1873, N'碌曲县', 224, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1874, N'夏河县', 224, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1875, N'锦江区', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1876, N'青羊区', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1877, N'金牛区', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1878, N'武侯区', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1879, N'成华区', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1880, N'龙泉驿区', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1881, N'青白江区', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1882, N'新都区', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1883, N'温江区', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1884, N'金堂县', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1885, N'双流县', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1886, N'郫县', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1887, N'大邑县', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1888, N'蒲江县', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1889, N'新津县', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1890, N'都江堰市', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1891, N'彭州市', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1892, N'邛崃市', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1893, N'崇州市', 225, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1894, N'东区', 226, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1895, N'西区', 226, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1896, N'仁和区', 226, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1897, N'米易县', 226, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1898, N'盐边县', 226, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1899, N'自流井区', 227, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1900, N'贡井区', 227, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1901, N'大安区', 227, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1902, N'沿滩区', 227, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1903, N'荣县', 227, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1904, N'富顺县', 227, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1905, N'涪城区', 228, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1906, N'游仙区', 228, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1907, N'三台县', 228, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1908, N'盐亭县', 228, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1909, N'安县', 228, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1910, N'梓潼县', 228, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1911, N'北川羌族自治县', 228, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1912, N'平武县', 228, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1913, N'江油市', 228, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1914, N'顺庆区', 229, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1915, N'高坪区', 229, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1916, N'嘉陵区', 229, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1917, N'南部县', 229, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1918, N'营山县', 229, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1919, N'蓬安县', 229, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1920, N'仪陇县', 229, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1921, N'西充县', 229, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1922, N'阆中市', 229, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1923, N'通川区', 230, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1924, N'达县', 230, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1925, N'宣汉县', 230, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1926, N'开江县', 230, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1927, N'大竹县', 230, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1928, N'渠县', 230, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1929, N'万源市', 230, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1930, N'船山区', 231, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1931, N'安居区', 231, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1932, N'蓬溪县', 231, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1933, N'射洪县', 231, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1934, N'大英县', 231, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1935, N'广安区', 232, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1936, N'岳池县', 232, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1937, N'武胜县', 232, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1938, N'邻水县', 232, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1939, N'华蓥市', 232, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1940, N'巴州区', 233, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1941, N'通江县', 233, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1942, N'南江县', 233, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1943, N'平昌县', 233, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1944, N'江阳区', 234, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1945, N'纳溪区', 234, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1946, N'龙马潭区', 234, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1947, N'泸县', 234, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1948, N'合江县', 234, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1949, N'叙永县', 234, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1950, N'古蔺县', 234, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1951, N'翠屏区', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1952, N'宜宾县', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1953, N'南溪县', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1954, N'江安县', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1955, N'长宁县', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1956, N'高县', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1957, N'珙县', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1958, N'筠连县', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1959, N'兴文县', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1960, N'屏山县', 235, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1961, N'雁江区', 236, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1962, N'安岳县', 236, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1963, N'乐至县', 236, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1964, N'简阳市', 236, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1965, N'市中区', 237, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1966, N'东兴区', 237, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1967, N'威远县', 237, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1968, N'资中县', 237, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1969, N'隆昌县', 237, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1970, N'市中区', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1971, N'沙湾区', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1972, N'五通桥区', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1973, N'金口河区', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1974, N'犍为县', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1975, N'井研县', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1976, N'夹江县', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1977, N'沐川县', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1978, N'峨边彝族自治县', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1979, N'马边彝族自治县', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1980, N'峨眉山市', 238, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1981, N'东坡区', 239, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1982, N'仁寿县', 239, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1983, N'彭山县', 239, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1984, N'洪雅县', 239, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1985, N'丹棱县', 239, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1986, N'青神县', 239, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1987, N'西昌市', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1988, N'木里藏族自治县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1989, N'盐源县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1990, N'德昌县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1991, N'会理县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1992, N'会东县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1993, N'宁南县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1994, N'普格县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1995, N'布拖县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1996, N'金阳县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1997, N'昭觉县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1998, N'喜德县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(1999, N'冕宁县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2000, N'越西县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2001, N'甘洛县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2002, N'美姑县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2003, N'雷波县', 240, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2004, N'雨城区', 241, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2005, N'名山县', 241, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2006, N'荥经县', 241, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2007, N'汉源县', 241, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2008, N'石棉县', 241, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2009, N'天全县', 241, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2010, N'芦山县', 241, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2011, N'宝兴县', 241, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2012, N'康定县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2013, N'泸定县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2014, N'丹巴县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2015, N'九龙县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2016, N'雅江县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2017, N'道孚县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2018, N'炉霍县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2019, N'甘孜县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2020, N'新龙县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2021, N'德格县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2022, N'白玉县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2023, N'石渠县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2024, N'色达县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2025, N'理塘县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2026, N'巴塘县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2027, N'乡城县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2028, N'稻城县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2029, N'得荣县', 242, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2030, N'汶川县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2031, N'理县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2032, N'茂县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2033, N'松潘县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2034, N'九寨沟县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2035, N'金川县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2036, N'小金县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2037, N'黑水县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2038, N'马尔康县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2039, N'壤塘县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2040, N'阿坝县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2041, N'若尔盖县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2042, N'红原县', 243, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2043, N'旌阳区', 244, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2044, N'中江县', 244, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2045, N'罗江县', 244, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2046, N'广汉市', 244, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2047, N'什邡市', 244, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2048, N'绵竹市', 244, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2049, N'市中区', 245, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2050, N'元坝区', 245, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2051, N'朝天区', 245, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2052, N'旺苍县', 245, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2053, N'青川县', 245, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2054, N'剑阁县', 245, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2055, N'苍溪县', 245, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2056, N'南明区', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2057, N'云岩区', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2058, N'花溪区', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2059, N'乌当区', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2060, N'白云区', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2061, N'小河区', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2062, N'开阳县', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2063, N'息烽县', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2064, N'修文县', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2065, N'清镇市', 246, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2066, N'红花岗区', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2067, N'汇川区', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2068, N'遵义县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2069, N'桐梓县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2070, N'绥阳县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2071, N'正安县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2072, N'道真仡佬族苗族自治县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2073, N'务川仡佬族苗族自治县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2074, N'凤冈县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2075, N'湄潭县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2076, N'余庆县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2077, N'习水县', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2078, N'赤水市', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2079, N'仁怀市', 247, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2080, N'西秀区', 248, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2081, N'平坝县', 248, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2082, N'普定县', 248, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2083, N'镇宁布依族苗族自治县', 248, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2084, N'关岭布依族苗族自治县', 248, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2085, N'紫云苗族布依族自治县', 248, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2086, N'都匀市', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2087, N'福泉市', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2088, N'荔波县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2089, N'贵定县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2090, N'瓮安县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2091, N'独山县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2092, N'平塘县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2093, N'罗甸县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2094, N'长顺县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2095, N'龙里县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2096, N'惠水县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2097, N'三都水族自治县', 249, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2098, N'凯里市', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2099, N'黄平县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2100, N'施秉县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2101, N'三穗县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2102, N'镇远县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2103, N'岑巩县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2104, N'天柱县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2105, N'锦屏县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2106, N'剑河县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2107, N'台江县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2108, N'黎平县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2109, N'榕江县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2110, N'从江县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2111, N'雷山县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2112, N'麻江县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2113, N'丹寨县', 250, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2114, N'铜仁市', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2115, N'江口县', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2116, N'玉屏侗族自治县', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2117, N'石阡县', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2118, N'思南县', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2119, N'印江土家族苗族自治县', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2120, N'德江县', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2121, N'沿河土家族自治县', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2122, N'松桃苗族自治县', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2123, N'万山特区', 251, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2124, N'毕节市', 252, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2125, N'大方县', 252, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2126, N'黔西县', 252, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2127, N'金沙县', 252, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2128, N'织金县', 252, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2129, N'纳雍县', 252, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2130, N'威宁彝族回族苗族自治县', 252, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2131, N'赫章县', 252, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2132, N'钟山区', 253, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2133, N'六枝特区', 253, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2134, N'水城县', 253, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2135, N'盘县', 253, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2136, N'兴义市', 254, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2137, N'兴仁县', 254, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2138, N'普安县', 254, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2139, N'晴隆县', 254, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2140, N'贞丰县', 254, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2141, N'望谟县', 254, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2142, N'册亨县', 254, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2143, N'安龙县', 254, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2144, N'秀英区', 255, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2145, N'龙华区', 255, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2146, N'琼山区', 255, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2147, N'美兰区', 255, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2148, N'景洪市', 273, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2149, N'勐海县', 273, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2150, N'勐腊县', 273, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2151, N'瑞丽市', 274, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2152, N'潞西市', 274, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2153, N'梁河县', 274, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2154, N'盈江县', 274, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2155, N'陇川县', 274, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2156, N'昭阳区', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2157, N'鲁甸县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2158, N'巧家县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2159, N'盐津县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2160, N'大关县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2161, N'永善县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2162, N'绥江县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2163, N'镇雄县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2164, N'彝良县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2165, N'威信县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2166, N'水富县', 275, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2167, N'五华区', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2168, N'盘龙区', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2169, N'官渡区', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2170, N'西山区', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2171, N'东川区', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2172, N'呈贡县', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2173, N'晋宁县', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2174, N'富民县', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2175, N'宜良县', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2176, N'石林彝族自治县', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2177, N'嵩明县', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2178, N'禄劝彝族苗族自治县', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2179, N'寻甸回族彝族自治县', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2180, N'安宁市', 276, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2181, N'大理市', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2182, N'漾濞彝族自治县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2183, N'祥云县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2184, N'宾川县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2185, N'弥渡县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2186, N'南涧彝族自治县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2187, N'巍山彝族回族自治县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2188, N'永平县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2189, N'云龙县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2190, N'洱源县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2191, N'剑川县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2192, N'鹤庆县', 277, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2193, N'个旧市', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2194, N'开远市', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2195, N'蒙自县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2196, N'屏边苗族自治县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2197, N'建水县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2198, N'石屏县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2199, N'弥勒县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2200, N'泸西县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2201, N'元阳县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2202, N'红河县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2203, N'金平苗族瑶族傣族自治县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2204, N'绿春县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2205, N'河口瑶族自治县', 278, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2206, N'麒麟区', 279, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2207, N'马龙县', 279, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2208, N'陆良县', 279, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2209, N'师宗县', 279, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2210, N'罗平县', 279, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2211, N'富源县', 279, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2212, N'会泽县', 279, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2213, N'沾益县', 279, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2214, N'宣威市', 279, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2215, N'隆阳区', 280, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2216, N'施甸县', 280, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2217, N'腾冲县', 280, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2218, N'龙陵县', 280, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2219, N'昌宁县', 280, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2220, N'文山县', 281, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2221, N'砚山县', 281, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2222, N'西畴县', 281, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2223, N'麻栗坡县', 281, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2224, N'马关县', 281, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2225, N'丘北县', 281, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2226, N'广南县', 281, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2227, N'富宁县', 281, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2228, N'红塔区', 282, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2229, N'江川县', 282, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2230, N'澄江县', 282, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2231, N'通海县', 282, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2232, N'华宁县', 282, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2233, N'易门县', 282, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2234, N'峨山彝族自治县', 282, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2235, N'新平彝族傣族自治县', 282, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2236, N'元江哈尼族彝族傣族自治县', 282, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2237, N'楚雄市', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2238, N'双柏县', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2239, N'牟定县', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2240, N'南华县', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2241, N'姚安县', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2242, N'大姚县', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2243, N'永仁县', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2244, N'元谋县', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2245, N'武定县', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2246, N'禄丰县', 283, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2247, N'思茅区', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2248, N'宁洱哈尼族彝族自治县', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2249, N'墨江哈尼族自治县', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2250, N'景东彝族自治县', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2251, N'景谷傣族彝族自治县', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2252, N'镇沅彝族哈尼族拉祜族自治县', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2253, N'江城哈尼族彝族自治县', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2254, N'孟连傣族拉祜族佤族自治县', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2255, N'澜沧拉祜族自治县', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2256, N'西盟佤族自治县', 284, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2257, N'临翔区', 285, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2258, N'凤庆县', 285, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2259, N'云县', 285, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2260, N'永德县', 285, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2261, N'镇康县', 285, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2262, N'双江拉祜族佤族布朗族傣族自治县', 285, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2263, N'耿马傣族佤族自治县', 285, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2264, N'沧源佤族自治县', 285, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2265, N'泸水县', 286, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2266, N'福贡县', 286, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2267, N'贡山独龙族怒族自治县', 286, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2268, N'兰坪白族普米族自治县', 286, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2269, N'香格里拉县', 287, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2270, N'德钦县', 287, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2271, N'维西傈僳族自治县', 287, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2272, N'古城区', 288, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2273, N'玉龙纳西族自治县', 288, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2274, N'永胜县', 288, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2275, N'华坪县', 288, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2276, N'宁蒗彝族自治县', 288, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2277, N'门源回族自治县', 289, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2278, N'祁连县', 289, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2279, N'海晏县', 289, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2280, N'刚察县', 289, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2281, N'城东区', 290, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2282, N'城中区', 290, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2283, N'城西区', 290, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2284, N'城北区', 290, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2285, N'大通回族土族自治县', 290, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2286, N'湟中县', 290, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2287, N'湟源县', 290, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2288, N'平安县', 291, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2289, N'民和回族土族自治县', 291, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2290, N'乐都县', 291, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2291, N'互助土族自治县', 291, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2292, N'化隆回族自治县', 291, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2293, N'循化撒拉族自治县', 291, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2294, N'同仁县', 292, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2295, N'尖扎县', 292, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2296, N'泽库县', 292, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2297, N'河南蒙古族自治县', 292, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2298, N'共和县', 293, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2299, N'同德县', 293, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2300, N'贵德县', 293, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2301, N'兴海县', 293, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2302, N'贵南县', 293, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2303, N'玛沁县', 294, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2304, N'班玛县', 294, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2305, N'甘德县', 294, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2306, N'达日县', 294, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2307, N'久治县', 294, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2308, N'玛多县', 294, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2309, N'玉树县', 295, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2310, N'杂多县', 295, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2311, N'称多县', 295, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2312, N'治多县', 295, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2313, N'囊谦县', 295, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2314, N'曲麻莱县', 295, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2315, N'格尔木市', 296, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2316, N'德令哈市', 296, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2317, N'乌兰县', 296, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2318, N'都兰县', 296, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2319, N'天峻县', 296, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2320, N'新城区', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2321, N'碑林区', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2322, N'莲湖区', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2323, N'灞桥区', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2324, N'未央区', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2325, N'雁塔区', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2326, N'阎良区', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2327, N'临潼区', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2328, N'长安区', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2329, N'蓝田县', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2330, N'周至县', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2331, N'户县', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2332, N'高陵县', 297, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2333, N'秦都区', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2334, N'杨陵区', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2335, N'渭城区', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2336, N'三原县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2337, N'泾阳县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2338, N'乾县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2339, N'礼泉县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2340, N'永寿县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2341, N'彬县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2342, N'长武县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2343, N'旬邑县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2344, N'淳化县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2345, N'武功县', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2346, N'兴平市', 298, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2347, N'宝塔区', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2348, N'延长县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2349, N'延川县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2350, N'子长县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2351, N'安塞县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2352, N'志丹县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2353, N'吴起县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2354, N'甘泉县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2355, N'富县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2356, N'洛川县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2357, N'宜川县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2358, N'黄龙县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2359, N'黄陵县', 299, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2360, N'榆阳区', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2361, N'神木县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2362, N'府谷县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2363, N'横山县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2364, N'靖边县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2365, N'定边县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2366, N'绥德县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2367, N'米脂县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2368, N'佳县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2369, N'吴堡县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2370, N'清涧县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2371, N'子洲县', 300, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2372, N'临渭区', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2373, N'华县', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2374, N'潼关县', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2375, N'大荔县', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2376, N'合阳县', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2377, N'澄城县', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2378, N'蒲城县', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2379, N'白水县', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2380, N'富平县', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2381, N'韩城市', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2382, N'华阴市', 301, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2383, N'商州区', 302, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2384, N'洛南县', 302, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2385, N'丹凤县', 302, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2386, N'商南县', 302, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2387, N'山阳县', 302, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2388, N'镇安县', 302, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2389, N'柞水县', 302, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2390, N'汉滨区', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2391, N'汉阴县', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2392, N'石泉县', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2393, N'宁陕县', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2394, N'紫阳县', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2395, N'岚皋县', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2396, N'平利县', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2397, N'镇坪县', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2398, N'旬阳县', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2399, N'白河县', 303, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2400, N'汉台区', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2401, N'南郑县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2402, N'城固县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2403, N'洋县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2404, N'西乡县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2405, N'勉县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2406, N'宁强县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2407, N'略阳县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2408, N'镇巴县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2409, N'留坝县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2410, N'佛坪县', 304, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2411, N'渭滨区', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2412, N'金台区', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2413, N'陈仓区', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2414, N'凤翔县', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2415, N'岐山县', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2416, N'扶风县', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2417, N'眉县', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2418, N'陇县', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2419, N'千阳县', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2420, N'麟游县', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2421, N'凤县', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2422, N'太白县', 305, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2423, N'王益区', 306, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2424, N'印台区', 306, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2425, N'耀州区', 306, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2426, N'宜君县', 306, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2427, N'港口区', 307, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2428, N'防城区', 307, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2429, N'上思县', 307, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2430, N'东兴市', 307, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2431, N'兴宁区', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2432, N'青秀区', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2433, N'江南区', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2434, N'西乡塘区', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2435, N'良庆区', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2436, N'邕宁区', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2437, N'武鸣县', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2438, N'隆安县', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2439, N'马山县', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2440, N'上林县', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2441, N'宾阳县', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2442, N'横县', 308, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2443, N'江洲区', 309, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2444, N'扶绥县', 309, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2445, N'宁明县', 309, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2446, N'龙州县', 309, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2447, N'大新县', 309, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2448, N'天等县', 309, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2449, N'凭祥市', 309, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2450, N'兴宾区', 310, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2451, N'忻城县', 310, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2452, N'象州县', 310, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2453, N'武宣县', 310, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2454, N'金秀瑶族自治县', 310, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2455, N'合山市', 310, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2456, N'城中区', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2457, N'鱼峰区', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2458, N'柳南区', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2459, N'柳北区', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2460, N'柳江县', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2461, N'柳城县', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2462, N'鹿寨县', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2463, N'融安县', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2464, N'融水苗族自治县', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2465, N'三江侗族自治县', 311, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2466, N'秀峰区', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2467, N'叠彩区', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2468, N'象山区', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2469, N'七星区', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2470, N'雁山区', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2471, N'阳朔县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2472, N'临桂县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2473, N'灵川县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2474, N'全州县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2475, N'兴安县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2476, N'永福县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2477, N'灌阳县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2478, N'龙胜各族自治县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2479, N'资源县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2480, N'平乐县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2481, N'荔浦县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2482, N'恭城瑶族自治县', 312, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2483, N'万秀区', 313, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2484, N'碟山区', 313, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2485, N'长洲区', 313, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2486, N'苍梧县', 313, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2487, N'藤县', 313, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2488, N'蒙山县', 313, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2489, N'岑溪市', 313, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2490, N'八步区', 314, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2491, N'昭平县', 314, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2492, N'钟山县', 314, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2493, N'富川瑶族自治县', 314, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2494, N'港北区', 315, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2495, N'港南区', 315, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2496, N'覃塘区', 315, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2497, N'平南县', 315, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2498, N'桂平市', 315, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2499, N'玉州区', 316, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2500, N'容县', 316, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2501, N'陆川县', 316, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2502, N'博白县', 316, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2503, N'兴业县', 316, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2504, N'北流市', 316, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2505, N'右江区', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2506, N'田阳县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2507, N'田东县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2508, N'平果县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2509, N'德保县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2510, N'靖西县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2511, N'那坡县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2512, N'凌云县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2513, N'乐业县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2514, N'田林县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2515, N'西林县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2516, N'隆林各族自治县', 317, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2517, N'钦南区', 318, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2518, N'钦北区', 318, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2519, N'灵山县', 318, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2520, N'浦北县', 318, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2521, N'金城江区', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2522, N'南丹县', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2523, N'天峨县', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2524, N'凤山县', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2525, N'东兰县', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2526, N'罗城仫佬族自治县', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2527, N'环江毛南族自治县', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2528, N'巴马瑶族自治县', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2529, N'都安瑶族自治县', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2530, N'大化瑶族自治县', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2531, N'宜州市', 319, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2532, N'海城区', 320, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2533, N'银海区', 320, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2534, N'铁山港区', 320, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2535, N'合浦县', 320, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2536, N'城关区', 321, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2537, N'林周县', 321, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2538, N'当雄县', 321, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2539, N'尼木县', 321, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2540, N'曲水县', 321, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2541, N'堆龙德庆县', 321, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2542, N'达孜县', 321, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2543, N'墨竹工卡县', 321, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2544, N'日喀则市', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2545, N'南木林县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2546, N'江孜县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2547, N'定日县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2548, N'萨迦县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2549, N'拉孜县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2550, N'昂仁县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2551, N'谢通门县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2552, N'白朗县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2553, N'仁布县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2554, N'康马县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2555, N'定结县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2556, N'仲巴县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2557, N'亚东县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2558, N'吉隆县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2559, N'聂拉木县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2560, N'萨嘎县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2561, N'岗巴县', 322, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2562, N'乃东县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2563, N'扎囊县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2564, N'贡嘎县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2565, N'桑日县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2566, N'琼结县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2567, N'曲松县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2568, N'措美县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2569, N'洛扎县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2570, N'加查县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2571, N'隆子县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2572, N'错那县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2573, N'浪卡子县', 323, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2574, N'林芝县', 324, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2575, N'工布江达县', 324, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2576, N'米林县', 324, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2577, N'墨脱县', 324, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2578, N'波密县', 324, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2579, N'察隅县', 324, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2580, N'朗县', 324, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2581, N'昌都县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2582, N'江达县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2583, N'贡觉县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2584, N'类乌齐县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2585, N'丁青县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2586, N'察雅县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2587, N'八宿县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2588, N'左贡县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2589, N'芒康县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2590, N'洛隆县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2591, N'边坝县', 325, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2592, N'那曲县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2593, N'嘉黎县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2594, N'比如县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2595, N'聂荣县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2596, N'安多县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2597, N'申扎县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2598, N'索县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2599, N'班戈县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2600, N'巴青县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2601, N'尼玛县', 326, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2602, N'普兰县', 327, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2603, N'札达县', 327, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2604, N'噶尔县', 327, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2605, N'日土县', 327, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2606, N'革吉县', 327, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2607, N'改则县', 327, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2608, N'措勤县', 327, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2609, N'兴庆区', 328, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2610, N'西夏区', 328, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2611, N'金凤区', 328, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2612, N'永宁县', 328, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2613, N'贺兰县', 328, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2614, N'灵武市', 328, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2615, N'大武口区', 329, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2616, N'惠农区', 329, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2617, N'平罗县', 329, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2618, N'利通区', 330, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2619, N'盐池县', 330, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2620, N'同心县', 330, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2621, N'青铜峡市', 330, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2622, N'原州区', 331, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2623, N'西吉县', 331, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2624, N'隆德县', 331, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2625, N'泾源县', 331, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2626, N'彭阳县', 331, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2627, N'沙坡头区', 332, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2628, N'中宁县', 332, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2629, N'海原县', 332, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2630, N'塔城市', 333, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2631, N'乌苏市', 333, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2632, N'额敏县', 333, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2633, N'沙湾县', 333, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2634, N'托里县', 333, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2635, N'裕民县', 333, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2636, N'和布克赛尔蒙古自治县', 333, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2637, N'哈密市', 334, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2638, N'巴里坤哈萨克自治县', 334, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2639, N'伊吾县', 334, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2640, N'和田市', 335, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2641, N'和田县', 335, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2642, N'墨玉县', 335, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2643, N'皮山县', 335, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2644, N'洛浦县', 335, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2645, N'策勒县', 335, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2646, N'于田县', 335, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2647, N'民丰县', 335, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2648, N'阿勒泰市', 336, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2649, N'布尔津县', 336, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2650, N'富蕴县', 336, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2651, N'福海县', 336, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2652, N'哈巴河县', 336, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2653, N'青河县', 336, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2654, N'吉木乃县', 336, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2655, N'阿图什市', 337, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2656, N'阿克陶县', 337, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2657, N'阿合奇县', 337, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2658, N'乌恰县', 337, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2659, N'博乐市', 338, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2660, N'精河县', 338, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2661, N'温泉县', 338, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2662, N'独山子区', 339, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2663, N'克拉玛依区', 339, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2664, N'白碱滩区', 339, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2665, N'乌尔禾区', 339, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2666, N'天山区', 340, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2667, N'沙依巴克区', 340, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2668, N'新市区', 340, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2669, N'水磨沟区', 340, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2670, N'头屯河区', 340, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2671, N'达坂城区', 340, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2672, N'米东区', 340, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2673, N'乌鲁木齐县', 340, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2674, N'昌吉市', 342, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2675, N'阜康市', 342, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2676, N'呼图壁县', 342, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2677, N'玛纳斯县', 342, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2678, N'奇台县', 342, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2679, N'吉木萨尔县', 342, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2680, N'木垒哈萨克自治县', 342, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2681, N'吐鲁番市', 344, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2682, N'鄯善县', 344, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2683, N'托克逊县', 344, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2684, N'库尔勒市', 345, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2685, N'轮台县', 345, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2686, N'尉犁县', 345, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2687, N'若羌县', 345, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2688, N'且末县', 345, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2689, N'焉耆回族自治县', 345, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2690, N'和静县', 345, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2691, N'和硕县', 345, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2692, N'博湖县', 345, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2693, N'阿克苏市', 346, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2694, N'温宿县', 346, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2695, N'库车县', 346, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2696, N'沙雅县', 346, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2697, N'新和县', 346, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2698, N'拜城县', 346, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2699, N'乌什县', 346, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2700, N'阿瓦提县', 346, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2701, N'柯坪县', 346, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2702, N'喀什市', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2703, N'疏附县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2704, N'疏勒县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2705, N'英吉沙县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2706, N'泽普县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2707, N'莎车县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2708, N'叶城县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2709, N'麦盖提县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2710, N'岳普湖县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2711, N'伽师县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2712, N'巴楚县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2713, N'塔什库尔干塔吉克自治县', 348, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2714, N'伊宁市', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2715, N'奎屯市', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2716, N'伊宁县', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2717, N'察布查尔锡伯自治县', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2718, N'霍城县', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2719, N'巩留县', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2720, N'新源县', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2721, N'昭苏县', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2722, N'特克斯县', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2723, N'尼勒克县', 350, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2724, N'海拉尔区', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2725, N'阿荣旗', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2726, N'莫力达瓦达斡尔族自治旗', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2727, N'鄂伦春自治旗', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2728, N'鄂温克族自治旗', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2729, N'陈巴尔虎旗', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2730, N'新巴尔虎左旗', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2731, N'新巴尔虎右旗', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2732, N'满洲里市', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2733, N'牙克石市', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2734, N'扎兰屯市', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2735, N'额尔古纳市', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2736, N'根河市', 351, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2737, N'新城区', 352, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2738, N'回民区', 352, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2739, N'玉泉区', 352, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2740, N'赛罕区', 352, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2741, N'土默特左旗', 352, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2742, N'托克托县', 352, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2743, N'和林格尔县', 352, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2744, N'清水河县', 352, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2745, N'武川县', 352, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2746, N'东河区', 353, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2747, N'昆都仑区', 353, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2748, N'青山区', 353, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2749, N'石拐区', 353, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2750, N'白云鄂博矿区', 353, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2751, N'九原区', 353, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2752, N'土默特右旗', 353, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2753, N'固阳县', 353, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2754, N'达尔罕茂明安联合旗', 353, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2755, N'海勃湾区', 354, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2756, N'海南区', 354, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2757, N'乌达区', 354, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2758, N'集宁区', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2759, N'卓资县', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2760, N'化德县', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2761, N'商都县', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2762, N'兴和县', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2763, N'凉城县', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2764, N'察哈尔右翼前旗', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2765, N'察哈尔右翼中旗', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2766, N'察哈尔右翼后旗', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2767, N'四子王旗', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2768, N'丰镇市', 355, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2769, N'科尔沁区', 356, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2770, N'科尔沁左翼中旗', 356, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2771, N'科尔沁左翼后旗', 356, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2772, N'开鲁县', 356, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2773, N'库伦旗', 356, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2774, N'奈曼旗', 356, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2775, N'扎鲁特旗', 356, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2776, N'霍林郭勒市', 356, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2777, N'红山区', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2778, N'元宝山区', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2779, N'松山区', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2780, N'阿鲁科尔沁旗', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2781, N'巴林左旗', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2782, N'巴林右旗', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2783, N'林西县', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2784, N'克什克腾旗', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2785, N'翁牛特旗', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2786, N'喀喇沁旗', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2787, N'宁城县', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2788, N'敖汉旗', 357, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2789, N'东胜区', 358, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2790, N'达拉特旗', 358, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2791, N'准格尔旗', 358, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2792, N'鄂托克前旗', 358, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2793, N'鄂托克旗', 358, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2794, N'杭锦旗', 358, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2795, N'乌审旗', 358, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2796, N'伊金霍洛旗', 358, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2797, N'临河区', 359, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2798, N'五原县', 359, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2799, N'磴口县', 359, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2800, N'乌拉特前旗', 359, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2801, N'乌拉特中旗', 359, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2802, N'乌拉特后旗', 359, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2803, N'杭锦后旗', 359, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2804, N'二连浩特市', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2805, N'锡林浩特市', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2806, N'阿巴嘎旗', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2807, N'苏尼特左旗', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2808, N'苏尼特右旗', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2809, N'东乌珠穆沁旗', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2810, N'西乌珠穆沁旗', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2811, N'太仆寺旗', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2812, N'镶黄旗', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2813, N'正镶白旗', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2814, N'正蓝旗', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2815, N'多伦县', 360, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2816, N'乌兰浩特市', 361, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2817, N'阿尔山市', 361, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2818, N'科尔沁右翼前旗', 361, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2819, N'科尔沁右翼中旗', 361, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2820, N'扎赉特旗', 361, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2821, N'突泉县', 361, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2822, N'阿拉善左旗', 362, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2823, N'阿拉善右旗', 362, NULL)
GO
INSERT[dbo].[T_District]([Id], [DisName], [CityID], [DisSort]) VALUES(2824, N'额济纳旗', 362, NULL)
GO
SET IDENTITY_INSERT[dbo].[T_District] OFF
GO
SET IDENTITY_INSERT[dbo].[T_Province] ON

GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(1, N'北京市', 1, N'直辖市')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(2, N'天津市', 2, N'直辖市')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(3, N'河北省', 5, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(4, N'山西省', 6, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(5, N'内蒙古自治区', 32, N'自治区')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(6, N'辽宁省', 8, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(7, N'吉林省', 9, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(8, N'黑龙江省', 10, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(9, N'上海市', 3, N'直辖市')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(10, N'江苏省', 11, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(11, N'浙江省', 12, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(12, N'安徽省', 13, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(13, N'福建省', 14, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(14, N'江西省', 15, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(15, N'山东省', 16, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(16, N'河南省', 17, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(17, N'湖北省', 18, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(18, N'湖南省', 19, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(19, N'广东省', 20, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(20, N'海南省', 24, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(21, N'广西壮族自治区', 28, N'自治区')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(22, N'甘肃省', 21, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(23, N'陕西省', 27, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(24, N'新 疆维吾尔自治区', 31, N'自治区')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(25, N'青海省', 26, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(26, N'宁夏回族自治区', 30, N'自治区')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(27, N'重庆市', 4, N'直辖市')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(28, N'四川省', 22, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(29, N'贵州省', 23, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(30, N'云南省', 25, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(31, N'西藏自治区', 29, N'自治区')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(32, N'台湾省', 7, N'省份')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(33, N'澳门特别行政区', 33, N'特别行政区')
GO
INSERT[dbo].[T_Province]([ProID], [ProName], [ProSort], [ProRemark]) VALUES(34, N'香港特别行政区', 34, N'特别行政区')
GO
SET IDENTITY_INSERT[dbo].[T_Province] OFF
GO
