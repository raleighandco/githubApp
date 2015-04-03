//IFFE Function, don't pollute the global namespace
(function(){

angular.module('githubApp', [
  'ui.bootstrap',
  'ui.utils',
  'ui.router',
  'ngAnimate',
  'form',
  'home'
]);

angular.module('githubApp')
  .config(function($stateProvider, $urlRouterProvider) {
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');
});

angular.module('githubApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

}());
