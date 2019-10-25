// pages/test/test.js
const util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    title:"点击发送",
    verify:new Number()
  },

  formSubmit(e){
      console.log(e)
  },
   changetitle(){
     this.changenum()
   },
   changenum(){
     let num = 3
      let myVar = setInterval(() => {
       if (num == 0) {
         this.setData({
           title: "重新发送"
         })
         clearInterval(myVar)
        return false
       } else {
        // num--
         this.setData({
           title: num--+'后重新发送'
         })
       }
     }, 1000)
   },
  changeVerify(){
    this.verification()
  },

  verification(){
    let that = this
    util.request(
      {
        url: util.baseUrl + "/user_weichat.php/Verify/getVerify",
        method: "GET",
        success: function (res) {
          console.log(res)
          if (res.data.status == 200) {
            console.log(res.data.verify)
            console.log(res)
            that.setData({
              verify: res.data.verify
            })
          }
        }
      }
    )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.verification()
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