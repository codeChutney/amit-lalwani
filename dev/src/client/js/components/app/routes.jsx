var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;

var Home = require('./../pages/home.jsx');
var Article = require("./../pages/article.jsx");
var Category = require("./../pages/category.jsx");

var Routes = function(App){
    return(
        <Route name="app" path="/" handler={App}>
            <Route name="home" path="home" handler={Home}/>
            <Route name="article" path='article' handler={Article}/>
            <Route name="category" path="category" handler={Category}/>
            <DefaultRoute handler={Home}/>
        </Route>
    );
};

module.exports = Routes;