// pages/dzhi/dzhi.js
Page({

  data: {
    userdz:[
      {
        xm: "",
        tel: "",
        dq: "",
        dz: "",
        lock:"",
      }
    ]
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  submit:function(e){
    wx.navigateBack({
      url: '/pages/local/local?val=1',
    })
  },
  onLoad: function (options) {
    console.log(this.data.userdz[0]);
    if(options){
      let mlock;
      if (options.lock == options.index) mlock = "checked";
      this.setData({
        'userdz[0].xm': options.name,
        'userdz[0].tel': options.tel,
        'userdz[0].dq': options.diqu,
        'userdz[0].dz': options.diz,
        'userdz[0].lock': mlock,
      })
      
    }
    wx.setNavigationBarTitle({
      title: "添加地址"
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    })
    // wx.chooseAddress({
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
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