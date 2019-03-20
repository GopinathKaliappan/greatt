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
 

var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

var ImgSource = [
  "http://img5.uploadhouse.com/fileuploads/17699/176992640c06707c66a5c0b08a2549c69745dc2c.png",
  "http://img6.uploadhouse.com/fileuploads/17699/17699263b01721074bf094aa3bc695aa19c8d573.png",
  "http://img6.uploadhouse.com/fileuploads/17699/17699262833250fa3063b708c41042005fda437d.png",
  "http://img9.uploadhouse.com/fileuploads/17699/176992615db99bb0fd652a2e6041388b2839a634.png",
  "http://img4.uploadhouse.com/fileuploads/17699/176992601ca0f28ba4a8f7b41f99ee026d7aaed8.png",
  "http://img3.uploadhouse.com/fileuploads/17699/17699259cb2d70c6882adc285ab8d519658b5dd7.png",
  "http://img2.uploadhouse.com/fileuploads/17699/1769925824ea93cbb77ba9e95c1a4cec7f89b80c.png",
  "http://img7.uploadhouse.com/fileuploads/17699/1769925708af4fb3c954b1d856da1f4d4dcd548a.png",
  "http://img9.uploadhouse.com/fileuploads/17699/176992568b759acd78f7cbe98b6e4a7baa90e717.png",
  "http://img9.uploadhouse.com/fileuploads/17699/176992554c2ca340cc2ea8c0606ecd320824756e.png"
];

function RandomFunction(MaxValue, MinValue) {
        return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
    }
    
function ShuffleImages() {
    var ImgAll = $(Source).children();
    var ImgThis = $(Source + " div:first-child");
    var ImgArr = new Array();

    for (var i = 0; i < ImgAll.length; i++) {
        ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
        ImgThis = ImgThis.next();
    }
    
        ImgThis = $(Source + " div:first-child");
    
    for (var z = 0; z < ImgAll.length; z++) {
    var RandomNumber = RandomFunction(0, ImgArr.length - 1);

        $("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
        ImgArr.splice(RandomNumber, 1);
        ImgThis = ImgThis.next();
    }
}

function ResetGame() {
    ShuffleImages();
    $(Source + " div img").hide();
    $(Source + " div").css("visibility", "visible");
    Counter = 0;
    $("#success").remove();
    $("#counter").html("" + Counter);
    BoxOpened = "";
    ImgOpened = "";
    ImgFound = 0;
    return false;
}

function OpenCard() {
    var id = $(this).attr("id");

    if ($("#" + id + " img").is(":hidden")) {
        $(Source + " div").unbind("click", OpenCard);
    
        $("#" + id + " img").slideDown('fast');

        if (ImgOpened == "") {
            BoxOpened = id;
            ImgOpened = $("#" + id + " img").attr("src");
            setTimeout(function() {
                $(Source + " div").bind("click", OpenCard)
            }, 300);
        } else {
            CurrentOpened = $("#" + id + " img").attr("src");
            if (ImgOpened != CurrentOpened) {
                setTimeout(function() {
                    $("#" + id + " img").slideUp('fast');
                    $("#" + BoxOpened + " img").slideUp('fast');
                    BoxOpened = "";
                    ImgOpened = "";
                }, 400);
            } else {
                $("#" + id + " img").parent().css("visibility", "hidden");
                $("#" + BoxOpened + " img").parent().css("visibility", "hidden");
                ImgFound++;
                BoxOpened = "";
                ImgOpened = "";
            }
            setTimeout(function() {
                $(Source + " div").bind("click", OpenCard)
            }, 400);
        }
        Counter++;
        $("#counter").html("" + Counter);

        if (ImgFound == ImgSource.length) {
            $("#counter").prepend('<span id="success">You Found All Pictues With </span>');
        }
    }
}

$(function() {

for (var y = 1; y < 3 ; y++) {
    $.each(ImgSource, function(i, val) {
        $(Source).append("<div id=card" + y + i + "><img src=" + val + " />");
    });
}
    $(Source + " div").click(OpenCard);
    ShuffleImages();
});



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


$scope.india=angular.fromJson(window.localStorage['india']);
           
           
$scope.hindhuscience=angular.fromJson(window.localStorage['hindhuscience']);


        

        }

        catch(e)
        {

        }
        //$http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/dinamalar/Front_page_news" } })


try
{


        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/Vikatan_India_News" } })
            .success(function(data) {
                $scope.india=data.responseData.feed.entries;
           window.localStorage['india']=angular.toJson($scope.india);
           
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });



        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/Vikatan_TamilNadu_News" } })
            .success(function(data) {
                $scope.hindhuscience=data.responseData.feed.entries;
           window.localStorage['hindhuscience']=angular.toJson($scope.hindhuscience);
           
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });
           
$http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/Vikatan_World_News" } })
            .success(function(data) {
                $scope.con=data.responseData.feed.entries;

window.localStorage['con']=angular.toJson($scope.con);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });

        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/Vikatan_Sports_News" } })
            .success(function(data) {
                $scope.con1=data.responseData.feed.entries;
            window.localStorage['con1']=angular.toJson($scope.con1);

            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });



        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/TimepassVikatan" } })
            .success(function(data) {
                $scope.world=data.responseData.feed.entries;
            window.localStorage['world']=angular.toJson($scope.world);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });



        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/Vikatan_Entertainment_News" } })
            .success(function(data) {
                $scope.entertainment=data.responseData.feed.entries;
           window.localStorage['entertainment']=angular.toJson($scope.entertainment);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });





        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://cinema.dinamalar.com/rss.php" } })
            .success(function(data) {
                $scope.football=data.responseData.feed.entries;
            window.localStorage['football']=angular.toJson($scope.football);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });


        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/MotorVikatan" } })
            .success(function(data) {
                $scope.motorsport=data.responseData.feed.entries;
                window.localStorage['motorsport']=angular.toJson($scope.motorsport);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });



        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/Avalkitchen" } })
            .success(function(data) {
                $scope.timesofindiae=data.responseData.feed.entries;
           window.localStorage['timesofindiae']=angular.toJson($scope.timesofindiae);
           
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });


        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://rss.dinamalar.com/?cat=fpn" } })
            .success(function(data) {
                $scope.ndtvhealth=data.responseData.feed.entries;
           window.localStorage['ndtvhealth']=angular.toJson($scope.ndtvhealth);
           
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });


        $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://rss.dinamalar.com/?cat=ara1" } })
            .success(function(data) {
                $scope.ndtvbusiness=data.responseData.feed.entries;
           window.localStorage['ndtvbusiness']=angular.toJson($scope.ndtvbusiness);
           
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });
        }
        catch(e)
        {
            
        }


    }
 $scope.init();
});