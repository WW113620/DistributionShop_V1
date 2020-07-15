using System.Collections.Generic;

namespace DistributionShop.Models.ViewModels
{
    public class CategoryModel
    {

        public long Id { get; set; }
        public string Name { get; set; }

        public long ParentCategoryId { get; set; }

        public int Depth { get; set; }
    }


    public class CategoryModelSecond : CategoryModel
    {
        public CategoryModelSecond()
        {
            list = new List<CategoryModel>();
        }
        public List<CategoryModel> list { get; set; }
    }

    public class CategoryModelFirst : CategoryModel
    {
        public CategoryModelFirst()
        {
            list = new List<CategoryModelSecond>();
        }
        public List<CategoryModelSecond> list { get; set; }
    }


}
