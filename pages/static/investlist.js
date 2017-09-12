var util = require('../../utils/util.js')

Page({
    data: {
        info: {},
    },

    onLoad: function (e) {
        console.log(e);
        this.getData(e.id);
    },

    getData: function(projectId) {
        let detail_api = 'https://m.iafclub.com/jrrest/investments/'+projectId;
        let that = this;
        util.getData(detail_api).then(function(res) {
            console.log(res.data.content);
            res.data.content.userInvestmentList.map((item, index) => {
                res.data.content.userInvestmentList[index].investTime = util.formatAllTime(res.data.content.userInvestmentList[index].investTime);
                res.data.content.userInvestmentList[index].investAmt = res.data.content.userInvestmentList[index].investAmt/100;
            });
            that.setData({
                info: res.data.content,
            });
        });
    }
})
