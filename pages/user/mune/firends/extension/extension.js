// pages/user/mune/firends/extension/extension.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"/static/image/back.jpg"
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
  //downloadImg(filePath) {

  downloadImg(){
    let filePath = this.data.img
      wx.saveImageToPhotosAlbum({
        filePath: filePath,  // 此为图片路径
        success: (res) => {
          console.log(res)
          this.showToast('保存成功！')
        },
        fail: (err) => {
          console.log(err)
          this.showToast('保存失败')
        }
      })
    },

    // 微信提示方法
    showToast(title){
      wx.showToast({
        title: title
      });
    },

    // 点击保存图片到相册(授权)
    saveImageToPhotos(filePath) {
      let self = this
      // 相册授权
      wx.getSetting({
        success(res) {
          // 进行授权检测，未授权则进行弹层授权
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success() {
                self.saveImage(filePath)
              },
              // 拒绝授权时，则进入手机设置页面，可进行授权设置
              fail() {
                wx.openSetting({
                  success: function (data) {
                    console.log("openSetting success");
                  },
                  fail: function (data) {
                    console.log("openSetting fail");
                  }
                });
              }
            })
          } else {
            // 已授权则直接进行保存图片
            self.saveImage(filePath)
          }
        },
        fail(res) {
          console.log(res);
        }
      })
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