(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

// Custom app code
// Custom controller

angular.module('application').controller('LoginController', LoginController);
LoginController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function LoginController($scope, $stateParams, $state, $controller) {

    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

    // localStorage.removeItem("saved_tasks");
    // localStorage.removeItem("all_tags");

    // $scope.editMode = false;

    // $scope.showstatus = 'incomplete';

    // $scope.showtag = {};

    // $scope.tasks = JSON.parse(localStorage.getItem("saved_tasks"));
    // if (typeof $scope.tasks === 'undefined' || $scope.tasks === null){
    //   $scope.tasks = [];
    // }

    // $scope.allTags = JSON.parse(localStorage.getItem("all_tags"));
    // if (typeof $scope.allTags === 'undefined' || $scope.allTags === null){
    //   $scope.allTags = [];
    // }

    $scope.Login = function(username, password, code){
      var response = {};
      console.log('...in Login...', response);
      $scope.showstatus = '';
      console.log('u:',username, 'p:',password, 's.u',$scope.username);
      if ($scope.username !== 'aaa') {
        $scope.showstatus = 'Invalid Username ';
      }
      if ($scope.password !== 'bbb') {
        $scope.showstatus += ' Invalid Password';
      }
      // response.title = title;
      // response.body = body;
      // response.status = '';
      // response.color = '';
      // // Combine all task tag arrays into allTags array
      // $scope.allTags = $scope.allTags.concat(task.tags);

      // // Strip duplicate tags
      // $scope.allTags = $scope.allTags.filter(function(element, index) {
      //   return $scope.allTags.indexOf(element) == index;
      // }); 

      // // Set unique ID from current timestamp
      // task.id = Date.now();

      // $scope.tasks.push(task);

      // localStorage.setItem("all_tags", JSON.stringify($scope.allTags));
      // localStorage.setItem("saved_tasks", JSON.stringify($scope.tasks));
    };
 }

angular.module('application').controller('TestController', TestController);
TestController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function TestController($scope, $stateParams, $state, $controller) {

    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

    // localStorage.removeItem("saved_tasks");
    // localStorage.removeItem("all_tags");

    $scope.editMode = false;

    $scope.Test = function(test){
      var response = {};
      console.log('...in Test...', test);
      $scope.showstatus = 'zzzzzzz';
    
    };
 }

})();
