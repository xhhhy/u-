import config from "../config.js"
const formatTime = format => {
  var date = new Date(format);

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const numberToFixed = n => {
  n = n.toFixed(2) * 100 + '%'
  return n
}

const baseUrl = "http://recruit-local.com" //获取接口URL

const app = getApp();

const request = (object) => {
  wx.showLoading({
    title: '加载中',
  })
  let token,
  uid,
  openid,
    header,
    _success = object.success,
    hasTokenOnStorage = true
  try {
    token = wx.getStorageSync('token');
    openid = wx.getStorageSync('openid');
    uid = wx.getStorageSync('uid');
  } catch (e) {
    hasTokenOnStorage = false
  }
  header = {
    "Content-Type": "application/json",
    'token': token,
    'uid':uid,
    'openid':openid
  }
  object.header = object.header || header
  object.success = res => {
    token = res.header.token || res.header.token
    token && wx.setStorageSync('token', token)
   // console.log("res.statusCode:::::" + res.statusCode)
    if (res.statusCode == 401 || res.statusCode == 400) {
      wx.showModal({
        content: '登录信息已过期，请重新授权',
        showCancel: false,
        confirmColor: '#7087f4',
        success: function (res) {
          if (res.confirm) {
            app.getUserInfo()
          }
        }
      })
    }
    wx.hideLoading();
    
   // console.log(res)

    _success && _success(res)
  }

  wx.request(object)
}

module.exports = {
  formatTime,
  baseUrl,
  numberToFixed,
  request
}