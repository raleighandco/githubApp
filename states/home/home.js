(function(){
  angular.module('home', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

  angular.module('home').config(function($stateProvider) {
    $stateProvider
    /* Add New States Above */
    .state('home', {
      url: '/home',
      templateUrl: '/states/home/home.html',
      controller: 'Home'
    });
  })
  .controller('Home', ['$scope', function($scope) {
    $scope.test = "This is the home test!";
  }]);
}());
