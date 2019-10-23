// pages/list/list.js
const util = require('../../utils/util.js')

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
      current: 'tab1',
      current_scroll: 'tab1',
    privateMessage: [],
    publicMessage:[]

  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key,
      show: detail.key
    });
  },
  prevateContent(e){
    console.log(e)
    wx.setStorageSync("prevateMsg", this.data.privateMessage[e.currentTarget.id - 0])

    wx.navigateTo({
      url: './prevateContent/prevateContent',
    })
  },
  levelcontent(e){
    wx.setStorageSync("publicMsg", this.data.publicMessage[e.currentTarget.id-0]  )
      wx.navigateTo({
        url: './contentmsg/contentmsg',
      })
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that =this
    util.request({
      url: util.baseUrl +"/user_weichat.php/Message/listPublicMessage",
      method: 'GET',
      success: function (res) {
        res.data.map(item => {
          let newtime = util.formatTime(item.publish_time)
          item.time = newtime
        })
        that.setData({
          publicMessage: res.data
        })
        
      }
    })
    util.request({
      url: util.baseUrl + "/user_weichat.php/Message/listPrivateMessage",
      method: 'GET',
      success: function (res) {
        res.data.map(item=>{
          let newtime = util.formatTime(item.publish_time)
          item.time = newtime
        })
        that.setData({
          privateMessage: res.data
        })

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