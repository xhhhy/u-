const util = require('../../utils/util.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    nomsg:false,
    imgUrls: ["/static/image/8.png", "/static/image/3.png", "/static/image/8.png"],
    indicatorDots:true,
    indicatorColor:"#fff",
    index: 0,
    multiArray: [[],[]],
    multiIndex: [0,  0],
    option:[],
    options:[]
  },
  //事件处理函数

  //职位选择
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
    let region = this.data.multiArray[0][e.detail.value[0]]
    let possion= this.data.multiArray[1][e.detail.value[1]]
    //console.log(region, possion)
    let searchOption = this.data.options
    let newoption = []
    if (e.detail.value[0]==0 && e.detail.value[1]==0){
      newoption = searchOption
     // console.log(newoption)
    }
    else if (e.detail.value[0] == 0) {
    searchOption.map(list=>{
      if (list.position == possion) {
          newoption.push(list)
        }
      })
    }
    else if (e.detail.value[1] == 0) {
      searchOption.map(list => {
        if (list.region == region) {
          newoption.push(list)
        }
      })
    }
    else{
      searchOption.map(list => {
        if (region == list.region && list.position == possion) {
          newoption.push(list)
        }
      })
    }
    if (newoption.length !== 0) {
      this.setData({
        nomsg: false,
        option: newoption
      })
    } else {
      this.setData({
        nomsg: true,
        option: newoption
      })
    }
  },
  godetails(e){
    //console.log(e)
    wx.setStorageSync("business", this.data.option[e.currentTarget.id-0])
    wx.navigateTo({
      url: '../details/details',
    })
  },
  search(){

  },

//城市去重
  unique(arr) {
    const res = new Map();
    return arr.filter((a) => !res.has(a) && res.set(a, 1))
  },
  onLoad: function () {
   
    let that = this
    util.request({
      url: util.baseUrl+"/index_weichat.php",
      method: 'GET',
      success: function (res) {
        let cityOption = [["所有城市"], ['所有职位']]
        res.data.map(list=>{
          cityOption[0].push(list.region)
          cityOption[1].push(list.position)
        })
        cityOption[0] =  that.unique(cityOption[0])
        cityOption[1]=  that.unique(cityOption[1])
        that.setData({
          option: res.data,
          options:res.data,
          multiArray: cityOption
        })
        //console.log(that.data.option)
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
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
