var app = getApp()
// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
        id: "0",
        c_name: '人气Top',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 11,
            goodsName: '拿铁',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '桃桃芝士红宝石茶',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 13,
            goodsName: '咖啡风味安慕希',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 18,
            goodsName: '石拿铁',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 14,
            goodsName: '黑拿铁',
          },
          {
            id: 6,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '江滨人拿铁',
          },
          {
            id: 7,
            url: '/images/menu/1-1.jpg',
            price: 17,
            goodsName: '嬷嬷茶拿铁',
          },

        ]
      },
      {
        id: "1",
        c_name: '大师咖啡',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '冲绳黑糖拿铁',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 17,
            goodsName: '陨石拿铁',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '拿大铁',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 11,
            goodsName: '香草拿铁',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '焦糖拿铁',
          },
        ]
      },
      {
        id: "2",
        c_name: '小鹿茶精选',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '标准美式',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '加浓美式',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '焦糖标准美式',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 13,
            goodsName: '焦糖加浓美式',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 18,
            goodsName: '银河气泡美式',
          },
        ]
      },
      {
        id: "3",
        c_name: '瑞纳冰',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 17,
            goodsName: '楽岛桃桃冰',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 18,
            goodsName: '巧克力瑞纳冰',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 19,
            goodsName: '抹茶瑞纳冰',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 18,
            goodsName: '卡布奇诺瑞纳冰',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '咖啡瑞纳冰',
          },
        ]
      },
      {
        id: "4",
        c_name: '鲜榨果蔬汁',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: 'NFC鲜榨橙汁',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 13,
            goodsName: 'NFC鲜榨西柚汁',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 14,
            goodsName: '猕猴桃复合果汁',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: 'NFC鲜榨蓝莓草莓混合果汁',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 11,
            goodsName: 'NFC鲜榨芒果汁',
          },
        ]
      },
      {
        id: "5",
        c_name: '经典饮品',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 11,
            goodsName: '巧克力',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 8,
            goodsName: '纯牛奶',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 8,
            goodsName: '巴黎水330ml',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 10,
            goodsName: '小红莓苏打水',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 16,
            goodsName: '苏打水',
          },
        ]
      },
      {
        id: "6",
        c_name: '健康轻食',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '京味烤鲜蔬卷',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '夏威夷火腿卷',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '火羊角',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '鸡卷',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '鸡肉卷',
          },
        ]
      },
      {
        id: "7",
        c_name: '干果零食',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '京味鲜蔬卷',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '菠萝火腿卷',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '火腿羊角',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 18,
            goodsName: '肉卷',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '北京鸡肉卷',
          },
        ]
      },
      {
        id: "8",
        c_name: '个人防护',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 14,
            goodsName: '鲜蔬卷',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '夏威夷菠萝卷',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '士羊角',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '手卷',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 18,
            goodsName: '北京肉卷',
          },
        ]
      }, {
        id: "9",
        c_name: '其他',
        list: [{
            id: 1,
            url: '/images/menu/1-1.jpg',
            price: 8,
            goodsName: '鸭鲜蔬卷',
          },
          {
            id: 2,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '威夷菠萝火腿卷',
          },
          {
            id: 3,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '火腿芝士羊',
          },
          {
            id: 4,
            url: '/images/menu/1-1.jpg',
            price: 12,
            goodsName: '手抄肉卷',
          },
          {
            id: 5,
            url: '/images/menu/1-1.jpg',
            price: 15,
            goodsName: '老鸡肉卷',
          },
        ]
      },
    ],
    menuBanArr: [
      "/images/banner/menubanner1.jpg",
      "/images/banner/menubanner2.jpg",
      "/images/banner/menubanner3.jpg"
    ],
    setBanner: {
      indicatorDots: false,
      vertical: false,
      autoplay: true,
      interval: 2000,
      circular: true,
      num: 0,
    },
    navInfoArr: [],
    idOp: 0,
    rightIdOp: '',
    leftScroll: null,
    shopNum: null,
    selectGoods: {},
    showShopCar: false,
    total: 0,

  },
  bannerHandle(e) {
    let num = "setBanner.num";
    this.setData({
      [num]: e.detail.current,
    })
  },
  // 左右聯動菜單
  rightHandle(e) {
    // console.log(this.data.navInfoArr)
    const navOpArr = this.data.navInfoArr;
    const scrollH = e.detail.scrollTop;
    // 判断滚动条高度 获取到达的菜单位置
    let index = 0;
    for (let i = 0; i < navOpArr.length; i++) {
      index = (scrollH > 0 && scrollH <= navOpArr[0]) ? 0 : index;
      index = (navOpArr[i - 1] < scrollH && scrollH < navOpArr[i]) ? i : index;
    }
    // 设置菜单位置
    this.setData({
      idOp: index,
      leftScroll: index * 80
    });
  },
  leftHandle(e) {
    // console.log(e.currentTarget.dataset.id)
    this.setData({
      idOp: e.currentTarget.dataset.i,
      rightIdOp: e.currentTarget.dataset.id
    })

  },
  // 获取元素高度属性
  getElesHeight(arr) {
    let num = 0
    return arr.map(item => num = item.top);
  },
  getdoosNums(obj) {
    // console.log(obj.num)
    obj.num = obj.num ? obj.num + 1 : 1;
    return obj;
  },
  // 设置购物车数量
  setShopNum(obj) {
    let num = 0;
    let totPric = 0;
    for (let i in obj) {
      num += obj[i].num;
      totPric += obj[i].num * obj[i].price;
    }

    this.setData({
      shopNum: num,
      total: totPric
    })

  },
  // 购物车显示
  shopCarHandle() {


    this.setData({
      showShopCar: true,
    })

  },
  // 购物车关闭

  closeShopCar() {
    this.setData({
      showShopCar: false,
    })
  },
  // 清空购物车
  clearShopCar() {
    app.globalData.selectGoods = {}
    this.setData({
      selectGoods: app.selectGoods,
      shopNum: 0,
      total: 0,
    })
  },
  // 设置选中商品
  setGoodsNumHandle(e) {
    const {
      selectGoods
    } = app.globalData;

    //  获取商品信息 商品一级分类 商品详细信息 按钮动作
    const {
      goods,
      progoods,
      act,
    } = e.currentTarget.dataset

    // 获取基础信息 -> 设置选中商品数据 ->更新购物车信息

    //  设置商品名: 一级分类拼接商品id为键名
    // const dataName = `selectGoods.${progoods}${goods.id}`; //这是字符串

    // 获取当前选中商品的信息
    const paramObj = selectGoods[progoods + '' + goods.id] || goods;

    // 根据动作获取 设置商品信息 和数量

    act == "++" ?
      app.globalData.selectGoods[progoods + '' + goods.id] = this.getdoosNums(paramObj) :
      app.globalData.selectGoods[progoods + '' + goods.id].num -= 1;

    this.setData({
      selectGoods: app.globalData.selectGoods
    })

    /*
      this.setData({
        [dataName]: this.getdoosNums(paramObj)
      }) :
      this.setData({
        [dataName + ".num"]: paramObj.num - 1
      });
      */
    // 
    this.setShopNum(app.globalData.selectGoods)

  },
  shopCarDotHandle(e) {
    const {
      selectGoods
    } = this.data
    const {
      goodsid,
      act
    } = e.detail;
    // const dataName = `selectGoods.${goodsid}`

    act == "++" ?
      app.globalData.selectGoods[goodsid + ''] = this.getdoosNums(selectGoods[goodsid + '']) :
      app.globalData.selectGoods[goodsid + ''].num -= 1;

    this.setData({
      selectGoods: app.globalData.selectGoods
    })

    this.setShopNum(this.data.selectGoods)
    if (app.globalData.selectGoods[goodsid + ''].num == 0) {
      delete app.globalData.selectGoods[goodsid + ''];
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    // 创建选择器
    const query = wx.createSelectorQuery();
    // 选中菜单右侧所有盒子，获取高度位置信息
    const eleRes = query.selectAll('.right-box').boundingClientRect()
    eleRes.exec(res => {
      that.setData({
        navInfoArr: this.getElesHeight(res[0])
      })
    })
  },
  onShow() {
    this.setData({
      selectGoods: app.globalData.selectGoods,
      showShopCar:false
    });
    this.setShopNum(app.globalData.selectGoods)
  }
})