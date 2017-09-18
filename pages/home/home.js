var util = require('../../utils/util.js');
var app = getApp();

Page({
    data: {
        userInfo: {},
    },

    bindViewTap: function() {
        wx.navigateTo({
            url: '',
        });
    },

    onLoad: function () {
        console.log('onLoad');
        var that = this;
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
            console.log(userInfo);
            that.setData({
                userInfo: userInfo,
            });
        });
    }
})
