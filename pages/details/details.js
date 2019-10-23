// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    busines:{}
  },

  gototijiao(e) {
    wx.navigateTo({
      url: "../tijiao/tijiao",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

    let business = wx.getStorageSync('business')
    // console.log(0)
    // console.log(business)

    this.setData({
      busines: business
    })
    //console.log(this.data.busines)
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
  onShareAppMessage: function (e) {
    let uid = wx.getStorageSync('uid')
    return{
      path: '/pages/details/details?userId=' + uid,
      success: function (res) {
        console.log(path)
      }
    }
      
  }
  
})