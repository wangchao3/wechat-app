var util = require('../../utils/util.js')

Page({
    data: {
        info: {},
    },

    onLoad: function (e) {
        this.getData(e.id);
    },

    getData: function(projectId) {
        let detail_api = 'https://m.iafclub.com/jrrest/investments/'+projectId;
        let that = this;
        util.getData(detail_api).then(function(res) {
            console.log(res.data.content);
            that.setData({
                info: res.data.content,
            });
        });
    }
})
