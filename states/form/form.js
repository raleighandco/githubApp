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
    });
  })
  .controller('Form', ['$scope', '$http', function($scope, $http) {
    $scope.test = "This is a form controller test!";
    $scope.GetGitHubInfo = function() {
      $scope.userNotFound = false;
      $scope.loaded = false;

      $http.get("https://api.github.com/users/" + $scope.username)
        .success(function (data) {
          if (data.name == "") data.name = data.login;
          $scope.user = data;
          $scope.loaded = true;
        })
        .error(function () {
          $scope.userNotFound = true;
        });
      $http.get("https://api.github.com/users/" + $scope.username + "/repos")
        .success(function (data) {
            $scope.repos = data;
            $scope.reposFound = data.length > 0;
        });
    }
  }]);
}());
