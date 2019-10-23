// pages/tijiao/tijiao.js
const util = require('../../utils/util.js')
const { $Toast } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value5:"",
    business_id:"",
    array: ['男', '女'],
    array1: ['1997', '1998'],
    key:0,
    index: 0, 
    index1:0,
    date: ["2014/01/01", "2014/02/02", "2014/03/01", "2014/03/01"],
  },
  
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })
  },
  changColor(e){
    this.setData({
      key: e.target.dataset.index
    })
  },


  formSubmit(e){
    if (e.detail.value.realname  == null) {
      $Toast({
        content: '姓名不能为空',
        type: 'warning'
      });
      return
    }

    if (e.detail.value.telephone == null) {
      $Toast({
        content: '手机号不能为空',
        type: 'warning'
      });
      return
    } 
    console.log(e)
    let token = wx.getStorageSync('token');
    let openid = wx.getStorageSync('openid');
    let uid = wx.getStorageSync('uid');
    let data = e.detail.value
    data.id = this.data.business_id
    data.gender = this.data.array[this.data.index]
    data.age = this.data.array1[this.data.index1]
    data.interview_time = this.data.date[this.data.key]
    data.uid = uid
    util.request({
      url: util.baseUrl + "/user_weichat.php/Position/apply",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': token,
        'uid': uid,
        'openid': openid
      },
      data: data,
      method: 'POST',
      success: function (res) {
        if (res.statusCode==200){
          console.log(res)
          wx.redirectTo({
            url: './success/success',
          })
        }
        console.log(res)
      }
    })
    // wx.redirectTo({
    //   url: './success/success',
    // })
  },


  handleFruitChange({ detail = {} }) {
    this.setData({
      current: detail.value
    });
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
    let business_id = wx.getStorageSync('business').business_id
    this.setData({
      business_id: business_id
    })
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