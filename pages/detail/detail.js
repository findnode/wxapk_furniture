var app=getApp();
Page({
  data: {
    mitem:[
        {
          order_id: "001",
          order_sn: "0001",
          order_state: "10",
          address:"11111",
          true_name:"nihao",
          mob_phone: "12345678910", 
          order_pay: "100",
          goods_amount: "100",
          goods_info: [
            {
              goods_image: "../../images/shops/1a.jpg",
              goods_name: "hi",
              sku_name: "123",
              goods_price: "50",
              goods_num: "2",
              
            }
          ]
        },
    ],
    index:-1,
    mp:-1
  },
  onLoad: function (options) {
    var that = this;
    // wx.showLoading({
    //   title: '努力加载中···'
    // });
    wx.setNavigationBarTitle({
      title: '订单详情',
    });
    // that.setData({
    //   mp: options.mp,
    //   index:options.index
    // });
    // wx.request({
    //   url: "https://gfxcx.cntag.cn/api/interface_member_order.php?act=detail&member_id=" + app.globalData.member_id+"&order_id="+options.id,
    //   method: 'GET',
    //   dataType: 'json',
    //   success: function (data) {
    //     wx.hideLoading();
    //     that.setData({
    //       mitem: data.data.data,
    //     });
    //   }
    // });
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
  },
  // 取消订单
  remove: function (e) {
    var that = this;
    var val = e.currentTarget.dataset.pid;
    var oid = val.split(",");
    wx.showModal({
      title: '提示',
      content: '确定要取消订单吗？',
      success: function (sm) {
        if (sm.confirm) {
          wx.request({
            url: "https://gfxcx.cntag.cn/api/interface_order_cancel.php?act=cancel&order_id=" + oid[0] + "&order_sn=" + oid[1] + "&member_id=" + app.globalData.member_id,
            success: res => {
              wx.navigateBack({
                url: '/pages/order/order?val=' + that.data.index
              })
            }
          })
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  pay: function (e) {
    var that = this;
    var val = e.currentTarget.dataset.pid;
    var oid = val.split(",");
    wx.showModal({
      title: '提示',
      content: '确定要支付订单吗？',
      success: function (sm) {
        if (sm.confirm) {
          var obj = {
            act: 'prepay',
            openid: app.globalData.openid,
            order_id: oid[0]
          }
          wx.request({
            url: "https://gfxcx.cntag.cn/api/interface_wx_prepay.php",
            method: 'GET',
            dataType: 'json',
            data: obj,
            success: res => {
              var _res = JSON.parse(res.data.data);
              wx.requestPayment({     //发起微信支付
                'timeStamp': _res.timeStamp,
                'nonceStr': _res.nonceStr,
                'package': _res.package,
                'signType': 'MD5',
                'paySign': _res.paySign,
                'success': res => {
                  // wx.showLoading({
                  //   title: '支付成功',
                  //   icon: 'success',
                  // })
                  // setTimeout(function () {
                  //   wx.hideLoading()
                  // }, 1000)
                  wx.navigateBack({
                    url: '/pages/order/order?val=' + that.data.index
                  })
                },
                'fail': res => {
                  console.log("失败", res);
                }
              })
            }
          })
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  buy_again: function (e) {
    var current = e.currentTarget.dataset.pid.split(',');
    console.log(current);
    wx.request({
      url: "https://gfxcx.cntag.cn/api/interface_wx_prepay.php",
      method: 'GET',
      dataType: 'json',
      data: {
        act: 'prepay',
        order_id: current[0],
        openid: app.globalData.openid
      },
      success: res => {
        var _res = JSON.parse(res.data.data);
        wx.requestPayment({     //发起微信支付
          'timeStamp': _res.timeStamp,
          'nonceStr': _res.nonceStr,
          'package': _res.package,
          'signType': 'MD5',
          'paySign': _res.paySign,
          'success': res => {
            console.log("成功", res);
            wx.showToast({
              title: '支付成功',
              icon: 'success',
              duration: 2000
            });
            wx.redirectTo({
              url: '../order/order?val=' + 2
            });
          },
          'fail': res => {
            wx.showToast({
              title: '取消支付',
              image: app.globalData.info,
              duration: 2000
            });
            wx.redirectTo({
              url: '../order/order?val=' + 1
            });
          }
        })
      }
    });
  },
  get: function (e) {
    var that = this;
    var val = e.currentTarget.dataset.pid;
    var oid = val.split(",");
    wx.showModal({
      title: '提示',
      content: '确定要立即收货吗？',
      success: function (sm) {
        if (sm.confirm) {
          wx.request({
            url: "https://gfxcx.cntag.cn/api/interface_order_ensure.php?act=ensure&order_id=" + oid[0] + "&order_sn=" + oid[1] + "&member_id=" + app.globalData.member_id,
            success: res => {
              // wx.showLoading({
              //   title: '操作成功',
              //   icon: 'success',
              // })
              // setTimeout(function () {
              //   wx.hideLoading()
              // }, 1000)
              wx.navigateBack({
                url: '/pages/order/order?val=' + that.data.index
              })
            }
          })
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})