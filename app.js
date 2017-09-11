//app.js
App({
    onLaunch: function () {
        console.log('程序启动');
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
    },

    getUserInfo:function(cb){
        var that = this;
        if(this.globalData.userInfo){
            console.log('111');
            typeof cb == "function" && cb(this.globalData.userInfo);
        }else{
            //调用登录接口
            console.log('222');
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            console.log(res);
                            that.globalData.userInfo = res.userInfo;
                            typeof cb == "function" && cb(that.globalData.userInfo);
                        }
                    });
                }
            });
        }
    },

    globalData:{
        userInfo: null
    },

    onShow: function() {
        console.log('程序启动完成');
        console.log(this.globalData);
    },

    onHide: function() {
        console.log('程序进入后台运行');
    }
})
