// pages/lssue/lssue.js
const util = require('../../utils/util.js')
const { $Toast } = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:"/static/image/11.png",
    region: ['', '', ''],
    customItem: '',
    value:""
  },
  formSubmit(e){
    console.log(e.detail.value.business)
    let formdata = e.detail.value
        if (e.detail.value.business == "") {
          $Toast({
            content: '企业名称不能为空',
            type: 'warning'
          });
          return
        }
    if (e.detail.value.region == "") {
          $Toast({
            content: '请选择企业区域',
            type: 'warning'
          });
          return
        }
    if (e.detail.value.contact == "") {
          $Toast({
            content: '企业联系人不能为空',
            type: 'warning'
          });
          return
        }
    if (e.detail.value.telephone == "") {
          $Toast({
            content: '手机号不能为空',
            type: 'warning'
          });
          return
        }
    let token = wx.getStorageSync('token');
    let openid = wx.getStorageSync('openid');
    let uid = wx.getStorageSync('uid');
        util.request({
          url: util.baseUrl + "/user_weichat.php/Recruitment/addRecruitment",
          hearder:{
            "Content-Type": "application/x-www-form-urlencoded",
            'token': token,
            'uid': uid,
            'openid': openid
          },
          data: e.detail.value ,
          method: 'POST',
          success: function (res) {
            console.log(res)
              wx.navigateTo({
                url: './lssuesuccess/lssuesuccess',
              })
          }
        })
     
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  //重置表单
  formReset: function (e) {
    this.setData({
      value:""
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
  onReady: function (e) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.formReset()


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