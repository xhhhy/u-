// pages/user/enroll/myenroll/myenroll.js
const util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    current_scroll: 'tab1',
    option:[],
    
    },
  handleChange({ detail }) {
    this.setData({
      current: detail.key,
      show: detail.key
    });
  },
  tomyorder(e){
    console.log(e)
     wx.navigateTo({
       url: './myorderlist/myorderlist?id='+e.currentTarget.id,
     })
  },
  tomyview(e) {
    wx.setStorageSync("usercontent", this.data.option[e.currentTarget.id])
    wx.navigateTo({
      url: '/pages/user/enroll/myview/myview',
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
        wx.getStorage({
          key: 'tab',
          success: function(res) {
            console.log(res.data)
            that.setData({
              current:res.data
            })
            if(res.data=="tab2"){
              wx.setNavigationBarTitle({
                title:"我的面试"
              })
            }
          },
        })

        util.request({
          url: util.baseUrl +"/user_weichat.php/Position/listPositionApply",
          method: 'GET',
          success: function (res) {
            that.setData({
              option: res.data
            })
            console.log()
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