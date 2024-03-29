// pages/user/mune/myu/myu.js
import util from "../../../../utils/util.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        { time: "2019/12/15 12:00", name: "推荐奖励 （ 直系下属 ）", state: "审核中", money: "-50.00", color: true, nummoney:true},
        { time: "2019/12/15 12:00", name: "推荐奖励 （ 直系下属 ）", state: "审核中", money: "-50.00", color: true, nummoney: false },
        { time: "2019/12/15 12:00", name: "推荐奖励 （ 直系下属 ）", state: "审核中", money: "-50.00", color: false, nummoney: true },
      ],
    balance:new Number,

  },
  money(){
    wx.navigateTo({
      url: './money/money',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    util.request({
      url: util.baseUrl + "/user_weichat.php/Wallet/listWallet",
      method:"GET",
      success(res){
        console.log(res)
        if (res.statusCode==200){
          let balance = (res.data.balance - 0).toFixed(2)
          that.setData({
            balance: balance,
           // list: res.data.wallet
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