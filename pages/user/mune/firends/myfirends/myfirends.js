// pages/user/mune/firends/myfirends/myfirends.js
import util from "../../../../../utils/util.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    peoplelist: [{ id: 1, image: "/static/image/图层 27 拷贝 3.png", name: "123", phone: "123555****13", num: 0 }, { id: 2, image: "/static/image/图层 27 拷贝 3.png", name: "123", phone: "123555****13", num: 3 }, { id: 3, image: "/static/image/图层 27 拷贝 3.png", name: "123", phone: "123555****13", num: 3 }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that =this
    util.request({
      url:util.baseUrl+"/user_weichat.php/Friend/listSon",
      method:"GET",
      success(res){
        if(res.data.status==200){
          console.log(res.data.data)
          that.setData({
            data: res.data.data
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

  }
})