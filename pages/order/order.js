// pages/order/order.js
const app= getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    heads: ["全部", "待付款", "待收货", "已完成"],
    mstate: ["待支付", "待收货", "已完成"],
    mitemall: [
      {
        order_id: "001",
        order_sn: "0001",
        order_state: "10",
        order_pay: "100",
        goods_amount: "0",
        goods_info: [
          {
            goods_image: "../../images/shops/1a.jpg",
            goods_name: "hi",
            sku_name: "123",
            goods_price: "50",
            goods_num: "2",
            order_pay: "100"
          }
        ]
      },
      {
        order_id: "001",
        order_sn: "0001",
        order_state: "30",
        order_pay: "100",
        goods_amount: "0",
        goods_info: [
          {
            goods_image: "../../images/shops/1a.jpg",
            goods_name: "hi",
            sku_name: "123",
            goods_price: "50",
            goods_num: "2",
            order_pay: "100"
          }
        ]
      },
      {
        order_id: "001",
        order_sn: "0001",
        order_state: "40",
        order_pay: "100",
        goods_amount: "0",
        goods_info: [
          {
            goods_image: "../../images/shops/1a.jpg",
            goods_name: "hi",
            sku_name: "123",
            goods_price: "50",
            goods_num: "2",
            order_pay: "100"
          }
        ]
      }
    ],
    nowjson: [
      {
        order_id: "001",
        order_sn: "0001",
        order_state: "10",
        order_pay: "100",
        goods_amount: "0",
        goods_info: [
          {
            goods_image: "../../images/shops/1a.jpg",
            goods_name: "hi",
            sku_name: "123",
            goods_price: "50",
            goods_num: "2",
            order_pay: "100"
          }
        ]
      }
    ],
    listjson: [
      {
        order_id: "001",
        order_sn: "0001",
        order_state: "20",
        order_pay: "100",
        goods_amount: "0",
        goods_info: [
          {
            goods_image: "../../images/shops/1a.jpg",
            goods_name: "hi",
            sku_name: "123",
            goods_price: "50",
            goods_num: "2",
            order_pay: "100"
          }
        ]
      }
    ],
    getjson: [
      {
        order_id: "001",
        order_sn: "0001",
        order_state: "30",
        order_pay: "100",
        goods_amount: "0",
        goods_info: [
          {
            goods_image: "../../images/shops/1a.jpg",
            goods_name: "hi",
            sku_name: "123",
            goods_price: "50",
            goods_num: "2",
            order_pay: "100"
          }
        ]
      }
    ],
    conjson: [
      {
        order_id: "001",
        order_sn: "0001",
        order_state: "40",
        order_pay: "100",
        goods_amount: "0",
        goods_info: [
          {
            goods_image: "../../images/shops/1a.jpg",
            goods_name: "hi",
            sku_name: "123",
            goods_price: "50",
            goods_num: "2",
            order_pay: "100"
          }
        ]
      }
    ],
  
  },
  toindex:function(e){
    wx.switchTab({
      url: '/pages/index/index'
    });
  },
  bindChange: function (e) {
    // console.log(e);
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
    wx.setNavigationBarTitle({
      title: this.data.heads[e.detail.current]
    });
  },
  // 点击tab切换
  swichNav: function (e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    });
    wx.setNavigationBarTitle({
      title: this.data.heads[e.target.dataset.current]
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: "全部"
    });
    console.log(app.globalData.order_id);
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        })
      }
    });
    that.goto();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  detail:function(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  onShow: function () {
    console.log("hi1");
    this.goto();
    console.log("hi2");
  },
  goto:function(){
    var that=this;
    var val = app.globalData.order_id;
    if (val == 1) {
      that.setData({
        currentTab: 1
      })
    } else if (val == 2) {
      that.setData({
        currentTab: 2
      })
    } else if (val == 3) {
      that.setData({
        currentTab: 3
      })
    } else if(val==0){
      that.setData({
        currentTab: 0
      })
    }else{
      console.log("hi");
    }
    app.globalData.order_id = "";
  },
  onHide: function () {
  
  }
})