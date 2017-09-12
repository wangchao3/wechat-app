Page({
    data: {
        motto: 'Hello World',
        userInfo: {}
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: ''
        });
    },

    onLoad: function (e) {
        console.log(e);
    }
})
