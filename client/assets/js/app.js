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

  }
/***********************************************************************/
/* Custom app code                                                     */


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

angular.module('application')
  .service('eventsService', function() {
    var events = [];
    this.setEvents = function(data) {
      events = data;
    }
    this.getEvents = function() {
      return events;
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

angular.module('application').controller('HeadController', ['$rootScope', '$scope', '$timeout', '$stateParams', '$state', '$controller', 'loggedIn', 'accountService', 'recordService', 'eventsService',
  function ($rootScope, $scope, $timeout, $stateParams, $state, $controller, loggedIn, accountService, recordService, eventsService) {

    accountService.setAccountStatus("");

    $rootScope.accountStatus = accountService.getAccountStatus();

    $scope.Test = function(test) {

    };

    $scope.pupilNames = $rootScope.pupilNames;

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

    loggedIn = "abc";

    $scope.Home = function(home){
    
    };
 }

/* End Home Controller                                                 */
/***********************************************************************/



/***********************************************************************/
/* Login Controller                                                    */

angular.module('application').controller('LoginController', LoginController);
LoginController.$inject = ['$rootScope', '$scope', '$timeout', '$stateParams', '$state', '$controller', 'loggedIn', 'accountService', 'recordService', 'eventsService'];
function LoginController($rootScope, $scope, $timeout, $stateParams, $state, $controller, loggedIn, accountService, recordService, eventsService) {
  angular.extend(this, $controller('DefaultController', {
      $rootScope: $rootScope, $scope: $scope, $timeout: $timeout, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $accountService: accountService, $recordService: recordService, $eventsService: eventsService
      })
  );

accountService.setAccountStatus('calendar');

if ($state.$current.data.vars.name == 'login') {
  //console.log('yup');
  $scope.showIcons == 'zzzzzzzzzzzzzzzzzzzzz';
};

$scope.test = 'test';


function pupilNames(events) {
  var pupils = [];
  var pn = "";
  for (var prop in events) {

    pn = events[prop].name;

    if (pupils.indexOf(pn) == -1) {

      pupils.push(pn);

    }
  }
  return pupils.sort();
}


  $scope.Login = function(username, password, code) {


    
    loggedIn = false;
    
    $scope.showstatus = '';
  
    
    if ($scope.username !== 'aaa') {
      $scope.showstatus = 'Invalid Username ';
    };

    if ($scope.password !== 'bbb') {
      $scope.showstatus += ' Invalid Password';
    };
  
    var serverRecordData = 
      [        
        {
          day: "Mon",
          dom: "03",
          pupils: [{"c":"c", "i":"CB"}],
          messages:[{"c":"c", "i":"CB", "m":"It’s that time of year again & we need your help. The school is running a fundraising day on the 8th of September. We’d love to see you all there  - Fun for all the family."}]
        },
        {
          day: "Tue",
          dom: "04",
          pupils: [],
          messages:[]
        },
        {
          day: "Wed",
          dom: "05",
          pupils: [{"c":"c", "i":"CB"}],
          messages:[{"c":"c", "i":"CB", "m":"School Clean Up Day - Notice to all parents - The school is having its annual spring clean day and we would love volunteers to help out on the day. Please reply with  details and availability"}]
        },
        {
          day: "Thu",
          dom: "06",
          pupils: [{"c":"a", "i":"AB"},{"c":"b", "i":"BB"}],
          messages:[{"c":"a", "i":"AB", "m":"Warning  - We have have a recent outbreak of headlice in our class recently. I would urge all parents to be vigilant and to read the material provided."}, {"c":"b", "i":"BB", "m":"Warning  - We have have a recent outbreak of headlice in our class recently. I would urge all parents to be vigilant and to read the material provided."}]
        },
        {
          day: "Fri",
          dom: "07",
          pupils: [{"c":"b", "i":"BB"}],
          messages:[{"c":"b", "i":"BB", "m":"Art class today"}]
        },
        {
          day: "Sat",
          dom: "08",
          pupils: [],
          messages:[]
        },
        {
          day: "Sun",
          dom: "09",
          pupils: [],
          messages:[]
        },
        {
          day: "Mon",
          dom: "10",
          pupils: [{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
          messages:[{"c":"b", "i":"BB", "m":"School Clean Up Day - Notice to all parents - The school is having its annual spring clean day and we would love volunteers to help out on the day. Please reply with  details and availability"},{"c":"c", "i":"CB", "m":"Field Trip  - Update - There has been a bad weather warning for next monday, so can all pupils be reminded to bring light rain gear in preparation."}]
        },
        {
          day: "Tue",
          dom: "11",
          pupils: [],
          messages:[]
        },
        {
          day: "Wed",
          dom: "12",
          pupils: [{"c":"c", "i":"CB"}],
          messages:[{"c":"c", "i":"CB", "m":"We are delighted to announce that Don Conroy will be making a special visit to the school next week to talk to the pupils about conservation. Each pupil will be taking part in a bird feeder project at home. Details to follow."}]
        },
        {
          day: "Thu",
          dom: "13",
          pupils: [],
          messages:[]
        },
        {
          day: "Fri",
          dom: "14",
          pupils: [{"c":"a", "i":"AB"},{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
          messages:[{"c":"a", "i":"AB", "m":"Healthy eating policy in effect. Can all parents please ensure that lunches contain healthy options."}, {"c":"b", "i":"BB", "m":"Art class today"}, {"c":"c", "i":"CB", "m":"Hi, I have noticed some disruptive behaviour over the last few weeks and i’d like a chance to discuss it. "}]
        },
        {
          day: "Sat",
          dom: "15",
          pupils: [],
          messages:[]
        },
        {
          day: "Sun",
          dom: "16",
          pupils: [],
          messages:[]
        },
        {
          day: "Mon",
          dom: "17",
          pupils: [{"c":"b", "i":"BB"},{"c":"c", "i":"CB"}],
          messages:[{"c":"b", "i":"BB", "m":"Parent/Teacher meeting taking place on the 19th. Please confirm availability."}, {"c":"c", "i":"CB", "m":"Parent/Teacher meeting taking place on the 20th. Please confirm availability."}]
        },
        {
          day: "Tue",
          dom: "18",
          pupils: [{"c":"c", "i":"CB"}],
          messages:[{"c":"c", "i":"CB", "m":"School Clean Up Day - Notice to all parents - The school is having its annual spring clean day and we would love volunteers to help out on the day. Please reply with  details and availability"}]
        },
        {
          day: "Wed",
          dom: "19",
          pupils: [{"c":"c", "i":"CB"}],
          messages:[{"c":"c", "i":"CB", "m":"It’s that time of year again & we need your help. The school is running a fundraising day on the 8th of September. We’d love to see you all there  - Fun for all the family."}]
        },
        {
          day: "Thu",
          dom: "20",
          pupils: [],
          messages:[]
        },
        {
          day: "Fri",
          dom: "21",
          pupils: [{"c":"b", "i":"BB"}],
          messages:[{"c":"b", "i":"BB", "m":"Parent/Teacher meeting taking place on the 25th. Please confirm availability."}]
        },
        {
          day: "Sat",
          dom: "22",
          pupils: [],
          messages:[]
        },{
          day: "Sun",
          dom: "23",
          pupils: [],
          messages:[]
        }
      ];
      
    recordService.setRecordData(serverRecordData); 
    

    // var serverEvents = 
    //   [
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "Irish", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "Maths", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Alice Brennan", initials: "AB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""},
    //     { date: "2015-07-20", dateEnd: "", name: "Charlie Brennan", initials: "CB", class: "Sr Infants", type: "HW", subject: "English", title: "Essay on Nonsense", content:"300 words", note:"", link: "", image: ""}
    //   ];
    // eventsService.setEvents(serverEvents);
    // $rootScope.pupilNames = pupilNames(serverEvents);

    accountService.setAccountStatus("y");
    $rootScope.accountStatus = accountService.getAccountStatus();

  };

  $scope.Register = function(name, username, password, confpassword) {
    
    loggedIn = false;
    $state.go('calendar');  // test
  };


  $scope.Test = function(test) {
        
  };

}

/* End Login Controller                                                */
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

  if(!$scope.accountStatus) {
    $state.go('home');
  }



  var now = new Date();
  $scope.today = now.getDate();


  var records = recordService.getRecordData();

// mon-fri
  var recordsPrev = records.slice(0, 5);
  var recordsCurr = records.slice(7, 12);
  var recordsNext = records.slice(14, 19);
// mon-sun
  var recordsPrevWeek = records.slice(0, 7);
  var recordsCurrWeek = records.slice(7, 14);
  var recordsNextWeek = records.slice(14, 21);


  $scope.records = recordsCurr;
  $scope.weekA = recordsPrevWeek;
  $scope.weekB = recordsCurrWeek;
  $scope.weekC = recordsNextWeek;
  $scope.disablePrev = "";
  $scope.disableCurr = "y";
  $scope.disableNext = "";    

  $scope.Calendar = function(Calendar) {
    
    $scope.records = recordsPrev;
    var response = {};
    $scope.showstatus = 'zzzzzzz';
    
    var now = new Date();
    var monthDays = [];    
    var dayRecords = {};    

  };

  $scope.prevWeek = function() {

    $scope.disablePrev = "y";
    $scope.disableCurr = "";
    $scope.disableNext = "";
    $scope.records = recordsPrev;
    $scope.weekA = recordsPrevWeek;
    $scope.weekB = recordsCurrWeek;
    $scope.weekC = recordsNextWeek;
  };

  $scope.currWeek = function() {

    $scope.disablePrev = "";
    $scope.disableCurr = "y";
    $scope.disableNext = "";
    $scope.records = recordsCurr;
    $scope.weekA = recordsPrevWeek;
    $scope.weekB = recordsCurrWeek;
    $scope.weekC = recordsNextWeek;
  };

  $scope.nextWeek = function() {

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
/* Yearview Controller                                                 */

angular.module('application').controller('YearviewController', YearviewController);
YearviewController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn' , 'recordService'];
function YearviewController($scope, $stateParams, $state, $controller, loggedIn, recordService) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $recordService: recordService
    })
  );
    

  $scope.options = {
    weekOffset: 1,
    daysOfTheWeek: ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    constraints: {
        startDate: moment().subtract(1, 'months').format('YYYY-MM-15'),
        endDate: moment().add(12, 'months').format('YYYY-MM-15')
    }
  };



  $scope.events = [
      { date: "2015-09-01", name: "CB", title: "First day in School"},
      { date: "2015-10-26", name: "CB", title: "Mid-Term Break - Begins"},
      { date: "2015-10-30", name: "CB", title: "Mid-Term Break - Ends"},
      { date: "2015-12-23", name: "CB", title: "Half day at 12.00"},
      { date: "2015-12-23", name: "CB", title: "Christmas Holiday - Begins"},
      { date: "2016-01-05", name: "CB", title: "Christmas Holiday - Ends"},
      { date: "2016-01-06", name: "CB", title: "Back to School"},
      { date: "2016-02-18", name: "CB", title: "Mid-Term Break - Begins"},
      { date: "2016-02-19", name: "CB", title: "Mid-Term Break - Ends"},
      { date: "2016-02-22", name: "CB", title: "Back to School"},
      { date: "2016-03-17", name: "CB", title: "St. Patrick's Day - School closed"},
      { date: "2016-03-18", name: "CB", title: "Easter Holiday - Begins"},
      { date: "2016-04-01", name: "CB", title: "Easter Holiday - Ends"},
      { date: "2016-04-04", name: "CB", title: "Back to School"},
      { date: "2016-05-02", name: "CB", title: "Holiday - School closed"},
      { date: "2016-05-03", name: "CB", title: "School Holiday - Begins"},
      { date: "2016-06-05", name: "CB", title: "School Holiday - Ends"},
      { date: "2016-06-06", name: "CB", title: "Holiday - School closed"},
      { date: "2016-06-30", name: "CB", title: "Half day at 12.00 - Summer Holiday"}
      
  ];

  $scope.showEvents = function(events) {
      alert(events.map(function(e) { return e.name + ":" + e.title }).join("\n"));
  };

  $scope.Test = function(test) {
    var response = {};
    loggedIn = 'new value';
    $scope.showstatus = 'zzzzzzz';
     
  };

}


/* End Yearview Controller                                             */
/***********************************************************************/


/***********************************************************************/
/* Homework Controller                                                 */

angular.module('application').controller('HomeworkController', HomeworkController);
HomeworkController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
function HomeworkController($scope, $stateParams, $state, $controller) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state
    })
  );

var kid = $stateParams.kid;    
var childDay = ["MON", "MON", "MON"];
var childDom = ["20", "20", "20"];
var childName = ["Aoife Brennan", "Bren Brennan", "Charlie Brennan"];
var childClass = ["Jr Infants", "5th Class", "Sr Infants"];

var journal = [
[
  {subject: "English", 
    topic: [
      {title: "Reading",
        content: [ 
          {item: "Jolly Phonics : Sounds book"}, 
          {item: "Jolly words : Sound out next 5 words"},
          {item: "Tricky words : the , she"}
        ]
      },
      {title: "Shared Reading",
        content: [
          {item: "Nursery Rhyme : Hickory, Dickory, Dock"}, 
          {item: ""},
          {item: ""} 
        ]
      }
    ]
  }   
  ],
 [
  {subject: "English", 
    topic: [
      {title: "Reading",
        content: [ 
          {item: "Class novel Chapters 28 & 29"}
        ]
      },
      {title: "Writing",
        content: [
          {item: "Adjective activity Treasury pg 37"} 
        ]
      },
      {title: "Spellings",
        content: [
          {item: "Unit 4"} 
        ]
      }
    ]
  },
  {subject: "Gaeilge", 
    topic: [
      {title: "Fuaimeanna Agus Focail",
        content: [ 
          {item: "Translate 1-8"}
        ]
      },
      {title: "Litriu",
        content: [
          {item: "Aonad 13 Bosca 2"}
        ]
      }
    ]
  },
  {subject: "Maths", 
    topic: [
      {title: "Planet Maths",
        content: [ 
          {item: "problem solving 1-8"}
        ]
      }
    ]
  },
  {subject: "SESE", 
    topic: [
      {title: "European capitals",
        content: [ 
          {item: "First 14 from list"}
        ]
      }
    ]
  }    
  ],

 [
  {subject: "English", 
    topic: [
      {title: "Reading",
        content: [ 
          {item: "The children are to read TWO pages from their English reader per night, starting with pages 10 & 11"}
        ]
      },
      {title: "Poem to Learn",
        content: [
          {item: "‘Feena Begins to Knit’"} 
        ]
      },
      {title: "Site words to learn",
        content: [
          {item: "These are the words to be read by the children from 2/2 - 6/2"}, 
          {item: "They,  Don’t"},
          {item: "Have,  Got"},
          {item: "Check, Yes"}
        ]
      }
    ]
  },
  {subject: "Irish", 
    topic: [
      {title: "Reading",
        content: [ 
          {item: "Seo na focail atá le foghlaim ag na pásitI ó 2/2 - 6/2"}, 
          {item: "These are the words to be read by the children from 2/2 - 6/2"},
          {item: "liom,  isteach"},
          {item: "níl, mamaí"},
          {item: "anois, le"}
        ]
      }
    ]
  },
  {subject: "Maths", 
    topic: [
      {title: "Learning",
        content: [ 
          {item: "Maths sheet"},
          {item: ""}
        ]
      }
    ]
  }    
  ]
]

$scope.journal = journal[kid];

$scope.day = childDay[kid];
$scope.dom = childDom[kid];
$scope.name = childName[kid];
$scope.class = childClass[kid];


  $scope.Test = function(child){
    $scope.day = childDay[child];
    $scope.dom = childDom[child];
    $scope.name = childName[child];
    $scope.class = childClass[child];


  };

}

/* End Homework Controller                                             */
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
    

}

/* End Tchalkback Controller                                           */
/***********************************************************************/


/***********************************************************************/
/* Quicklook Controller                                                     */

angular.module('application').controller('QuicklookController', ['$rootScope', '$scope', '$timeout', '$stateParams', '$state', '$controller', 'loggedIn', 'accountService' ,
  function ($rootScope, $scope, $timeout, $stateParams, $state, $controller, loggedIn, accountService) {

    accountService.setAccountStatus("");
    $rootScope.accountStatus = accountService.getAccountStatus();

    $scope.Test = function(test) {

    };

}
    

]);


/* End  Quicklook Controller                                            */
/************************************************************************/


/***********************************************************************/
/* Test Controller                                                     */

angular.module('application').controller('TestController', TestController);
TestController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'loggedIn' , 'recordService'];
function TestController($scope, $stateParams, $state, $controller, loggedIn, recordService) {
  angular.extend(this, $controller('DefaultController', {
    $scope: $scope, $stateParams: $stateParams, $state: $state, $loggedIn: loggedIn, $recordService: recordService
    })
  );

}

/* End  Test Controller                                                 */
 /***********************************************************************/


})();

/* End app.js                                                          */
/***********************************************************************/
