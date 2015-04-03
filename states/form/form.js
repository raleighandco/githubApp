(function() {
  angular.module('form', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

  angular.module('form')
  .config(function($stateProvider) {
    $stateProvider
    /* Add New States Above */
    .state('form', {
      url: '/form',
      templateUrl: 'states/form/form.html',
      controller: 'Form'
    })
  })
  .controller('Form', ['$scope', function($scope) {
    $scope.getGitHubInfo = function() {
      $scope.userNotFound = false;
    }
    $scope.test = "This is a form controller test!";

  }]);
}());
