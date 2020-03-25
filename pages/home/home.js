// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    banner:{
      topBan: [
        "/images/banner/baner1.jpg",
        "/images/banner/baner2.jpg",
        "/images/banner/baner3.jpg",
        "/images/banner/baner4.jpg",
      ],
      centerBan: ["/images/banner/ban1.jpg",
        "/images/banner/ban2.jpg",
        "/images/banner/ban3.jpg",
        "/images/banner/ban4.jpg",
        "/images/banner/ban5.jpg",
      ]
    },
    setTopBanner:{
      indicatorDots: false,
      vertical: false,
      autoplay: true,
      interval: 2000,
      circular:true,
      num:0,
    },
    setCenBanner: {
      indicatorDots: true,
      vertical: true,
      autoplay: true,
      interval: 2000,
      circular: true,
      indColor: "#333999",
    },
    storyArr: {
      items0: {
        src: "/images/home/card01.jpg",
        text: '给特别的你'
      },
      items1: {
        src: "/images/home/card02.jpg",
        text: '我想对你说'
      },
      items2: {
        src: "/images/home/card03.jpg",
        text: '勇敢爱'
      },
      items3: {
        src: "/images/home/card04.jpg",
        text: '一个人的精彩'
      },
      items4: {
        src: "/images/home/card05.jpg",
        text: '萌萌哒'
      },
      items5: {
        src: "/images/home/card06.jpg",
        text: '友谊万岁'
      },
      items6: {
        src: "/images/home/card07.jpg",
        text: '恋人未满'
      },
      items7: {
        src: "/images/home/card08.jpg",
        text: '生日快乐'
      }
    },
    goodArr: {
      items1: {
        src: "/images/home/newPro1.jpg",
        text: '卡布奇诺'
      },
      items2: {
        src: "/images/home/newPro2.jpg",
        text: '白咖啡'
      },
      items3: {
        src: "/images/home/newPro3.jpg",
        text: '摩卡咖啡'
      },
      items4: {
        src: "/images/home/newPro4.jpg",
        text: '爱尔兰咖啡'
      },
      items5: {
        src: "/images/home/newPro5.jpg",
        text: '甜品咖啡'
      },
      items6: {
        src: "/images/home/newPro6.jpg",
        text: '意大利咖啡'
      },
      items7: {
        src: "/images/home/newPro7.jpg",
        text: '拿铁咖啡'
      },
      items8: {
        src: "/images/home/newPro8.jpg",
        text: '中式咖啡'
      }
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let that = this;
    // wx:wx.request({
    //   url: 'http://localhost:8888/',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {
    //     console.log(res)
    //     // that.setData({ banner: res.data.bannerArr });
    //     that.setData({ storyArr: res.data.storyArr });
    //     that.setData({ goodArr: res.data.goodArr});
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  },
  changeHandle(e){
    // console.log(e.detail)
    let index = "setTopBanner.num"
    this.setData({
      [index]:e.detail.current
    })
  }
 
})