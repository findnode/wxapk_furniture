// pages/shop/shop.js
Page({
    data: {
    indexSize: 0,
      indicatorDots: false,
      autoplay: false,
      duration: 0, //可以控制动画
      list: '',
      detail: [
        {
        id: 1,
          title: '类别1',
          list: [
            {
              url: '../../images/shops/1a.jpg',
            },
            {
              url: '../../images/shops/1b.jpg',
            },
            {
              url: '../../images/shops/1c.jpg',
            },
            {
              url: '../../images/shops/1d.jpg',
            },
            {
              url: '../../images/shops/1e.jpg',
            },
            {
              url: '../../images/shops/1f.jpg',
            },
            {
              url: '../../images/shops/1g.jpg',
            },
            {
              url: '../../images/shops/1h.jpg',
            }
          ],
      },
        {
        id: 2,
        title: '类别2',
          list: [
            {
              url: '../../images/shops/BF-12.jpg',
          }
          ],
      },
        {
        id: 3,
        title: '类别3', 
          list: [
            {
              url: '../../images/shops/BF-13.jpg',
            }
          ],
      },
        {
        id: 4,
        title: '类别4',
          list: [
            {
              url: '../../images/shops/BF-14.jpg',
          }
          ],
      },
        {
        id: 5,
        title: '类别5',
          list: [
            {
              url: '../../images/shops/BF-15.jpg',
          }
          ],
      },
        {
        id: 6,
        title: '类别6',
          list: [
            {
              url: '../../images/shops/BF-15b.jpg',
          }
          ],
      },
        {
        id: 7,
        title: '类别7',
          list: [
            {
              url: '../../images/shops/BF-16.jpg',
          }
          ],
      },
        {
        id: 9,
        title: '类别8',
          list: [
            {
              url: '../../images/shops/BF-23a.jpg',
          }
          ],
      },
        {
        id: 10,
        title: '类别10',
          list: [
            {
              url: '../../images/shops/BF-23b.jpg',
          }
          ],
      },
        {
          id: 11,
          title: '类别11',
          list: [
            {
              url: '../../images/shops/BF-31.jpg',
            },
          ]
        }
      ],
  },
    change(e) {
      this.setData({
        indexSize: e.detail.current
      })
    },
    scrollTo(e) {
      this.setData({
        indexSize: e.target.dataset.index
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "商品分类"
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    })
  },
  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
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