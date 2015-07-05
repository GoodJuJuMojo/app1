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
  angular.extend(this, $controller('DefaultController', {
      $scope: $scope, $stateParams: $stateParams, $state: $state
      })
  );
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

  };
}

angular.module('application').controller('RegisterController', RegisterController);
RegisterController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function RegisterController($scope, $stateParams, $state, $controller) {
  angular.extend(this, $controller('DefaultController', {
      $scope: $scope, $stateParams: $stateParams, $state: $state
      })
  );
  $scope.Register = function(username, password, code){
    var response = {};
    console.log('...in Register...', response);
    $scope.showstatus = '';
    console.log('u:',username, 'p:',password, 's.u',$scope.username);
    if ($scope.username !== 'aaa') {
      $scope.showstatus = 'Invalid Username ';
    }
    if ($scope.password !== 'bbb') {
      $scope.showstatus += ' Invalid Password';
    }

  };
}

angular.module('application').controller('TestController', TestController);
TestController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function TestController($scope, $stateParams, $state, $controller) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state
    })
  );

    $scope.editMode = false;

    $scope.Test = function(test){
      var response = {};
      console.log('...in Test...', test);
      $scope.showstatus = 'zzzzzzz';
    
    };
 }

})();
