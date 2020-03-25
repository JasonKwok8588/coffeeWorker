var app = getApp()
// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedArr: [],
    selectGoods: {},
    total: 0,
    allSelect:false,
  },
  getdoosNums(obj) {
    obj.num = obj.num ? obj.num + 1 : 1;
    return obj;
  },
  setPrice(obj) {
    let num = 0;
    let totPric = 0;
    for (let i in obj) {
      num += obj[i].num;
      totPric += obj[i].num * obj[i].price;
    }

    this.setData({
      total: totPric
    })

  },
  setGoodsNumHandle(e) {
    const {
      selectGoods
    } = this.data;


    const {
      goods,
      progoods,
      act,
    } = e.currentTarget.dataset



    const paramObj = selectGoods[progoods + ''] || goods;


    act == "++" ?
      selectGoods[progoods + ''] = this.getdoosNums(paramObj) :
      selectGoods[progoods + ''].num -= 1;

    if (selectGoods[progoods + ''].num == 0){
      delete selectGoods[progoods + ''];
    }

    app.globalData.selectGoods = selectGoods;
    this.setData({selectGoods: selectGoods})


    this.setPrice(selectGoods)

  },
  checkHandle(e) {
    // 获取已选中菜单 对象的信息
    const {selectGoods} = this.data;
    // 获取当前选中商品id
    let checkedArr = e.detail.value;

  // 设置菜单 选中状态
    //初始化选中状态
    for(let i in selectGoods){
      selectGoods[i].checked = false;
    }

    checkedArr.map(key => {
      selectGoods[key].checked = true;
    })

    this.setData({
      
      allSelect:false
    })
  },

  delGoods() {
    const {
      selectGoods,
    
    } = this.data
    
    
  for(let i in selectGoods){

    selectGoods[i].checked ? delete selectGoods[i] : false;
  
  }

    app.globalData.selectGoods = selectGoods;
    this.setPrice(selectGoods);
    this.setData({
      selectGoods: selectGoods,
      allSelect:false
    });

  },
  checkAll() {


    const { selectGoods,allSelect} = this.data;
    // 遍历对象设置状态
    for (let i in selectGoods) {
      selectGoods[i].checked = allSelect ? false: true ;
    }

    this.setData({
      selectGoods,
      allSelect: !allSelect
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      selectGoods: app.globalData.selectGoods
    })
    this.setPrice(app.globalData.selectGoods);
    
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