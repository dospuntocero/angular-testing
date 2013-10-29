'use strict';
//app definition
var app = angular.module('meridianApp', ['ngRoute','ngAnimate']);

//routes
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
          .when('/', {
                templateUrl: 'views/main.html',
          })
          .when('/wines', {
                templateUrl: 'views/wines.html',
                controller: 'WinesCtrl',
                animation: 'scale-fade-in'
          })
          .when('/wines/:wineId', {
                templateUrl: 'views/wine-detail.html',
                controller: 'WineDetailCtrl',
                animation: 'slide-left'
          })
          .when('/winemaker', {
              templateUrl: 'views/winemaker.html',
              animation: 'slide-right'
          })
          .when('/recipes', {
              templateUrl: 'views/recipes.html',
              controller: 'RecipesCtrl',
              animation: 'flip-in'
          })
          .when('/recipes/:recipeId', {
              templateUrl: 'views/recipe-detail.html',
              controller: 'RecipesDetailCtrl',
              animation: 'bouncy-slide-left'
          })
          .when('/buy', {
              templateUrl: 'views/buy.html'
          })
          .otherwise({
                redirectTo: '/'
          });

       // $locationProvider.html5Mode(true);

    }]);

//jquery cycle
app.directive('cycle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).cycle({
                fx: 'fade',
                timeout: 3000
            });
        }
    };
});

app.controller('WinesCtrl', function ($scope,Wines) {
    $scope.wines = Wines;
});

app.controller('WineDetailCtrl',function ($scope,$routeParams, Wines) {
    $scope.wine = Wines[$routeParams.wineId];

});


app.controller('RecipesCtrl', function ($scope, Recipes) {
    $scope.recipes = Recipes;
});

app.controller('RecipesDetailCtrl',function ($scope,$routeParams, Recipes) {
    $scope.recipe = Recipes[$routeParams.recipeId];
    $scope.custom= true;
    $scope.$on("$routeChangeSuccess",animateLists($scope));
    //$scope.$on('$viewContentLoaded', function () { ... })
});

function animateLists($scope) {

    setTimeout(function(){
        $('#animate').trigger('click');
        //must be something like this.... but not a fucking clue on how to fix this.
        $('.animate.animate-first > *').addClass('slide-right');
    },700);
}
