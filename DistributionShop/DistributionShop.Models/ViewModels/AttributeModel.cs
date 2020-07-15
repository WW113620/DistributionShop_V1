using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace DistributionShop.Models.ViewModels
{

    public class AttributeModel
    {

        public long id { get; set; }
        public string title { get; set; }

        public long parentid { get; set; }

    }


    public class AttributeModelSecond : AttributeModel
    {
        public AttributeModelSecond()
        {
            children = new List<AttributeModel>();
        }
        public List<AttributeModel> children { get; set; }
    }

    public class AttributeModelFirst : AttributeModel
    {
        public AttributeModelFirst()
        {
            children = new List<AttributeModelSecond>();
        }
        public List<AttributeModelSecond> children { get; set; }
    }
}
