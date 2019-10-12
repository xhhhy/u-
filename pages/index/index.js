const util = require('../../utils/util.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    nomsg:true,
    imgUrls: ["/static/image/8.png", "/static/image/3.png", "/static/image/8.png"],
    indicatorDots:true,
    indicatorColor:"#fff",
    index: 0,
    multiArray: [['深圳市', '河北市'], ['职位', '职位1', '职位2', ]],
    multiIndex: [0,  0],
    option:[]
  },
  //事件处理函数

  //职位选择
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },


  godetails(e){
    console.log()
    wx.setStorageSync("business", this.data.option[e.target.id])
   

    wx.navigateTo({
      url: '../details/details',
    })
  },
  search(){
    console.log(util.request)
    util.request({
      url: util.baseUrl+"/testPost.php",
      data:{a:123,b:123},
      method: 'POST',
      success: function (res) {
        console.log(res)
      }
    })
  },
  onLoad: function () {
    let that = this
    util.request({
      url: "http://recruit-local.com/index_weichat.php",
      method: 'GET',
      success: function (res) {
        that.setData({
          option: res.data
        })
        console.log(that.data.option)
        if (that.data.option==[]){
          that.setData({
            nomsg: false
          })

        }
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
