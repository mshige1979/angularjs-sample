/**
 * Created by matsumotoshigeharu on 2014/06/28.
 */
(function(){
    var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

    app.config(function($routeProvider, $locationProvider){

            $routeProvider.when('/', {
                templateUrl: "template/main.htm",
                controller: MainController

            }).when('/page1', {
                templateUrl: "template/page1.htm",
                controller: Page1Controller

            }).when('/page2', {
                templateUrl: "template/page2.htm",
                controller: Page2Controller

            }).when('/page2/:name', {
                templateUrl: "template/page2.htm",
                controller: Page2Controller

            }).otherwise({
                redirectTo: '/'
            });

            ;

        }
    );

    app.config(function($locationProvider){
        $locationProvider.html5Mode(true);
    });

    // controller
    app.controller('MainController', ['$scope', function($scope){

    }]);

    function MainController($scope){
        $scope.data = "aaaaaaaa";
    }

    function Page1Controller($scope){
        $scope.data = "bbbbbbbb";
    }

    function Page2Controller($scope){
        $scope.data = "cccccccc";
    }

})();
