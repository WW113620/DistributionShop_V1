using AutoMapper;
using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Models.AutoMapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<TestUser, UserViewModel>();
            CreateMap<UserViewModel, TestUser>();

            CreateMap<CategoryModel, CategoryModelSecond>();
            CreateMap<CategoryModel, CategoryModelFirst>();
            CreateMap<CategoryModelSecond, CategoryModelFirst>();
            CreateMap<AttributeModel, AttributeModelSecond>();
            CreateMap<AttributeModel, AttributeModelFirst>();
            CreateMap<AttributeModelSecond, AttributeModelFirst>();
            CreateMap<ProductMediaViewModel, ProductMedia>();
            CreateMap<ProductMedia, ProductMediaViewModel>();
            CreateMap<T_Address, Order_Address>();
            CreateMap<OrderReFund, OrderReFundModel>();
            CreateMap<OrderDetail, OrderReFundDetailModel>();
            //Mapper.CreateMap<UserViewModel, TestUser>(). ForMember(d => d.UserName, opt => opt.MapFrom(s => s.UserName));
        }
    }
}
