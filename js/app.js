// angular.module('app', ['ngResource']);
var app = angular.module('app', []);
app.config(function($routeProvider,$locationProvider) {
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '/partials/template1.html', 
      controller: 'ctrl1'
    })
    .when('/tags/:tagId', {
      templateUrl: '/partials/template2.html', 
      controller:  'ctrl2'
    })
    .when('/another', {
      templateUrl: '/partials/template1.html', 
      controller:  'ctrl1'
    })
    .otherwise({ redirectTo: '/' });
});

$root_folder = '/usecar_new/';
$base_url = 'http://localhost:8888' + $root_folder;

// 車訊副Menu清單
function Menu_Car_Ctrl($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = $base_url + 'car/menu_data';

  $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    success(function(data, status) {
      $scope.brand = data.brand;
      $scope.model = data.model;
      $scope.issue = data.issue;
      $scope.year = data.year;
    }).
    error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;
    });

}

// 廠牌清單Controller
function Brand_List_Ctrl($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = $base_url + 'car/brand_list_main';

  $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    success(function(data, status) {
      $scope.brands = data;
    }).
    error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;
    });
}

// 型號清單Controller
function Model_List_Ctrl($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = $base_url + 'car/model_list_main';

  $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    success(function(data, status) {
      $scope.models = data;
    }).
    error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;
    });
}

// 期數清單Controller
function Issue_List_Ctrl($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = $base_url + 'car/issue_list_main';

  $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    success(function(data, status) {
      $scope.issues = data;
      console.log(data);
    }).
    error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;
    });
}

// 年份清單Controller
function Year_List_Ctrl($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = $base_url + 'car/year_list_main';

  $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    success(function(data, status) {
      $scope.year = data;
      console.log(data);
    }).
    error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;
    });
}

// 編輯廠牌Controller
function Brand_Edit_Ctrl ($scope, $http,  $location, $templateCache) {

  var path      = $location.path();
  var result    = path.match(/^(.+)car\/brand_edit\/([0-9]+)+/);
  var brand_id  = result[2];

  $http({
      method: 'POST',
      url: $base_url + 'car/get_brand_by_id',
      data: 'id='+brand_id,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      cache: $templateCache
    }).
    success(function(data) {
        $scope.brand = data;
    }).
    error(function(response) {
        $scope.codeStatus = response || "Request failed";
    });


  $scope.save = function() {
    console.log($scope.brand);
    var method = 'POST';
    var url = $base_url + 'car_process/brand_update_process';

    $http({
      method: method,
      url: url,
      data: $scope.brand,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      cache: $templateCache
    }).
    success(function(response) {
        console.log(response);
        $scope.codeStatus = response.data;
    }).
    error(function(response) {
        $scope.codeStatus = response || "Request failed";
    });
    return false;
  };
}

// 新增型號Controller
function Model_Add_Ctrl($scope, $http, $templateCache) {
	$scope.method = 'GET';
	$scope.url = $base_url + 'car/brand_list/select';

	$http({method: $scope.method, url: $scope.url, cache: $templateCache}).
    success(function(data, status) {
      $scope.brands = data;
      $scope.first = $scope.brands[0];
    }).
    error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;
    });
}

// 編輯型號Controller
function Model_Edit_Ctrl ($scope, $http, $location, $templateCache) {

  var path      = $location.path();
  var result    = path.match(/^(.+)car\/model_edit\/([0-9]+)+/);
  var brand_id  = result[2];

  $http({
      method: 'POST',
      url: $base_url + 'car/get_model_by_id',
      data: 'id='+brand_id,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      cache: $templateCache
    }).
    success(function(data) {
        $scope.model = data;
        console.log(path);
    }).
    error(function(response) {
        $scope.codeStatus = response || "Request failed";
    });

  $scope.save = function() {
    console.log($scope.brand);
    var method = 'POST';
    var url = $base_url + 'car_process/brand_update_process';

    $http({
      method: method,
      url: url,
      data: $scope.brand,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      cache: $templateCache
    }).
    success(function(response) {
        console.log(response);
        $scope.codeStatus = response.data;
    }).
    error(function(response) {
        $scope.codeStatus = response || "Request failed";
    });
    return false;
  };
}
