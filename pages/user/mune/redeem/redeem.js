// pages/user/mune/redeem/redeem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    current_scroll: 'tab1',
    uidlist: [{
      name: '爱奇艺视频会员（1个月)',
      image: "/static/image/图层 18.png",
      uj: "20.00 "
    }, {
      name: '爱奇艺视频会员（1个月)',
      image: "/static/image/图层 18.png",
      uj: "20.00 "
    }, {
      name: '爱奇艺视频会员（1个月)',
      image: "/static/image/图层 18.png",
      uj: "20.00 "
    }, {
      name: '爱奇艺视频会员（1个月)',
      image: "/static/image/图层 18.png",
      uj: "20.00 "
    }],
    visible: false,

  },
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key,
    });
  },
  ubuy(e) {
    this.setData({
      visible: true
    });
    console.log(e)
    console.log("积分兑换")
  },
  handleClose() {
    console.log("cancel")
    this.setData({
      visible: false
    });
  },
  handleok() {
    console.log("ok")
    this.setData({
      visible: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})