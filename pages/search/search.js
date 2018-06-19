// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tuijian: [
      {
        name: "名称",
        url: "../../images/shops/1a.jpg",
        price: "123"
      },
      {
        name: "名称2",
        url: "../../images/shops/1b.jpg",
        price: "123"
      },
      {
        name: "名称3",
        url: "../../images/shops/1a.jpg",
        price: "123"
      },
      {
        name: "名称4",
        url: "../../images/shops/1a.jpg",
        price: "123"
      },
      {
        name: "名称5",
        url: "../../images/shops/1a.jpg",
        price: "123"
      },
      {
        name: "名称6",
        url: "../../images/shops/1a.jpg",
        price: "123"
      }
    ],
  
  },
  leave: function (e) {
    wx.redirectTo({
      url: '/pages/show/show?uid=' + e,
    })
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索结果',
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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