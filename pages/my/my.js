// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    iconurl:[
      "../../images/youhui.png",
      "../../images/local.png",
      "../../images/user.png"
    ],
    ddurl:[
      {
        url: "../../images/my1.png",
        text:"待付款",
        data:"1"
      },
      {
        url: "../../images/my2.png",
        text: "待收货",
        data:"2"
      },
      {
        url: "../../images/my3.png",
        text: "已完成",
        data: "3"
      }
    ],
  },
  toorder:function(e){
    var val = e.currentTarget.dataset.pid;
    console.log(val);
    app.globalData.order_id = val;
    wx.switchTab({
      url: '/pages/order/order',
    })
  },
  tosale:function(){
    wx.navigateTo({
      url: '/pages/sale/sale',
    })
  },
  toyouhui:function(){
    wx.navigateTo({
      url: '/pages/youhui/youhui',
    })
  },
  tolocal:function(){
    wx.navigateTo({
      url: '/pages/local/local',
    })
  },
  touser:function(){
    wx.navigateTo({
      url: '/pages/user/user',
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: "个人中心"
    });
    console.log()
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})