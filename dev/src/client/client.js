const $ = window.$;
var config = require('./../../assets/js/config.js');
const drive = require('./js/driveAccess/drive')(config, $);
drive.init(function(views){
    require('./js/components/startApp.jsx')(drive, views);
});