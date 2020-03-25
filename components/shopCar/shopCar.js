// components/shopCar/shopCar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showCar: Boolean,
    shopNum: Number,
    goodsArr: Object,
    total:Number,
  },

  /**
   * 组件的初始数据
   */
  data: { },

  methods: {
    shopCarHandle() {
      this.triggerEvent("openshopcar")
    },
    closeShopCar() {
      this.triggerEvent("closeShopCar")
    },
    shopCarPlusHandle(e) {
      
      const {
        goodsid,
        act
      } = e.currentTarget.dataset
      this.triggerEvent("shopcarplusnum", {
        goodsid,
        act
      })
    },
    shopCarCutHandle(e) {
      const {
        goodsid
      } = e.currentTarget.dataset
      this.triggerEvent("shopcarcutnum", {
        goodsid
      })
    },

    clearShopCar(){
      console.log(123456)
      this.triggerEvent("clearShopCar")
    },
    payShopCar() {
      console.log(123456)
      wx.switchTab({
        url: '/pages/order/order',
      })
    },
  }
})