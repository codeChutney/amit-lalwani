var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = function (drive, views, route) {
    return React.createClass({
        render: function(){
            return( <RouteHandler /> );
        }
    });
};

module.exports = App;