using Dapper;
using DistributionShop.Models.Dapper;
using DistributionShop.Models.Data;
using DistributionShop.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DistributionShop.Service.Test
{
    public class TestService : ITestService
    {
        private readonly DataContextEntities _dataContext;
        public TestService(DataContextEntities dataContext)
        {
            this._dataContext = dataContext;
        }
        public string GetName()
        {
            return "123";
        }

        public List<TestUser> GetUser()
        {
            return _dataContext.TestUsers.ToList();
        }

        public List<UserViewModel> GetUserList()
        {
            string sql = @" SELECT * FROM TestUser WHERE Id>@Id ";
            return DapperHelper.Query<UserViewModel>(sql, new { Id = 0 });
        }

        public PageResult<TestUser> GetUserList(UserRequest request)
        {
            PageResult<TestUser> result = new PageResult<TestUser>();
            string sql = @" SELECT * FROM Account WHERE Id>0 {0} ";
            string sort = " [Id] DESC ";

            DynamicParameters param = new DynamicParameters();
            StringBuilder sqlWhere = new StringBuilder();
            if (!string.IsNullOrEmpty(request.keyWord))
            {
                string sKey = $"%{request.keyWord}%";
                sqlWhere.Append(" AND UserName like @KeyWord ");
                param.Add("KeyWord", sKey);
            }
            sql = string.Format(sql, sqlWhere.ToString());
            result = DapperHelper.GetPageList<TestUser>(sql, sort, request, param);
            return result;
        }

    }
}
