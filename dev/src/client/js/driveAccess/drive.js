var contentUtils = require('./../../../utils/utils').content;
var noop = function(){};

var Drive = function(config){
    return {
        callJsonP: function(url, callback){
            callback = callback || noop;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'jsonp',
                success: function (res, status) {
                    callback(res);
                },
                error: function (res, status, error) {
                    console.log(error);
                }
            });
        },
        getSpreadsheet: function(fileID, callback){
            callback = callback || noop;
            var self = this;
            var sheetUrl = 
                "https://spreadsheets.google.com/feeds/list/" + fileID + "/od6/public/values?alt=json";
            self.callJsonP(sheetUrl, callback);   
        },
        getViews: function(cb_getViews){
            var self = this;
            cb_getViews = cb_getViews || noop;
            self.getSpreadsheet(config.dashboardId, function(json){
                cb_getViews(contentUtils.extractViews
                            (contentUtils.getPosts(json)));
            });
        },
        init: function(cb_init){
            console.log('------START Drive INIT()---------');
            var self = this;
            cb_init = cb_init || noop;
            self.getViews( function (views){
               cb_init(views);     
            });
            console.log('------END Drive INIT()---------');
        }
    }
};

module.exports = Drive;