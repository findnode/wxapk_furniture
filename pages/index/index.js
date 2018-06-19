//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: '家具',
    banner: [
      '../../images/shops/BF-23a.jpg',
      '../../images/shops/BF-31.jpg'
      ],
    detail:[
      {
      id: 1,
      title: '类别1',
      list: [
        {
          url: '../../images/shops/1a.jpg',
        },
        {
          url: '../../images/shops/1b.jpg',
        }
      ],
    },
      {
        id: 2,
        title: '类别2',
        list: [
          {
            url: '../../images/shops/1c.jpg',
          }
        ],
      },
      {
        id: 3,
        title: '类别3',
        list: [
          {
            url: '../../images/shops/1e.jpg',
          },
          {
            url: '../../images/shops/1f.jpg',
          }
        ],
      }
    ],
    lbs:[],
    shops:[]
    
  },
  onLoad:function(option){
    wx.setNavigationBarTitle({
      title: "诺卡帝尼集成家居"
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    })
  },
  toshop:function(e){
    wx.navigateTo({
      url: '/pages/show/show'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
 
})
