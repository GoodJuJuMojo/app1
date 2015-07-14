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
    //$urlProvider.otherwise('/');
    $urlProvider.otherwise('/calendar2');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    console.log('...just above FastClick in run()');
    //console.log($scope)
    FastClick.attach(document.body);
    //console.log(document.body);
  }

// Custom app code
angular.module('application').value('loggedIn', 'true');

// Home Controller
angular.module('application').controller('HomeController', HomeController);
HomeController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn'];
function HomeController($scope, $stateParams, $state, $controller, loggedIn) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn
    })
  );
    console.log('...in HomeController...');
    $scope.editMode = true;


    $scope.Home = function(home){
      var response = {};
      console.log('...in Home...', test);
      $scope.showstatus = 'zzzzzzz';
    
    };
 }

// Login Controller
angular.module('application').controller('LoginController', LoginController);
LoginController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn'];
function LoginController($scope, $stateParams, $state, $controller, loggedIn) {
  angular.extend(this, $controller('DefaultController', {
      $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn
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

// Register Controller
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

// Calendar Controller 1
angular.module('application').controller('Calendar1Controller', Calendar1Controller);
Calendar1Controller.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function Calendar1Controller($scope, $stateParams, $state, $controller) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state
    })
  );

    $scope.editMode = false;

    // $('#calendar').fullCalendar({

    // });

    $scope.Calendar1 = function(Calendar1){
      var response = {};
      console.log('...in Calendar1...', Calendar1);
      $scope.showstatus = 'zzzzzzz';
    
    };
 }

// Calendar Controller 2
angular.module('application').controller('Calendar2Controller', Calendar2Controller);
Calendar2Controller.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function Calendar2Controller($scope, $stateParams, $state, $controller) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state
    })
  );

    $scope.editMode = false;
    $scope.today=(moment().format("D"));
    console.log($scope.today);

    var records = [
      {
        day: "Mon",
        dom: "06",
        pupils: [{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
        messages:[{"c":"b", "i":"BB", "m":"message about"},{"c":"c", "i":"CB", "m":"message about"}]
      },
      {
        day: "Tue",
        dom: "07",
        pupils: [],
        messages:[]
      },
      {
        day: "Wed",
        dom: "08",
        pupils: [{"c":"c", "i":"CB"}],
        messages:[{"c":"c", "i":"CB", "m":"message about"}]
      },
      {
        day: "Thu",
        dom: "09",
        pupils: [],
        messages:[]
      },
      {
        day: "Fri",
        dom: "10",
        pupils: [{"c":"a", "i":"AB"},{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
        messages:[{"c":"a", "i":"AB", "m":"message about"}, {"c":"b", "i":"BB", "m":"message about"}, {"c":"c", "i":"CB", "m":"message about"}]
      },
      {
        day: "Sat",
        dom: "11",
        pupils: [],
        messages:[]
      },
      {
        day: "Sun",
        dom: "12",
        pupils: [],
        messages:[]
      },
      {
        day: "Mon",
        dom: "13",
        pupils: [{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
        messages:[{"c":"b", "i":"BB", "m":"message about"}, {"c":"c", "i":"CB", "m":"message about"}]
      },
      {
        day: "Tue",
        dom: "14",
        pupils: [{"c":"a", "i":"AB"},{"c":"b", "i":"BB"}],
        messages:[{"c":"a", "i":"AB", "m":"message about"}, {"c":"b", "i":"BB", "m":"message about"}]
      },
      {
        day: "Wed",
        dom: "15",
        pupils: [{"c":"c", "i":"CB"}],
        messages:[{"c":"c", "i":"CB", "m":"message about"}]
      },
      {
        day: "Thu",
        dom: "16",
        pupils: [],
        messages:[]
      },
      {
        day: "Fri",
        dom: "17",
        pupils: [{"c":"b", "i":"BB"}],
        messages:[{"c":"b", "i":"BB", "m":"message about"}]
      },
      {
        day: "Sat",
        dom: "18",
        pupils: [],
        messages:[]
      },{
        day: "Sun",
        dom: "19",
        pupils: [],
        messages:[]
      },
      {
        day: "Mon",
        dom: "20",
        pupils: [{"c":"c", "i":"CB"}],
        messages:[{"c":"c", "i":"CB", "m":"message about"}]
      },
      {
        day: "Tue",
        dom: "21",
        pupils: [],
        messages:[]
      },
      {
        day: "Wed",
        dom: "22",
        pupils: [{"c":"c", "i":"CB"}],
        messages:[{"c":"c", "i":"CB", "m":"message about"}]
      },
      {
        day: "Thu",
        dom: "23",
        pupils: [{"c":"a", "i":"AB"},{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
        messages:[{"c":"a", "i":"AB", "m":"message about"}, {"c":"b", "i":"BB", "m":"message about"}, {"c":"c", "i":"CB", "m":"message about"}]
      },
      {
        day: "Fri",
        dom: "24",
        pupils: [{"c":"b", "i":"BB"}],
        messages:[{"c":"b", "i":"BB", "m":"message about"}]
      },
      {
        day: "Sat",
        dom: "25",
        pupils: [],
        messages:[]
      },{
        day: "Sun",
        dom: "26",
        pupils: [],
        messages:[]
      }

    ];

    var recordsPrev = records.slice(0, 5);
    var recordsCurr = records.slice(7, 12);
    var recordsNext = records.slice(14, 19);
    var recordsPrevWeek = records.slice(0, 7);
    var recordsCurrWeek = records.slice(7, 14);
    var recordsNextWeek = records.slice(14, 21);

    console.log($scope.recordsCurr);

    $scope.records = recordsCurr;
    $scope.weekA = recordsCurrWeek;
    $scope.weekB = recordsNextWeek;
    $scope.showPrev = "y";
    $scope.showCurr = "y";
    $scope.showNext = "y";
    

 
    

    $scope.Calendar2 = function(Calendar2){
      console.log('prev=',recordsPrev);
      $scope.records = recordsPrev;
      var response = {};
      var now = moment();
      console.log('...in Calendar2...', Calendar2);
      // console.log($scope.records["2015-08-17"][0]["message"]);
      $scope.showstatus = 'zzzzzzz';
      // console.log('date=', moment().date());
      // console.log(moment(now).format("ddd"));
      // console.log(moment(now).daysInMonth());  //no. days in month
      // var dim = moment(now).daysInMonth();
      // console.log('dim=', dim);
      //console.log('d:', moment().weekday(moment().day()));
      console.log('d:', moment().format("D"));
      var monthDays = [];
      // for (var i = 0; i <= dim - 1; i++) {
      //   monthDays[i] =  (i + 1);
      // };

      //console.log(monthDays[dim -1]);
      var dayRecords = {};
      // for (var i = 0; i <= dim -1; i++) {
      //   monthDays['dow'] = {
      //     'day': i
      //   };
      // }
      //console.log(toString(dayRecords.dow));
    
    };

    $scope.prevWeek = function() {
      console.log('...in prevWeek...');
      $scope.showPrev = "";
      $scope.showCurr = "y";
      $scope.showNext = "y";
      $scope.records = recordsPrev;
      $scope.weekA = recordsPrevWeek;
      $scope.weekB = recordsCurrWeek;
    };

    $scope.currWeek = function() {
      console.log('...in currWeek...');
      $scope.showPrev = "y";
      $scope.showCurr = "y";
      $scope.showNext = "y";
      $scope.records = recordsCurr;
      $scope.weekA = recordsCurrWeek;
      $scope.weekB = recordsNextWeek;
    };

    $scope.nextWeek = function() {
      console.log('...in nextWeek...');
      $scope.showPrev = "y";
      $scope.showCurr = "y";
      $scope.showNext = "";
      $scope.records = recordsNext;
      $scope.weekA = recordsCurrWeek;
      $scope.weekB = recordsNextWeek;
    };

 }

// Settings Controller
angular.module('application').controller('SettingsController', SettingsController);
SettingsController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function SettingsController($scope, $stateParams, $state, $controller) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state
    })
  );

    $scope.editMode = false;
    
    

    $scope.Settings = function(Settings3){
      var response = {};
      console.log('...in Settings...', Settings3);
      $scope.showstatus = 'zzzzzzz';
    
    };
 }

// Test Controller
angular.module('application').controller('TestController', TestController);
TestController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn'];
function TestController($scope, $stateParams, $state, $controller, loggedIn) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn
    })
  );

    $scope.editMode = false;

    $scope.Test = function(test){
      var response = {};
      loggedIn = 'new value';
      console.log('...in Test...', test, loggedIn);
      $scope.showstatus = 'zzzzzzz';
    
    };
 }

})();
