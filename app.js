const config = require('./config.js');
App({
  globalData: {
    userInfo: null,
    encryptedData: '',
    iv: '',
    userAuthorization: ''
  },
  //启动
  onLaunch: function () {
    this.getUserInfo()
  },
  //获取用户信息
  getUserInfo: function () {
    var that = this
    wx.getSetting({
      success(res) {
        //判断用户是否已授权获取用户信息
        if (res.authSetting['scope.userInfo']) {
          //已授权,可以直接获取用户信息不用弹框
          that.userAuthCb();
        } else {
          wx.redirectTo({
            url: '/pages/authorizetip/authorizetip',
          })
        }
      }
    })
  },
  userAuthCb: function () {
    let that = this;
    let baseUrl = config.default.getBaseUrl;
    wx.showLoading({
      title: '加载中',
    })
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        that.globalData.userInfo = res.userInfo;
        that.globalData.rawData = res.rawData;   //zaj add
        that.globalData.encryptedData = res.encryptedData;
        that.globalData.iv = res.iv;
        if (res.encryptedData && res.iv) {
          wx.login({
            success: function (res) {
              if (res.code) {
                //将用户基本信息回传给服务器，并获取assess_token
                wx.request({
                  url: "http://recruit-local.com/user_weichat.php/signWeichat/login",
                  method: 'POST',
                  data: {
                    code: res.code,
                    rawData: that.globalData.rawData,
                    userInfo: that.globalData.userInfo
                  },
                  header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  success: function (res) {
                    //  let currentPagesLen = getCurrentPages().length;
                      //console.log(currentPagesLen)
                    if (res.data.status==200) {
                      wx.setStorageSync('token', res.data.token);
                      wx.setStorageSync('openid', res.data.openid);
                      wx.setStorageSync('uid', res.data.uid);
                      wx.setStorageSync('userimg', that.globalData.userInfo.avatarUrl);

                    //  wx.setStorageSync('authorization', "Bearer " + authorizationValue);
                    //  that.globalData.userAuthorization = "Bearer " + authorizationValue;
                      //判断是否有页面优先生成，如果生成则重新加载一次
                      // if (currentPagesLen !== 0) {
                        wx.hideLoading();
                        // getCurrentPages()[currentPagesLen - 1].onLoad()
                      // }
                      } else {
                      console.log('身份验证失败')
                      wx.hideLoading();
                    }
                  }
                })
              }
            }
          })
        }
      }
    })
  }
})