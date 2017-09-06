var util = require('../../utils/util.js')

Page({
    data: {
        navTab: ["散标投资", "债权转让"],
        currentNavtab: "0",
        items: [],
        count: 1
    },

    //事件处理函数
    gotoDetail: function(e){
        console.log(e);
        wx.navigateTo({
          url: '../detail/detail?id='+e.currentTarget.dataset.id
        })
    },

    bind: function(event){
        wx.navigateTo({
            url: "pages/logs/logs"
        })
    },

    onLoad: function () {
        this.getData();
    },

    switchTab: function(e) {
        this.setData({
            currentNavtab: e.currentTarget.dataset.idx,
        });
        this.getData(e.currentTarget.dataset.idx, 1, 10);
    },

    getData: function(number, pageNo, pageSize) {
        let currPage = 1;
        if(pageNo) currPage = pageNo;
        let pageMany = 10;
        if(pageSize) pageMany = pageSize;
        let list_api = 'https://m.iafclub.com/jrrest/investments?pageNo='+currPage+'&pageSize='+pageMany;
        if (number === 1) {
            list_api = 'https://m.iafclub.com/jrrest/assignments?pageNo='+currPage+'&pageSize='+pageMany;
        }
        let that = this;
        util.getData(list_api).then(function(res) {
            that.setData({
                items: res.data.content.array ? res.data.content.array : res.data.content.assignmentList,
            })
        });
    },

    upper: function() {
        wx.showNavigationBarLoading()
        this.refresh();
        setTimeout(function() {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, 2000);
    },
    lower: function(e) {
        wx.showNavigationBarLoading();
        var that = this;
        setTimeout(function() {
            wx.hideNavigationBarLoading();
            that.nextLoad();
        }, 1000);
    },

    refresh: function() {
        wx.showToast({
            title: '刷新中',
            icon: 'loading',
            duration: 3000
        });
        this.setData({
            items: [],
        });
        this.getData(this.data.currentNavtab, 1, 10);
        setTimeout(function() {
            wx.showToast({
                title: '刷新成功',
                icon: 'success',
                duration: 2000
            })
        }, 3000)
    },

    nextLoad: function() {
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 4000
        });
        this.data.count++;
        this.getData(this.data.currentNavtab, this.data.count, 10);

        setTimeout(function() {
            wx.showToast({
                title: '加载成功',
                icon: 'success',
                duration: 2000
            })
        }, 3000);
    }
})
