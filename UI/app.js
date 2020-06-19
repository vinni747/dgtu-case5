'use strict';
var ipAdress;
var serverUrlIndex = 0;
setIpAddress();
function setIpAddress() {
    if(serverUrlIndex == 0) ipAdress = "http://168.63.61.94:8080";
    //local
    if(serverUrlIndex == 1) ipAdress = "http://localhost:8080";
};

var myApp = angular.module('myApp',
    ['ngRoute', 'ui.bootstrap','ui.select', 'myApp.services', 'myApp.confirmationModal',
        'myApp.infoModal',  'myApp.users' , 'myApp.mainPage'  ]
);

myApp.config(function($routeProvider) {
    /*$httpProvider.defaults.withCredentials = true;*/
 
    /*var UserResolve = {
        authorizeCheck: function(userService) {
            return userService.resolveCheck();
        }
    };*/

    $routeProvider
        .otherwise({redirectTo: '/main'})
        .when('/users', {
            templateUrl: 'users/users.html',
            controller: 'UsersCtrl',
        })
        .when('/main', {
            templateUrl: 'mainPage/mainPage.html',
            controller: 'MainPageCtrl',
        })

});

myApp.controller('UserCtrl', function($scope) { //это контроллер , он ставится в шаблоне html ng-controller="UserCtrl" - и отвечает за видимость внутри вложенных dom элементов старницы

    $scope.openDD = function(selectedTab){
        $('#'+selectedTab+'Li .dropdown-menu').css({'display':'unset'});
        $('#'+selectedTab+'Li .dropdown-menu').show(0);
        $('.dropdown:hover .dropdown-menu').slideDown(0);
    };

    $scope.closeDropDown = function(){
        $('.dropdown-menu').slideUp(0);
    }

    $scope.setSelectedTabInTab = function(value){
        //$scope.selectedTabChoise = true;
        $scope.selectedTabInTab = value;
        $scope.openDropDowns = false;
        $('.dropdown-menu').stop().slideUp(0);
        closeNavButton();
    };

    $scope.closeNavButton = function() {
        closeNavButton();
    };

    function closeNavButton() {
        var navButton = $('#navButton');
        if (navButton && navButton[0] && navButton[0].offsetParent) {
            $('#navButton').click();
        };
    };

    $scope.getCurrentYear = function(){
        return new Date().getFullYear();
    }

});

myApp.filter('notNull', function(){
    return function(input){
        if (input && input.search('null')!=-1)
        {
            input = input.replace('null', '');
        }
        return input;
    }
});

