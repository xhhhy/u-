// pages/user/mune/firends/firends.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible:true,
    contents: '这是可以复制的文字,粘贴后即可看到效果',
    actions4: [
      {
        name: '',
        icon: 'close'
      }
    ],
  },
  handleOpen() {
    this.setData({
      visible: false
    });
  },
  estension(e){
      console.log()
      wx.navigateTo({
        url: './extension/extension',
      })
  },
  copyText: function (e) {
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },
  handleClose(){
    this.setData({
      visible: true
    });
  },
  
  mypeople(){
    wx.navigateTo({
      url: './myfirends/myfirends',
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