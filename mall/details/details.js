// pages/details/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://7465-test-820149-1259126597.tcb.qcloud.la/53.jpg?sign=ebb552576ed0617d08c09a81a35bb698&t=1567849079',
      'https://7465-test-820149-1259126597.tcb.qcloud.la/53.jpg?sign=ebb552576ed0617d08c09a81a35bb698&t=1567849079',
      'https://7465-test-820149-1259126597.tcb.qcloud.la/53.jpg?sign=ebb552576ed0617d08c09a81a35bb698&t=1567849079'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabIs:true,
    specIs:false,
    data:null
  },
  tabFun(e){
    console.log(e)
    if (e.currentTarget.dataset.state == 1){
      this.setData({
        tabIs:true
      })
    }else{
      this.setData({
        tabIs: false
      })
    }
  },
  goShopCar: function () {
    wx.reLaunch({
      url: "../../community/index"
    });
  },
  specFun(){
    this.setData({
      specIs: !this.data.specIs
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.http('v1/home/getItem', { id: options.id})
    .then(res=>{
      this.setData({
        data: res.data
      })
    })
  },
  openToast: function () {
    wx.showToast({
      title: '已完成',
      icon: 'success',
      duration: 3000
    });
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