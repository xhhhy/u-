// pages/user/mune/firends/firends.js
import util from "../../../../utils/util.js"

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
    grandson:new Number(),
    son: new Number(),
    uid: new Number(),

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
    let that= this
    util.request({
      url: util.baseUrl+"/user_weichat.php/Friend/friend",
      methods:"GET",
      success(res){
        console.log(res)
        if (res.data.status==200){
          console.log(res.data.data)
          that.setData({
            grandson: res.data.data.grandson_qty,
            son: res.data.data.son_qty,
            uid: res.data.data.uid
          })
        }
      }
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
    return {
      path: '/pages/user/mune/firends/firends?uid=' + this.data.uid,
      success: function (res) {
        console.log(path)
      }
    }
  }
})