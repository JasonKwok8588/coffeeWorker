//引入模块
var Http = require('http');
// 实例化server对象
var server = Http.createServer();
// rquest事件句柄
var requsetHandle = function(req, res) {
        // console.log("有请求进来了");

        let data = {
            bannerArr: {
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
        };
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(JSON.stringify(data));
    }
    // 给server对象绑定事件
server.on('request', requsetHandle);
server.listen(8888, () => {
    console.log("server running at 8888");
})