// pages/user/mune/mytask/mytask.js
import util from "../../../../utils/util.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      options: []
  },
  receive(e){
    let that =this
    console.log(e)
    if (e.currentTarget.dataset.ismsg!==true){
      wx.showToast({
        title: '未完成或已领取',
        icon:"none"
      })
    }else{
      let token = wx.getStorageSync('token');
      let openid = wx.getStorageSync('openid');
      let uid = wx.getStorageSync('uid');
      let userid = e.currentTarget.id
      util.request({
        url: util.baseUrl + "/user_weichat.php/Assignment/receive",
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'token': token,
          'uid': uid,
          'openid': openid
        },
        data: { id: userid},
        method: 'POST',
        success: function (res) {
          console.log(res)
          if (res.data.status==200){
            wx.showToast({
              title: '领取成功',
              icon: "success"
            })
            let newOptions = that.data.options.filter(item => {
              console.log(item.assignment_id)
              console.log(userid)
              return item.assignment_id !== userid - 0
            })
            console.log(newOptions)
            that.setData({
              options: newOptions
            })
          }
          wx.showToast({
            title: res.data.msg,
            icon:"none"
          })
        
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this 
      util.request({
        url: util.baseUrl+ "/user_weichat.php/Assignment/listAssignment",
        method :"GET",
        success(res){
          console.log(res)
          if(res.data.status==200){
            let newdata = res.data.data
            newdata.map(item=>{
              if (item.user_finish >=item.need){
                item.message="领取"
                item.state = true
              }
              else{
                item.message = "未完成"
                item.state = false
              }
              if (item.user_finish_time!==null) {
                item.message = "已领取"
                item.state = false
              }
            })
            that.setData({
              options: newdata
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