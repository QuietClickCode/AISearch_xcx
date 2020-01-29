// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    test: "",
  },
  show: function () {
    this.setData({
      test: "测试页面"
    })
  },
  search: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    wx.request({
      url: 'https://www.myznsh.com/searchcsdn?wd=%E7%88%B1%E6%83%85',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: {
        keyword: "你好"
      },
      success(res) {
        var _res = res;
        wx.navigateTo({
          url: '../detail/detail',
          
          success: function(res) {
            // 通过eventChannel向被打开页面传送数据
            
            res.eventChannel.emit('acceptDataFromOpenerPage', _res.data.data.list)
          }
        })
        // console.log(res)
        // console.log(res.data.data.list[0].content);

      }
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.show();
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