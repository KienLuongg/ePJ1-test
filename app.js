var app = angular.module('myApps',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/congnghe', {
            templateUrl: 'Technology.html',
            controller: 'TechController'
        })
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/sanpham', {
            templateUrl: 'product.html',
            controller: 'ProductController'
        })
        .when('/aboutus', {
            templateUrl: 'about_us.html',
            controller: 'AboutUsController'
        })
        .when('/contactus', {
            templateUrl: 'contact_us.html',
            controller: 'ContactUsController'
        })
        .when('/hotro', {
            templateUrl: 'support.html',
            controller: 'SupportController'
        })
        .when('/chinhsach', {
            templateUrl: 'Policy.html',
            controller: 'PolicyController'
        })
        .when('/gallery', {
            templateUrl: 'gallery.html',
            controller: 'GalleryController'
        })

        .otherwise({redirectTo: '/'});
});