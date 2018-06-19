// pages/local/local.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lock:"-1",
    color1:"",
    color2:"#555",
    local:[
      {
        pid:"1",
        name:"nihao1",
        tel:"12345678910",
        diqu: "上海 浦东",
        diz:"123456",
      },
      {
        pid: "2",
        name: "nihao2",
        tel: "12345678910",
        diqu: "上海 浦东",
        diz: "123456",
      },
      {
        pid: "3",
        name: "nihao3",
        tel: "12345678910",
        diqu: "上海 浦东",
        diz: "123456",
      },
      {
        pid: "4",
        name: "nihao4",
        tel: "12345678910",
        diqu: "上海 浦东",
        diz: "123456",
      },
      {
        pid: "5",
        name: "nihao5",
        tel: "12345678910",
        diqu: "上海 浦东",
        diz: "123456",
      },
      {
        pid: "6",
        name: "nihao6",
        tel: "12345678910",
        diqu: "上海 浦东",
        diz: "123456",
      },
      {
        pid: "7",
        name: "nihao7",
        tel: "12345678910",
        diqu:"上海 浦东",
        diz: "123456",
      }
      ]
  
  },
  write:function(e){
    if (e.currentTarget.dataset.pid){
      console.log("hi");
      let val = e.currentTarget.dataset.pid.split(",");
      console.log(val);
      let murl="name="+val[0]+"&tel="+val[1]+"&diqu="+val[2]+"&diz="+val[3]+"&lock="+val[4]+"&index="+val[5];
      wx.navigateTo({
        url: '/pages/dzhi/dzhi?'+murl,
      })
    }else{
      wx.navigateTo({
        url: '/pages/dzhi/dzhi',
      })
    }    
  },
  moren:function(e){
    console.log(e);
    var val = e.currentTarget.dataset.pid;
    this.data.lock=e.currentTarget.dataset.pid;
    // console.log(this.data.lock);
    this.setData({
      color1: "#1a5",
      lock:val
    })
    wx.showToast({
      title: '设置成功',
    })
  },
  del:function(e){
    var ind = e.currentTarget.dataset.pid;
    var val1 = this.data.local.slice(0, ind);
    var val2 = this.data.local.splice(ind+1, this.data.local.length);
    if(ind<this.data.lock) {
      var mlock=this.data.lock-1;
      this.setData({
        lock:mlock,
      })
      }else if(ind==this.data.lock){
      var mlock=-1;
      this.setData({
        lock: mlock,
      })
      };
    this.setData({
      local: val1.concat(val2),
    })
   wx.showToast({
     title: '成功',
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "收货地址"
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#111111',
    })
  },
  dzhi:function(){
    wx.navigateTo({
      url: '/pages/dzhi/dzhi',
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