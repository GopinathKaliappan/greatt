var app = angular.module('slidebox', ['ionic', 'tabSlideBox','ngCordova'])
		.run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout', 
					function($q, $http, $rootScope, $location, $window, $timeout){
	    
	        $rootScope.$on("$locationChangeStart", function(event, next, current){
	            $rootScope.error = null;
	            console.log("Route change!!!", $location.path());
	            var path = $location.path();
	            
	            
	            console.log("App Loaded!!!");
	        });
	    }
	    ]);
		
		app.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider.state('index', {
				url : '/',
				templateUrl : 'index.html',
				controller : 'IndexCtrl'
			});
		
			$urlRouterProvider.otherwise("/");
		});
		
        app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
			function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){
			$scope.onSlideMove = function(data){
				//alert("You have selected " + data.index + " tab");
			};	
        }
        ])

        var app = angular.module('slidebox', ['ionic', 'tabSlideBox'])
		.run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout', 
					function($q, $http, $rootScope, $location, $window, $timeout){
	    
	        $rootScope.$on("$locationChangeStart", function(event, next, current){
	            $rootScope.error = null;
	            console.log("Route change!!!", $location.path());
	            var path = $location.path();
	            
	            
	            console.log("App Loaded!!!");
	        });
	    }
	    ]);
		
		app.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider.state('index', {
				url : '/',
				templateUrl : 'index.html',
				controller : 'IndexCtrl'
			});
		
			$urlRouterProvider.otherwise("/");
		});
		
        app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
			function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){
			$scope.onSlideMove = function(data){
				//alert("You have selected " + data.index + " tab");
			};	
        }
        ])

app.controller("FeedController", function($http, $scope) {
 


setTimeout(function(){

$scope.$apply(function(){

    

$scope.dclass='card-5';
})

},2000)





$scope.viewnews=function(link)
{
window.open(link, '_blank', 'location=no','hardwareback=no','clearcache=yes');
    }
    $scope.init = function() {


        try 
        {

$scope.con=angular.fromJson(window.localStorage['con']);

$scope.timesofindiae=angular.fromJson(window.localStorage['timesofindiae']);
$scope.motorsport=angular.fromJson(window.localStorage['motorsport']);
$scope.football=angular.fromJson(window.localStorage['football']);
$scope.entertainment=angular.fromJson(window.localStorage['entertainment']);
$scope.world=angular.fromJson(window.localStorage['world']);
$scope.con1=angular.fromJson(window.localStorage['con1']);
$scope.ndtvhealth=angular.fromJson(window.localStorage['ndtvhealth']);

$scope.ndtvbusiness=angular.fromJson(window.localStorage['ndtvbusiness']);


$scope.hindhuscience=angular.fromJson(window.localStorage['hindhuscience']);


        

        }

        catch(e)
        {

        }
        //$http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/dinamalar/Front_page_news" } })




        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://rss.cnn.com/rss/edition_sport.rss" } })
            .success(function(data) {
                $scope.hindhuscience=data.responseData.feed.entries;
           window.localStorage['hindhuscience']=angular.toJson($scope.hindhuscience);
           
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });
           
$http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://rss.cnn.com/rss/edition.rss" } })
            .success(function(data) {
                $scope.con=data.responseData.feed.entries;

window.localStorage['con']=angular.toJson($scope.con);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });

        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://rss.cnn.com/rss/edition_technology.rss" } })
            .success(function(data) {
                $scope.con1=data.responseData.feed.entries;
            window.localStorage['con1']=angular.toJson($scope.con1);

            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });



        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://rss.cnn.com/rss/edition_world.rss" } })
            .success(function(data) {
                $scope.world=data.responseData.feed.entries;
            window.localStorage['world']=angular.toJson($scope.world);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });



        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://rss.cnn.com/rss/edition_entertainment.rss" } })
            .success(function(data) {
                $scope.entertainment=data.responseData.feed.entries;
           window.localStorage['entertainment']=angular.toJson($scope.entertainment);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });





        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://rss.cnn.com/rss/edition_football.rss" } })
            .success(function(data) {
                $scope.football=data.responseData.feed.entries;
            window.localStorage['football']=angular.toJson($scope.football);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });


        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://rss.cnn.com/rss/edition_motorsport.rss" } })
            .success(function(data) {
                $scope.motorsport=data.responseData.feed.entries;
                window.localStorage['motorsport']=angular.toJson($scope.motorsport);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });



        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://timesofindia.indiatimes.com/rssfeeds/913168846.cms" } })
            .success(function(data) {
                $scope.timesofindiae=data.responseData.feed.entries;
           window.localStorage['timesofindiae']=angular.toJson($scope.timesofindiae);
           
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });


        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/ndtvcooks-latest" } })
            .success(function(data) {
                $scope.ndtvhealth=data.responseData.feed.entries;
           window.localStorage['ndtvhealth']=angular.toJson($scope.ndtvhealth);
           
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });


        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/ndtvprofit-latest" } })
            .success(function(data) {
                $scope.ndtvbusiness=data.responseData.feed.entries;
           window.localStorage['ndtvbusiness']=angular.toJson($scope.ndtvbusiness);
           
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });


    }
 $scope.init();
});