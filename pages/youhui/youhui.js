// pages/youhui/youhui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    heads: ["未使用", "已使用","已失效"],
    data_no:[],
    data_lost:[],
    data_use:[]

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
      title: "优惠券"
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    })
  },
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})