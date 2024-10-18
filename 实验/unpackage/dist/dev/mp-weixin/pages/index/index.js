// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '我是test里面的标题',
    n: 12,
    m: 22,
    age: 23,
    f1:23.34,
    arr: [12, 2, 3],
    userInfo: {
      id: 12,
      username: 'andy',
      age: 23
    },
    list: [{
        id: 1,
        username: 'mark',
        age: 23
      },
      {
        id: 2,
        username: 'lining',
        age: 12
      },
    ]
  },
  toParseint(val){
    return parseInt(val);
  },
  tapHandler() {
    console.log('tapHandler');
    // wx.showToast({
    //   title: '提示信息',
    //   icon: 'loading',
    //   duration: 1000,
      
    // })
    this.setData(
      {
        age:this.data.age+1,
      }
    )
    console.log('this.data.age 改前',this.data.age);


    console.log('this.data.age 修改后',this.data.age);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})