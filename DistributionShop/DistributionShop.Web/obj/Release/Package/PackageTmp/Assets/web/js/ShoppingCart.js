
/**
 * 需要引入jQuery和layui
 * @param {any} productId
 * @param {any} num
 */
//购物车添加或者删除一个商品
function AddToShoppingCart(productId, num) {
    if (productId <= 0) {
        layer.msg('未获得商品Id', { icon: 2, time: 1200, offset: 'auto' });
        return;
    }
    if (num == 0) {
        layer.msg('请添加或者删除一个商品', { icon: 2, time: 1200, offset: 'auto' });
        return;
    }

    $.ajax({
        url: '/ShoppingCart/UpdateShoppingCartModel',
        type: 'POST',
        dataType: 'JSON',
        data: { productId: productId, num: num },
        success: function (res) {
            if (res.code == 0) {
                //layer.msg(res.msg, { time: 1200, offset: 'auto' });
                reloadView(res.msg);
            }
            else {
                layer.msg(res.msg, { time: 1200, offset: 'auto' });
            }
        },
        error: function (error) {

        }
    });
}