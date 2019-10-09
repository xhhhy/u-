// pages/user/mune/myu/money/money.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: [{ u: "100", price: "1" }, { u: "5000", price: "50" }, { u: "10000", price: "100" }, { u: "30000", price: "300" }],
  },
  changColor(e) {
    this.setData({
      key: e.target.dataset.index
    })
  },
  submit(){
    wx.navigateTo({
      url: '../myusuccess/myusuccess',
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