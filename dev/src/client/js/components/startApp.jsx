var React = require('react');
var Router = require('react-router');

var startApp = function(drive, views){
    var App = require('./app/app.jsx')(drive, views);
    var routes = require('./app/routes.jsx')(App);
    Router.run(routes, function (Handler) {
        console.log(Handler);
        console.log(routes);
        React.render(<Handler />, document.getElementById('app-mount'));
    });
};

module.exports = startApp;