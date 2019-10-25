// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    ads: "/static/image/23.png",
    mune: [{
      image: "/static/image/6.png",
      name: "我的报名",
      address: "myenroll"

    }, {
      image: "/static/image/lnk.png",
      name: "我的面试",
        address: "myview"

    }, {
      image: "/static/image/职位岗位.png",
      name: "我的入职",
      address: "myorder"

    }, {
      image: "/static/image/招聘录用.png",
      name: "职位信息",
      address: "mymassage"

    }],
    options: [{
      image: "/static/image/444.png",
      name: "U积分兑换",
      address:"redeem"
    }, {
        image: "/static/image/提现 (1).png",
        name: "我的U积分",
        address: "myu"

    }, {
        image: "/static/image/邀请.png",
        name: "邀请好友",
        address: "firends"

    }, {
        image: "/static/image/任务.png",
        name: "我的任务",
        address: "mytask"

    }, {
        image: "/static/image/快捷入口_常见问题.png",
      name: "帮助中心",
        address: "help"

    }, {
        image: "/static/image/客服.png",
        name: "联系我们",
        address: "callme"

    }, {
        image: "/static/image/emi.png",
        name: "关于我们",
        address: "about"

    }],
  },
    remune(e){
      let navaddress = `./mune/${e.currentTarget.id}/${e.currentTarget.id}`
      wx.navigateTo({
        url: navaddress,
      })
    },
    reenroll(e) {
      let tab="tab1"
      let navaddress = `./enroll/${e.currentTarget.id}/${e.currentTarget.id}`
      if (e.currentTarget.id =="myview"){
        wx.setStorage({ key: 'tab',data: 'tab2',})
          wx.navigateTo({
            url: `./enroll/myenroll/myenroll`,
       })
      }else{
        wx.setStorage({ key: 'tab', data: 'tab1', })
         wx.navigateTo({
         url: navaddress,
         })
      }
      // let navaddress = `./enroll/${e.currentTarget.id}/${e.currentTarget.id}`
      console.log(e.currentTarget.id)

      


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let userinfo = wx.getStorageSync("userinfo")
        this.setData({
          userinfo: userinfo
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})