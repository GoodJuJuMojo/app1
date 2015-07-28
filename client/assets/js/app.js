/* app.js */

(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

    //CLNDR
    'tien.clndr'

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

//console.log(document.body.baseURI);
  }
/***********************************************************************/
/* Custom app code                                                     */


//console.log('...Custom app code');

// records service
angular.module('application')
  .value('recordz', ['x'])
  .service('recordService', function() {
    var recordData = [];
    this.setRecordData = function(data) {
      recordData = data;
    }
    this.getRecordData = function() {
      return recordData;
    }
  });

// account service
angular.module('application')
  
  .service('accountService', function() {
    var accountStatus = "";
    this.setAccountStatus = function(data) {
      accountStatus = data;
    }
    this.getAccountStatus = function() {
      return accountStatus;
    }
  });


// value
angular.module('application').value('loggedIn', 'xyz');

/* End Custom app code                                                 */
/***********************************************************************/


/***********************************************************************/
/* Head Controller                                                     */

angular.module('application').controller('HeadController', ['$rootScope', '$scope', '$timeout', '$stateParams', '$state', '$controller', 'loggedIn', 'accountService' ,
  function ($rootScope, $scope, $timeout, $stateParams, $state, $controller, loggedIn, accountService) {

    console.log('...in HeadController...');

    accountService.setAccountStatus("");

    // $scope.accountStatus = accountService.getAccountStatus();

    $rootScope.accountStatus = accountService.getAccountStatus();

    console.log('x...in HeadController...');

  }

]);

/* End Head Controller                                                 */
/***********************************************************************/



/***********************************************************************/
/* Home Controller                                                     */

angular.module('application').controller('HomeController', HomeController);
HomeController.$inject = ['$rootScope', '$scope', '$stateParams', '$state', '$controller', 'loggedIn', 'accountService'];
function HomeController($rootScope, $scope, $stateParams, $state, $controller, loggedIn, accountService) {
  angular.extend(this, $controller('DefaultController', {
    $rootScope: $rootScope, $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $accountService: accountService
    })
  );
    console.log('...in HomeController...');
    console.log('$scope: ', $scope);
    console.log('$rootScope: ', $rootScope);
    console.log(loggedIn);
    loggedIn = "abc";
    $scope.dj1 = loggedIn;
    $scope.editMode = true;
    console.log('account status:', accountService.getAccountStatus());
console.log(loggedIn);
$rootScope.roo == "rsrrsrs";

    $scope.Home = function(home){
      var response = {};
      console.log('...in Home...', test);
      $scope.showstatus = 'zzzzzzz';
    
    };
 }

/* End Home Controller                                                 */
/***********************************************************************/



/***********************************************************************/
/* Login Controller                                                    */

angular.module('application').controller('LoginController', LoginController);
LoginController.$inject = ['$rootScope', '$scope', '$timeout', '$stateParams', '$state', '$controller', 'loggedIn', 'accountService', 'recordService'];
function LoginController($rootScope, $scope, $timeout, $stateParams, $state, $controller, loggedIn, accountService, recordService) {
  angular.extend(this, $controller('DefaultController', {
      $rootScope: $rootScope, $scope: $scope, $timeout: $timeout, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $accountService: accountService, $recordService: recordService
      })
  );

console.log('...in LoginController...');
console.log('$stateParams:', $stateParams);
console.log('$state:', $state.$current.data.vars.name);
console.log('$controller:', $controller);
console.log('Logged In?:', loggedIn);


accountService.setAccountStatus('calendar');

if ($state.$current.data.vars.name == 'login') {
  console.log('yup');
  $scope.showIcons == 'zzzzzzzzzzzzzzzzzzzzz';
};

$scope.test = 'test';

  $scope.Login = function(username, password, code) {

    var response = {};
    
    console.log('...in Login...', response);
    console.log('login loggedIn:',  loggedIn);
    
    loggedIn = false;

    console.log('Logged In?:', loggedIn);
    
    $scope.showstatus = '';
    
    console.log('u:',username, 'p:',password, 's.u',$scope.username);
    
    if ($scope.username !== 'aaa') {
      $scope.showstatus = 'Invalid Username ';
    };

    if ($scope.password !== 'bbb') {
      $scope.showstatus += ' Invalid Password';
    };

  var serverRecordData = [
      
      
      {
        day: "Mon",
        dom: "20",
        pupils: [{"c":"c", "i":"CB"}],
        messages:[{"c":"c", "i":"CB", "m":"It’s that time of year again & we need your help. The school is running a fundraising day on the 8th of September. We’d love to see you all there  - Fun for all the family."}]
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
        messages:[{"c":"c", "i":"CB", "m":"School Clean Up Day - Notice to all parents - The school is having its annual spring clean day and we would love volunteers to help out on the day. Please reply with  details and availability"}]
      },
      {
        day: "Thu",
        dom: "23",
        pupils: [{"c":"a", "i":"AB"},{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
        messages:[{"c":"a", "i":"AB", "m":"Warning  - We have have a recent outbreak of headlice in our class recently. I would urge all parents to be vigilant and to read the material provided."}, {"c":"b", "i":"BB", "m":"Warning  - We have have a recent outbreak of headlice in our class recently. I would urge all parents to be vigilant and to read the material provided."}, {"c":"c", "i":"CB", "m":"message about"}]
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
      },
      {
        day: "Sun",
        dom: "26",
        pupils: [],
        messages:[]
      },
      {
        day: "Mon",
        dom: "27",
        pupils: [{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
        messages:[{"c":"b", "i":"BB", "m":"message about"},{"c":"c", "i":"CB", "m":"Field Trip  - Update - There has been a bad weather warning for next monday, so can all pupils be reminded to bring light rain gear in preparation."}]
      },
      {
        day: "Tue",
        dom: "28",
        pupils: [],
        messages:[]
      },
      {
        day: "Wed",
        dom: "29",
        pupils: [{"c":"c", "i":"CB"}],
        messages:[{"c":"c", "i":"CB", "m":"We are delighted to announce that Don Conroy will be making a special visit to the school next week to talk to the pupils about conservation. Each pupil will be taking part in a bird feeder project at home. Details to follow."}]
      },
      {
        day: "Thu",
        dom: "30",
        pupils: [],
        messages:[]
      },
      {
        day: "Fri",
        dom: "31",
        pupils: [{"c":"a", "i":"AB"},{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
        messages:[{"c":"a", "i":"AB", "m":"Healthy eating policy in effect. Can all parents please ensure that lunches contain healthy options."}, {"c":"b", "i":"BB", "m":""}, {"c":"c", "i":"CB", "m":"Hi, I have noticed some disruptive behaviour over the last few weeks and i’d like a chance to discuss it. "}]
      },
      {
        day: "Sat",
        dom: "01",
        pupils: [],
        messages:[]
      },
      {
        day: "Sun",
        dom: "02",
        pupils: [],
        messages:[]
      },
      {
        day: "Mon",
        dom: "03",
        pupils: [{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
        messages:[{"c":"b", "i":"BB", "m":"message about"}, {"c":"c", "i":"CB", "m":"Parent/Teacher meeting taking place on the 16th. Please confirm availability."}]
      },
      {
        day: "Tue",
        dom: "04",
        pupils: [{"c":"a", "i":"AB"},{"c":"b", "i":"BB"}],
        messages:[{"c":"a", "i":"AB", "m":"message about"}, {"c":"b", "i":"BB", "m":"message about"}]
      },
      {
        day: "Wed",
        dom: "05",
        pupils: [{"c":"c", "i":"CB"}],
        messages:[{"c":"c", "i":"CB", "m":"message about"}]
      },
      {
        day: "Thu",
        dom: "06",
        pupils: [],
        messages:[]
      },
      {
        day: "Fri",
        dom: "07",
        pupils: [{"c":"b", "i":"BB"}],
        messages:[{"c":"b", "i":"BB", "m":"message about"}]
      },
      {
        day: "Sat",
        dom: "08",
        pupils: [],
        messages:[]
      },{
        day: "Sun",
        dom: "09",
        pupils: [],
        messages:[]
      }

    ];
    
    recordService.setRecordData(serverRecordData); 
    accountService.setAccountStatus("y");
    $rootScope.accountStatus = accountService.getAccountStatus();

  };

  $scope.Register = function(name, username, password, confpassword) {
    
    console.log('...in LoginController.Register...');
    loggedIn = false;
    $state.go('calendar');  // test
  };


  $scope.Test = function(test) {
    console.log('in LoginController.Test()');     
  };

}

/* End Login Controller                                                */
/***********************************************************************/


/***********************************************************************/
/* Register Controller                                                 */

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

/* End Register Controller                                             */
/***********************************************************************/



/***********************************************************************/
/* Calendar Controller                                                 */

angular.module('application').controller('CalendarController', CalendarController);
CalendarController.$inject = ['$scope', '$rootScope', '$timeout', '$stateParams', '$state', '$controller', 'accountService', 'recordService'];
function CalendarController($scope, $rootScope, $timeout, $stateParams, $state, $controller, accountService, recordService) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $rootScope: $rootScope, $timeout: $timeout, $stateParams: $stateParams, $state: $state,  $accountService: accountService, $recordService: recordService
    })
  );
      
  $rootScope.accountStatus = accountService.getAccountStatus();

  $scope.accountStatus = accountService.getAccountStatus();

  console.log('...in CalendarController...');
  console.log($scope);
  console.log('s:', $scope.accountStatus);
  console.log('rs:', $rootScope.accountStatus);

  if(!$scope.accountStatus) {
    $state.go('home');
  }

  $scope.editMode = false;
  //$scope.today=(moment().format("D"));
  var now = new Date();
  $scope.today = now.getDate();
  console.log('$scope.today: ', $scope.today);

  var records = recordService.getRecordData();

  var recordsPrev = records.slice(0, 5);
  var recordsCurr = records.slice(7, 12);
  var recordsNext = records.slice(14, 19);
  var recordsPrevWeek = records.slice(0, 7);
  var recordsCurrWeek = records.slice(7, 14);
  var recordsNextWeek = records.slice(14, 21);

  console.log($scope.recordsCurr);

  $scope.records = recordsCurr;
  $scope.weekA = recordsPrevWeek;
  $scope.weekB = recordsCurrWeek;
  $scope.weekC = recordsNextWeek;
  $scope.disablePrev = "";
  $scope.disableCurr = "y";
  $scope.disableNext = "";
      

   
      

  $scope.Calendar = function(Calendar){
    console.log('prev=',recordsPrev);
    $scope.records = recordsPrev;

    var response = {};
    //var now = moment();
    console.log('...in Calendar...', Calendar);
    // console.log($scope.records["2015-08-17"][0]["message"]);
    $scope.showstatus = 'zzzzzzz';
    // console.log('date=', moment().date());
    // console.log(moment(now).format("ddd"));
    // console.log(moment(now).daysInMonth());  //no. days in month
    // var dim = moment(now).daysInMonth();
    // console.log('dim=', dim);
    //console.log('d:', moment().weekday(moment().day()));
    //console.log('moment:d:', moment().format("D"));
    
    var now = new Date();
    
    console.log('js:d:',now.getDate());

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
    $scope.disablePrev = "y";
    $scope.disableCurr = "";
    $scope.disableNext = "";
    $scope.records = recordsPrev;
    $scope.weekA = recordsPrevWeek;
    $scope.weekB = recordsCurrWeek;
    $scope.weekC = recordsNextWeek;
  };

  $scope.currWeek = function() {
    console.log('...in currWeek...');
    $scope.disablePrev = "";
    $scope.disableCurr = "y";
    $scope.disableNext = "";
    $scope.records = recordsCurr;
    $scope.weekA = recordsPrevWeek;
    $scope.weekB = recordsCurrWeek;
    $scope.weekC = recordsNextWeek;
  };

  $scope.nextWeek = function() {
    console.log('...in nextWeek...');
    $scope.disablePrev = "";
    $scope.disableCurr = "";
    $scope.disableNext = "y";
    $scope.records = recordsNext;
    $scope.weekA = recordsPrevWeek;
    $scope.weekB = recordsCurrWeek;
    $scope.weekC = recordsNextWeek;      
  };

}


/* End Calendar Controller                                             */
/***********************************************************************/


/***********************************************************************/
/* CalMonth Controller                                                 */

angular.module('application').controller('CalMonthController', CalMonthController);
CalMonthController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn' , 'recordService'];
function CalMonthController($scope, $stateParams, $state, $controller, loggedIn, recordService) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $recordService: recordService
    })
  );

  $scope.editMode = false;    

  $scope.options = {
    weekOffset: 1,
    daysOfTheWeek: ['S','M', 'T', 'W', 'T', 'F', 'S'],
    constraints: {
        startDate: moment().subtract(1, 'months').format('YYYY-MM-15'),
        endDate: moment().add(12, 'months').format('YYYY-MM-15')
    }
  };

  console.log(moment());


  $scope.events = [
      { date: "2015-07-20", name: "CB", title: "It’s that time of year again & we need your help. The school is running a fundraising day on the 8th of September. We’d love to see you all there - Fun for all the family."},
      { date: "2015-07-22", name: "CB", title: "School Clean Up Day - Notice to all parents - The school is having its annual spring clean day and we would love volunteers to help out on the day. Please reply with details and availability"},
      { date: "2015-07-23", name: "AB", title: "Warning - We have have a recent outbreak of headlice in our class recently. I would urge all parents to be vigilant and to read the material provided."},
      { date: "2015-07-23", name: "BB", title: "Warning - We have have a recent outbreak of headlice in our class recently. I would urge all parents to be vigilant and to read the material provided."},
      { date: "2015-07-27", name: "CB", title: "Field Trip - Update - There has been a bad weather warning for next monday, so can all pupils be reminded to bring light rain gear in preparation."},
      { date: "2015-07-29", name: "CB", title: "We are delighted to announce that Don Conroy will be making a special visit to the school next week to talk to the pupils about conservation. Each pupil will be taking part in a bird feeder project at home. Details to follow."},
      { date: "2015-07-31", name: "AB", title: "Healthy eating policy in effect. Can all parents please ensure that lunches contain healthy options."},
      { date: "2015-07-31", name: "CB", title: "Hi, I have noticed some disruptive behaviour over the last few weeks and i’d like a chance to discuss it."}
      // { date: moment().add(3, 'days').format(), title: "Happy days" },
      // { date: moment().subtract(5, 'days').format(), title: "Good old days" },
      // { date: moment().subtract(5, 'days').format(), title: "And some more" },
      
  ];

  $scope.showEvents = function(events) {
      alert(events.map(function(e) { return e.name + ":" + e.title }).join("\n"));
  };

  $scope.Test = function(test){
        console.log('in TestController loggedIn:', loggedIn );
        
        var response = {};
        loggedIn = 'new value';
        console.log('...in Test...', test, loggedIn);
        console.log(recordService.getRecordData());
        $scope.showstatus = 'zzzzzzz';
        console.log($scope.events);
      
  };

}


/* End CalMonth Controller                                             */
/***********************************************************************/


/***********************************************************************/
/* Settings Controller                                                 */

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

/* End Settings Controller                                             */
/***********************************************************************/


/***********************************************************************/
/* Account Controller                                                  */

angular.module('application').controller('AccountController', AccountController);
AccountController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn' , 'recordService'];
function AccountController($scope, $stateParams, $state, $controller, loggedIn, recordService) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $recordService: recordService
    })
  );

    
  $scope.Save = function(test){
    console.log('in AccountController loggedIn:', loggedIn );
    
    var response = {};
    loggedIn = 'new value';
    console.log('...in Account.Save...', test, loggedIn);
    console.log(recordService.getRecordData());
    $scope.showstatus = 'zzzzzzz';
  
  };
}

/* End Account Controller                                              */
/***********************************************************************/


/***********************************************************************/
/* Faq Controller                                                      */

angular.module('application').controller('FaqController', FaqController);
FaqController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn' , 'recordService'];
function FaqController($scope, $stateParams, $state, $controller, loggedIn, recordService) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $recordService: recordService
    })
  );
    
  $scope.Test = function(test) {
    console.log('in FaqController loggedIn:', loggedIn );
    var response = {};
    loggedIn = 'new value';
    console.log('...in Faq.Save...', test, loggedIn);  
  };

}

/* End Faq Controller                                                  */
/***********************************************************************/


/***********************************************************************/
/* About Controller                                                    */

angular.module('application').controller('AboutController', AboutController);
AboutController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn' , 'recordService'];
function AboutController($scope, $stateParams, $state, $controller, loggedIn, recordService) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $recordService: recordService
    })
  );
    
  $scope.Test = function(test) {
    console.log('in AboutController loggedIn:', loggedIn );
    var response = {};
    loggedIn = 'new value';
    console.log('...in About.Save...', test, loggedIn);  
  };

}

/* End About Controller                                                */
/***********************************************************************/




/***********************************************************************/
/* Tchalkback Controller                                               */

angular.module('application').controller('TchalkbackController', TchalkbackController);
TchalkbackController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn' , 'recordService'];
function TchalkbackController($scope, $stateParams, $state, $controller, loggedIn, recordService) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $recordService: recordService
    })
  );
    
  $scope.Test = function(test) {
    console.log('in TchalkbackController loggedIn:', loggedIn );
    var response = {};
    loggedIn = 'new value';
    console.log('...in Tchalkback.Save...', test, loggedIn);  
  };

}

/* End Tchalkback Controller                                           */
/***********************************************************************/



/***********************************************************************/
/* Test Controller                                                     */

angular.module('application').controller('TestController', TestController);
TestController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn' , 'recordService'];
function TestController($scope, $stateParams, $state, $controller, loggedIn, recordService) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $recordService: recordService
    })
  );

    $scope.editMode = false;  

    $scope.options = {
      weekOffset: 1,
      daysOfTheWeek: ['S','M', 'T', 'W', 'T', 'F', 'S'],
      constraints: {
          startDate: moment().subtract(1, 'months').format('YYYY-MM-15'),
          endDate: moment().add(12, 'months').format('YYYY-MM-15')
      }
    };

    $scope.events = [
        { date: moment().add(3, 'days').format(), title: "Happy days" },
        { date: moment().subtract(5, 'days').format(), title: "Good old days" },
        { date: moment().subtract(5, 'days').format(), title: "And some more" }
    ];

    $scope.showEvents = function(events) {
        alert(events.map(function(e) { return e.title }).join("\n"));
    };

    $scope.Test = function(test){
          console.log('in TestController loggedIn:', loggedIn );
          
          var response = {};
          loggedIn = 'new value';
          console.log('...in Test...', test, loggedIn);
          console.log(recordService.getRecordData());
          $scope.showstatus = 'zzzzzzz';
          console.log($scope.events);
        
        };

 }

/* End  Test Controller                                                 */
 /***********************************************************************/


})();

/* End app.js                                                          */
/***********************************************************************/
