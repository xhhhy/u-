// pages/user/enroll/myenroll/myenroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'tab1',
    current_scroll: 'tab1',
    options:[{
      name:"普工",
      price:"5000~6000",
      office:"深圳富士康有限公司",
      state:true,
      msg:"待通知",
      time:"2019/10/01 14:52"
    },
      {
        name: "普工",
        price: "5000~6000",
        office: "深圳富士康有限公司",
        state: false,
        msg: "申请失败",
        time: "2019/10/01 14:52"
      }
    ],
    options1: [{
      name: "普工",
      price: "5000~6000",
      office: "深圳富士康有限公司",
      state: true,
      msg: "面试成功",
      time: "2019/10/01 14:52",
      id:0
    },
    {
      name: "普工",
      price: "5000~6000",
      office: "深圳富士康有限公司",
      state: false,
      msg: "进行面试",
      time: "2019/10/01 14:52",
      id: 1
    },
      {
        name: "普工",
        price: "5000~6000",
        office: "深圳富士康有限公司",
        state: false,
        msg: "面试失败",
        time: "2019/10/01 14:52",
        id: 2
      },
      {
        name: "普工",
        price: "5000~6000",
        office: "深圳富士康有限公司",
        state: false,
        msg: "面试失约",
        time: "2019/10/01 14:52",
        id: 3
      }

    ]
    
    },
  handleChange({ detail }) {
    this.setData({
      current: detail.key,
      show: detail.key
    });
  },
  tomyorder(){
    wx.navigateTo({
      url: './myorderlist/myorderlist',
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