// pages/user/enroll/myview/myview.js
const util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    busines:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    // let that = this
    // util.request({
    //   url: 'http://recruit-local.com/index_weichat.php/Index/detail?id=' + options.id,
    //   success: res => {
    //     console.log(res.data)
    //     that.setData({
    //       busines: res.data
    //     })
    //   }
    // })
    let busines = wx.getStorageSync("usercontent")
    console.log(busines)
      this.setData({
        busines: busines
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