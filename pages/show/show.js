// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    shops:"",
    price:0,
    show:false,
    /*轮播图*/
    banner: [
      '../../images/shops/1a.jpg',
      '../../images/shops/1b.jpg',
      '../../images/shops/1c.jpg',
      '../../images/shops/BF-23a.jpg'
      ],
    /* 详情介绍图 */
    details:[
      '../../images/shops/1a.jpg',
      '../../images/shops/1b.jpg',
      '../../images/shops/1c.jpg',
      '../../images/shops/BF-23a.jpg'
    ],
    tuijian:[
      {
        name:"名称",
        url:"../../images/shops/1a.jpg",
        price:"123"
      },
      {
          name: "名称2",
          url: "../../images/shops/1b.jpg",
          price: "123"
      },
      {
          name: "名称3",
          url: "../../images/shops/1c.jpg",
          price: "123"
      },
      {
          name: "名称4",
          url: "../../images/shops/1d.jpg",
          price: "123"
      },
      {
          name: "名称5",
          url: "../../images/shops/1f.jpg",
          price: "123"
      },
      {
          name: "名称6",
          url: "../../images/shops/1g.jpg",
          price: "123"
      }
    ],
    goods:[
      {
        sku_info:[
          {
            sp_name:"nihao",
            price:10
          }, {
            sp_name: "nihao2",
            price:20
          }, {
            sp_name: "nihao3",
            price:30
          }, {
            sp_name: "nihao4",
            price:40
          }, {
            sp_name: "nihao5",
            price:50
          }, {
            sp_name: "nihao6",
            price:60
          }
        ]
      }
    ]
  },
  /* add or reduce */
  addnum: function () {
    this.data.num++;
    this.setData({
      num: this.data.num,
    });
  },
  leave:function(e){
    wx.redirectTo({
      url: '/pages/show/show?uid='+e,
    })
    console.log(e);
  },
  hi:function(){
    console.log("hi");
  },
  reducenum: function () {
    this.data.num--;
    var _this = this;
    if (this.data.num <= 1) {
      wx.showToast({
        title: '不能再少了',
        duration: 1500
      });
      _this.setData({
        num: 1,
      });
    } else {
      this.setData({
        num: this.data.num,
      });
    }
  },

  specifications: function () {
    this.setData({
      show: true
    });
  },
  ismodel: function () {
    this.setData({
      show: false
    });
  },
  selection: function (e) {
    var id = e.currentTarget.dataset.id;
    this.data.shops=this.data.goods[0].sku_info[id].name;
    this.setData({
      sku_info: this.data.goods[0].sku_info[id],
      price:this.data.goods[0].sku_info[id].price,
      statuy: id
    });
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.banner // 需要预览的图片http链接列表  
    })
  },
  toorder:function(){
    wx.switchTab({
      url: '/pages/order/order',
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "商品详情"
    });
    console.log(this.data.goods);
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    })
  },
  addcar:function(e){
    var val = e.currentTarget.dataset.pid;
    // console.log(e);
    if(this.data.shops==""){
      wx.showToast({
        icon: 'none',
        title: '请选择一种商品',
      })
      
    }else{
      wx.showToast({
        title: '添加成功',
      })
      this.hideModal();
    }
    
  },
  /* add shopcat */
  addshopcat: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  /*pay shop */
  purchase:function(){
    wx.showModal({
      title: '暂无后台数据',
      content: '暂无后台数据',
    })
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  }
})