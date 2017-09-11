var util = require('../../utils/util.js')

Page({
    data: {
        imgUrls: [
            'https://m.iafclub.com/uploadfile/2017/0822/20170822050840429.jpg',
            'https://m.iafclub.com/uploadfile/2017/0519/20170519045136927.jpg'
        ],
        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        item: {},
        array: ['美国', '中国', '巴西', '日本'],
        date: '2016-09-01',
        time: '12:01',
        region: ['广东省', '广州市', '海珠区'],
        customItem: '全部',
    },

    onLoad: function () {
        console.log('onLoad')
        this.getData();
    },

    getData: function(){
        let list_api = 'https://m.iafclub.com/jrrest/investments?pageNo=1&pageSize=1&homePageFlag=1';
        let that = this;
        util.getData(list_api).then(function(res) {
            that.setData({
                item: res.data.content.array[0],
            })
        });
    },

    gotoDetail: function(e){
        console.log(e);
        wx.navigateTo({
            url: '../detail/detail?id='+e.currentTarget.dataset.id
        })
    },

    bindTimeChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            time: e.detail.value
        })
    },

    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            region: e.detail.value
        })
    }
});
