//app.js
App({
  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    this.globalData = {
      logined: false,
      job_number: '',
      phonenumber: '',
      pwd: '',
      md5pwd: ''
    }
    try {
      const status = wx.getStorageSync('logined');
      if (status)
        this.globalData = {
          logined: wx.getStorageSync('logined'),
          job_number: wx.getStorageSync('job_number'),
          phonenumber: wx.getStorageSync('phonenumber'),
          md5pwd: wx.getStorageSync('md5pwd')
        }
    } catch (e) {

    }
  }
})
