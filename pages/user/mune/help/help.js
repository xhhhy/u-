// pages/user/mune/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    problemlist: [{ title: "问题1", content: "说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说  明说明说明说明说明说明说明说明说明说", ishide: true }, { title: "问题2", content: "说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说  明说明说明说明说明说明说明说明说明说", ishide: true }, { title: "问题3", content: "说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说  明说明说明说明说明说明说明说明说明说", ishide: true }]
  },
ishidemsg(e){
    console.log(e)
  let id = e.currentTarget.id - 0
  let newdata = this.data.problemlist
  newdata[id].ishide = !newdata[id].ishide
  this.setData({
    problemlist:newdata
  })
},
  toproblem(){
    wx.navigateTo({
      url: './problem/problem',
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