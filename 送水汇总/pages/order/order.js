// pages/order/order.js
const app = getApp()
var finishBtn = false//首先对按钮进行设定，现在为 灰色“已完成”
var noFinishBtn = true//     蓝色“未完成”
var ifFinish = true  //将带有 “确认”的列表 nofinishArray[] 展示出来
var totalNumber = 0
var noFinishArray = []
var testArray = []
var finishArray = []
var userArray = []
var tt = true  //表示现在进入的事管理者界面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifFinish: true,//与上面的全局变量设置几乎一样
    finishBtn: false,
    noFinishBtn: true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mode: ["自提", "送水上门"],//获得的GET只有0、1、2、3..我们用数组进行转化
    state: ["未付款", "未接受", "未完成", "已完成"],
    taskTime: "   12-05 16:30",
    taskNumber: "5308",
    totalNumber: noFinishArray.length,//说明刚进入时候进入的是  蓝色“未完成"带有“确认”按钮的界面
    finishArray: [],
    noFinishArray: [],
    tt:0,//这里是用于设置是管理者还是用户，两个的界面呈现是不一样的。进入 app.js中的最下方会看到globalData里的设置，（isUser: "1",//0买水者，1送水者）
  },


  //点击已完成页面   
  finish: function () {

    let that = this

    if (finishBtn == true) {  //如果已经呈现出  蓝色“已完成”界面，就说明已经GET成功请求，不需要再动了
    }
    else {   
      wx.request({
        method: "GET",
        url: "http://192.168.1.17:3014/order/all", 
        data: {
          "status": "3"
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          finishArray = res.data.data
          that.setData({
            finishArray: finishArray,//配置列表
            totalNumber: finishArray.length,
          })
        }
      })

      this.setData({
        noFinishBtn: false,//变成   灰色“未完成”
        finishBtn: true,   //变成   蓝色“已完成”
        ifFinish: false,   //呈现的列表为  finishArray[]

      })
    }
  },

noFinish: function () {//大概过程同上面这个按钮点击
    if (noFinishBtn != true) {
    }
    else {


      this.setData({
        noFinishBtn: true,
        finishBtn: false,
        ifFinish: true,
        totalNumber: noFinishArray.length,//这里注意 ，一开始的totalnumber 表示设置为noFinishArray数组的length，所以这里需要重新setData

      })
    }
  },
  btnCofirm: function (e) {  //这里是获得实时id的方法！！！并在这里点击“确认”的时候，进行POST
    let that = this
    var id = e.currentTarget.dataset.id
    // console.log(id)
    wx.request({
      url: "http://192.168.1.17:3014/order/update",
      method: "POST",
      data: {
        "order_id": id,
        "status": "3"
      },
      header: {
        'Content-Type': 'application/json' // 默认值
      },
      success: function (res) {

        // console.log("success")
        wx.request({
          method: "GET",
          url: "http://192.168.1.17:3014/order/all", //仅为示例，并非真实的接口地址
          data: {
            "status": "2"
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            noFinishArray = res.data.data
            that.setData({
              noFinishArray: noFinishArray,
              totalNumber: noFinishArray.length,
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    tt = app.globalData.isUser
    let that = this
    if (tt == "1") {//如果是送水者
      wx.request({
        method: "GET",
        url: "http://192.168.1.17:3014/order/all", //仅为示例，并非真实的接口地址
        data: {
          "status": "2"
        },
        success: function (res) {
          noFinishArray = res.data.data
          that.setData({
            noFinishArray: noFinishArray,
            totalNumber: noFinishArray.length,
          })
        }
      })
    }
    else {//如果是用户
      // console.log("testr")
      var userid = app.globalData.userId//isuser判断的是不是用户，userid判断的是是那一个具体的用户
      wx.request({
        method: "GET",//GET请求获得userid
        url: "http://192.168.1.17:3014/order/mine",
        data: {
          "id": userid
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          userArray = res.data.data

          that.setData({
            userArray: userArray,//初始化用户界面的列表
            totalNumber: userArray.length,
          })
        }
      })
    }
  }
})