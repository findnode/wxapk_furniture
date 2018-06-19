// pages/sale/sale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    heads: ["售后商品", "售后进度"],

  },
  /* 滑动切换 */
  bindChange: function (e) {
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

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "售后商品"
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    })
  },

  onReady: function () {
  
  },

  onShow: function () {
  
  },

  onHide: function () {
  
  },

  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  }
})